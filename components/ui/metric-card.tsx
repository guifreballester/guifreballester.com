interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-[--color-border] p-4 text-center [html[data-theme=light]_&]:border-[--color-border-light]">
      <div className="mb-1 font-mono text-2xl font-bold text-[--color-accent]">
        {value}
      </div>
      <div className="text-sm text-[--color-muted]">{label}</div>
    </div>
  );
}
