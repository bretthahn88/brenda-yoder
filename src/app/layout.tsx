import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brenda Yoder | Counselor, Coach, Author",
    template: "%s | Brenda Yoder",
  },
  description:
    "Helping women live grounded, uncomplicated lives through counseling, coaching, writing, and speaking. Based in Shipshewana, Indiana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} antialiased`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
