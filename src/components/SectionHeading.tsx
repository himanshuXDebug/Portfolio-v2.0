interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] dark:text-[#EDEDED] flex items-center gap-3">
        <span className="w-3 h-3 rounded-full bg-[#C2410C] dark:bg-[#F97316]"></span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm font-mono text-stone-500 pl-6">
          {subtitle}
        </p>
      )}
    </div>
  );
}