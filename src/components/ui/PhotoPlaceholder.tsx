"use client";

interface PhotoPlaceholderProps {
  aspect?: "portrait" | "landscape" | "square";
  label: string;
  className?: string;
}

export default function PhotoPlaceholder({
  aspect = "portrait",
  label,
  className = "",
}: PhotoPlaceholderProps) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "landscape"
        ? "aspect-[4/3]"
        : "aspect-square";

  return (
    <>
      {/* PHOTO: {label} */}
      <div
        className={`${aspectClass} rounded-2xl bg-gradient-to-br from-sage/20 via-gold/15 to-brown/20 flex items-center justify-center ${className}`}
      >
        <span className="text-sage/40 font-serif text-lg italic text-center px-4">
          {label}
        </span>
      </div>
    </>
  );
}
