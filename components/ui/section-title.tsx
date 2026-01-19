interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-section-title ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
