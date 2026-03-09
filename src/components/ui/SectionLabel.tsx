interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-3 text-gold uppercase tracking-[0.2em] text-xs font-sans font-medium">
      <span className="w-8 h-px bg-gold/50" />
      {children}
    </span>
  );
}
