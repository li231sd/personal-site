// components/TwoColumn.tsx
export default function TwoColumn({
  children,
  margin,
}: {
  children: React.ReactNode;
  margin?: React.ReactNode;
}) {
  return (
    <div className="page-layout mx-auto max-w-6xl px-[var(--page-gutter)] py-16 md:py-24 flex flex-col md:flex-row gap-10 md:gap-16 page-reveal">
      <div className="max-w-[70ch] min-w-0 flex-1">{children}</div>
      {margin && <div className="md:w-48 shrink-0 md:pt-1">{margin}</div>}
    </div>
  );
}
