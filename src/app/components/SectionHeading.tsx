interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-baseline gap-3 mb-6 pb-2 border-b border-stone-200">
      <span className="font-mono text-[10px] font-medium text-teal-700 bg-teal-50 rounded px-1.5 py-0.5 leading-none">
        {index}
      </span>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-stone-500">{title}</span>
    </h2>
  );
}
