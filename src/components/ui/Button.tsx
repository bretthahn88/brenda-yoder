import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const base =
    "inline-block px-7 py-3 rounded-full font-sans text-sm tracking-wide transition-all duration-300 text-center";
  const variants = {
    primary: "bg-sage text-white hover:bg-sage-light",
    secondary: "bg-gold text-white hover:bg-gold/90",
    outline: "border-2 border-sage text-sage hover:bg-sage hover:text-white",
  };

  const isExternal = external ?? href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
