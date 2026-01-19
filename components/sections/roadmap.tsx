import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { roadmapContent } from '@/config/content';

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle
          badge="Feuille de Route"
          title="Notre vision et nos prochaines étapes"
          subtitle="Un plan ambitieux sur 18 mois pour déployer DjassApp en Côte d'Ivoire puis dans toute l'Afrique de l'Ouest."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full" />

            <div className="space-y-12">
              {roadmapContent.milestones.map((milestone, index) => (
                <div key={milestone.period} className="relative flex gap-8 group">
                  {/* Milestone Market */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pt-1">
                    <div className="bg-background rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                        {milestone.period}
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
