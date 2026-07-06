interface Props {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {subtitle && (
        <p className="mb-4 uppercase tracking-[0.3em] text-[#D9B06D]">
          {subtitle}
        </p>
      )}

      <h2 className="mb-6 font-[family:var(--font-heading)] text-5xl text-[#183153]">
        {title}
      </h2>

      {description && (
        <p className="leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}