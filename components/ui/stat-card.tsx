interface StatCardProps {
  value: string;
  label: string;
  source?: string;
}

export function StatCard({ value, label, source }: StatCardProps) {
  return (
    <div className="group relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent rounded-2xl transition-all duration-300 group-hover:from-primary/5" />
      
      {/* Card content */}
      <div className="relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
        {/* Large number */}
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary via-primary to-purple-600 bg-clip-text text-transparent mb-3">
          {value}
        </div>
        
        {/* Label */}
        <div className="text-foreground/80 font-medium text-sm leading-relaxed mb-2">
          {label}
        </div>
        
        {/* Source */}
        {source && (
          <div className="text-xs text-muted-foreground italic">
            {source}
          </div>
        )}
      </div>
    </div>
  );
}
