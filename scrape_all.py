#!/usr/bin/env python3
"""Scrape ALL blog posts from brendayoder.com across all pagination pages."""

import re
import os
import urllib.request
import time

BASE = "https://brendayoder.com"
CONTENT_DIR = "content/blog"
IMAGE_DIR = "public/blog-images"

os.makedirs(CONTENT_DIR, exist_ok=True)
os.makedirs(IMAGE_DIR, exist_ok=True)

# Track existing slugs to skip
existing = set(f.replace('.mdx', '') for f in os.listdir(CONTENT_DIR) if f.endswith('.mdx'))


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def download_image(url, filename):
    try:
        url = url.replace(" ", "%20").replace("\u202f", "%E2%80%AF")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            with open(os.path.join(IMAGE_DIR, filename), "wb") as f:
                f.write(r.read())
        return True
    except Exception as e:
        print(f"    IMG FAIL: {e}")
        return False


def find_matching_close_div(html, start_pos):
    depth = 0
    i = start_pos
    while i < len(html):
        open_match = re.search(r'<div[\s>]', html[i:])
        close_match = re.search(r'</div>', html[i:])
        if not close_match:
            return len(html)
        open_pos = open_match.start() + i if open_match else len(html)
        close_pos = close_match.start() + i
        if open_pos < close_pos:
            depth += 1
            i = open_pos + 4
        else:
            if depth == 0:
                return close_pos
            depth -= 1
            i = close_pos + 6
    return len(html)


def extract_posts_from_page(html):
    """Extract post metadata from a blog index page."""
    posts = []
    # Split by post blocks - use post IDs
    items = re.findall(
        r'class="et_pb_post clearfix[^"]*hentry\s+([^"]*)"(.*?)(?=class="et_pb_post clearfix|<div class="et_pb_ajax|<script|</article)',
        html, re.DOTALL
    )

    for cats_str, block in items:
        post = {}
        cats = re.findall(r'category-([a-z0-9-]+)', cats_str)
        post["categories"] = [c.replace("-", " ").title() for c in cats]

        img_match = re.search(r'<img[^>]+src="([^"]+)"', block)
        post["image"] = img_match.group(1) if img_match else ""

        title_match = re.search(r'class="entry-title">\s*<a href="([^"]+)">(.+?)</a>', block, re.DOTALL)
        if title_match:
            post["url"] = title_match.group(1)
            raw_title = re.sub(r'<[^>]+>', '', title_match.group(2)).strip()
            for old, new in {'&#8217;': "\u2019", '&#8211;': "-", '&#8212;': ",",
                             '&#8220;': "\u201c", '&#8221;': "\u201d", '&#038;': '&',
                             '&#8230;': '...'}.items():
                raw_title = raw_title.replace(old, new)
            post["title"] = raw_title
        else:
            continue

        date_match = re.search(r'class="published">([^<]+)', block)
        post["date_raw"] = date_match.group(1).strip() if date_match else ""

        excerpt_match = re.search(r'class="post-content-inner">\s*<p>(.*?)</p>', block, re.DOTALL)
        if excerpt_match:
            post["excerpt"] = re.sub(r'<[^>]+>', '', excerpt_match.group(1)).strip()
        else:
            post["excerpt"] = ""

        slug_match = re.search(r'brendayoder\.com/([^/]+)/?$', post["url"])
        post["slug"] = slug_match.group(1) if slug_match else ""

        if post["slug"]:
            posts.append(post)

    return posts


def clean_html_to_markdown(html):
    text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    # Remove image tags (we use featured image only)
    text = re.sub(r'<img[^>]*>', '', text)
    text = re.sub(r'<figure[^>]*>.*?</figure>', '', text, flags=re.DOTALL)

    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'\n# \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'\n## \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'\n### \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'\n#### \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<h5[^>]*>(.*?)</h5>', r'\n##### \1\n', text, flags=re.DOTALL)
    text = re.sub(r'<blockquote[^>]*>(.*?)</blockquote>',
                  lambda m: '\n> ' + re.sub(r'\s+', ' ', m.group(1)).strip() + '\n',
                  text, flags=re.DOTALL)
    text = re.sub(r'<em>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<i>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<strong>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<b>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<a[^>]+href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    text = re.sub(r'<li[^>]*>\s*(.*?)\s*</li>', r'- \1', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'</p>', '\n\n', text)
    text = re.sub(r'<[^>]+>', '', text)

    entities = {
        '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
        '&#8217;': "'", '&#8216;': "'", '&#8220;': '"', '&#8221;': '"',
        '&#8211;': '-', '&#8212;': ',', '&nbsp;': ' ', '&#8230;': '...',
        '&#038;': '&', '&#8242;': "'", '&#8243;': '"',
        '\u2019': "'", '\u2018': "'", '\u201c': '"', '\u201d': '"',
        '\u2013': '-', '\u2014': ',', '\u2026': '...', '\xa0': ' ',
    }
    for ent, repl in entities.items():
        text = text.replace(ent, repl)
    text = text.replace('—', ',')

    text = re.sub(r' +', ' ', text)
    lines = [l.strip() for l in text.split('\n')]
    text = '\n'.join(lines)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def extract_post_date(html):
    dm = re.search(r'"datePublished"\s*:\s*"([^"]+)"', html)
    if dm:
        return dm.group(1)[:10]
    dm = re.search(r'<meta property="article:published_time" content="([^"]+)"', html)
    if dm:
        return dm.group(1)[:10]
    return ""


def parse_date_str(date_str):
    from datetime import datetime
    for fmt in ["%b %d, %Y", "%B %d, %Y"]:
        try:
            return datetime.strptime(date_str.strip(), fmt).strftime("%Y-%m-%d")
        except:
            continue
    return date_str


def scrape_post(post):
    """Scrape a single post and save as MDX. Returns (success, title)."""
    slug = post["slug"]

    try:
        post_html = fetch(post["url"])
    except Exception as e:
        print(f"    FETCH FAIL: {e}")
        return False, post["title"]

    # Date
    page_date = extract_post_date(post_html)
    if page_date and len(page_date) == 10:
        date = page_date
    elif post["date_raw"]:
        date = parse_date_str(post["date_raw"])
    else:
        date = ""

    # Content
    cm = re.search(r'class="[^"]*et_pb_post_content_0_tb_body[^"]*">\s*(.*)', post_html, re.DOTALL)
    raw_content = ""
    if cm:
        raw = cm.group(1)
        end = find_matching_close_div(raw, 0)
        raw_content = raw[:end]

    if not raw_content:
        # Fallback: entry-content
        cm2 = re.search(r'class="entry-content"[^>]*>(.*?)(?=<div class="et_post_meta_wrapper|<footer|<div id="comment)', post_html, re.DOTALL)
        if cm2:
            raw_content = cm2.group(1)

    if raw_content:
        content = clean_html_to_markdown(raw_content)
    else:
        content = ""
        print(f"    NO CONTENT")
        return False, post["title"]

    if len(content) < 30:
        print(f"    TOO SHORT ({len(content)} chars)")
        return False, post["title"]

    # Excerpt
    excerpt = post["excerpt"]
    if not excerpt:
        paras = [p for p in content.split('\n\n') if p.strip() and not p.startswith('#')]
        excerpt = paras[0][:200].strip() if paras else ""
    excerpt = excerpt.replace('"', "'").replace('\n', ' ')

    # Image
    local_image = ""
    if post["image"]:
        ext = os.path.splitext(post["image"].split("?")[0])[1] or ".jpg"
        img_filename = f"{slug}{ext}"
        if download_image(post["image"], img_filename):
            local_image = f"/blog-images/{img_filename}"

    category = post["categories"][0] if post["categories"] else "Uncategorized"
    title = post["title"].replace('"', "'").replace('—', ',')

    mdx = f'''---
title: "{title}"
date: "{date}"
category: "{category}"
excerpt: "{excerpt}"
image: "{local_image}"
---

{content}
'''
    with open(os.path.join(CONTENT_DIR, f"{slug}.mdx"), "w", encoding="utf-8") as f:
        f.write(mdx)

    return True, post["title"]


def main():
    all_slugs_seen = set()
    new_posts = []
    page = 2  # Start from page 2 since we already have page 1
    empty_pages = 0
    total_new = 0
    total_failed = 0
    failed_titles = []

    print(f"Already have {len(existing)} posts. Scraping additional pages...\n")

    while True:
        print(f"--- Page {page} ---")
        try:
            html = fetch(f"{BASE}/blog/page/{page}/")
        except Exception as e:
            print(f"  Fetch error: {e}")
            break

        posts = extract_posts_from_page(html)

        if not posts:
            empty_pages += 1
            print(f"  No posts found (empty #{empty_pages})")
            if empty_pages >= 2:
                print("  2 consecutive empty pages, stopping.")
                break
            page += 1
            continue

        empty_pages = 0  # Reset

        # Check for duplicate slugs (means we've looped)
        new_on_page = [p for p in posts if p["slug"] not in existing and p["slug"] not in all_slugs_seen]

        if not new_on_page:
            # All posts on this page are duplicates, likely looping
            print(f"  All {len(posts)} posts are duplicates. Stopping.")
            break

        for p in posts:
            all_slugs_seen.add(p["slug"])

        print(f"  Found {len(posts)} posts, {len(new_on_page)} new")

        for post in new_on_page:
            print(f"  [{total_new+1}] {post['title']}")
            success, title = scrape_post(post)
            if success:
                total_new += 1
                new_posts.append(title)
                print(f"    OK")
            else:
                total_failed += 1
                failed_titles.append(title)

        page += 1
        time.sleep(0.5)  # Be polite

    print("\n" + "=" * 60)
    print("PAGINATION SCRAPE COMPLETE")
    print(f"  Pages crawled: {page - 2}")
    print(f"  New posts scraped: {total_new}")
    print(f"  Failed: {total_failed}")
    print(f"  Previously existing: {len(existing)}")
    print(f"  Total posts now: {len(existing) + total_new}")
    if failed_titles:
        print(f"\n  Failed:")
        for t in failed_titles:
            print(f"    - {t}")
    print("=" * 60)


if __name__ == "__main__":
    main()
