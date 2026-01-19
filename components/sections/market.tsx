import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { StatCard } from '../ui/stat-card';
import { marketContent } from '@/config/content';

export function Market() {
  return (
    <section id="market" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle 
          title={marketContent.title} 
          subtitle={marketContent.subtitle} 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketContent.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              source={stat.source}
            />
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 border border-border">
          <p className="text-lg text-foreground leading-relaxed">
            {marketContent.paragraph}
          </p>
        </div>
      </Container>
    </section>
  );
}
