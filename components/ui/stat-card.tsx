interface StatCardProps {
  value: string;
  label: string;
  source?: string;
}

export function StatCard({ value, label, source }: StatCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-colors duration-300">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-foreground font-medium mb-1">{label}</div>
      {source && (
        <div className="text-sm text-muted-foreground italic">{source}</div>
      )}
    </div>
  );
}
