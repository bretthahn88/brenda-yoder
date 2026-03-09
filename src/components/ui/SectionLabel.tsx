interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-gold uppercase tracking-[0.2em] text-xs font-sans font-medium">
      {children}
    </span>
  );
}
