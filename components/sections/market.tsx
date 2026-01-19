import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { StatCard } from '../ui/stat-card';
import { marketContent } from '@/config/content';

export function Market() {
  return (
    <section id="market" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background">
      <Container>
        <SectionTitle 
          badge="Marché"
          title="Un marché en pleine expansion avec un potentiel immense"
          subtitle="Le commerce informel représente 90% de l'activité économique en Côte d'Ivoire, touchant des millions de vendeurs et acheteurs au quotidien dans tous les secteurs."
        />
        
        {/* Stats Grid */}
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

        {/* Bottom paragraph - elegant design */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl blur-2xl" />
          <div className="relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {marketContent.paragraph}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
