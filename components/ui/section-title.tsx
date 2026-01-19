import { ReactNode } from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
}

export function SectionTitle({ badge, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-16 w-full">
      {badge && (
        <div className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
          {badge}
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
        {/* Left: Title */}
        <h2 className="text-section-title text-foreground leading-tight break-words">
          {title}
        </h2>
        
        {/* Right: Description */}
        {subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed lg:pt-2 break-words">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
