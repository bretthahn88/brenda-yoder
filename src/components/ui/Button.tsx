import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-7 py-3 rounded-full font-sans text-sm tracking-wide transition-all duration-300 text-center";
  const variants = {
    primary: "bg-sage text-white hover:bg-sage-light",
    secondary: "bg-gold text-white hover:bg-gold/90",
    outline: "border-2 border-sage text-sage hover:bg-sage hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
