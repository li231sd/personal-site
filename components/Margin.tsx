// components/Margin.tsx
interface MarginItem {
  label: string;
  value: string;
}

export default function Margin({ items }: { items: MarginItem[] }) {
  return (
    <aside className="font-[var(--font-mono-var)] text-xs uppercase tracking-wide text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)] space-y-4 md:space-y-3">
      {items.map((item) => (
        <div key={item.label} className="margin-item">
          <div className="text-[10px] opacity-70">{item.label}</div>
          <div className="text-[var(--color-gold)] normal-case tracking-normal mt-0.5">
            {item.value}
          </div>
        </div>
      ))}
    </aside>
  );
}
