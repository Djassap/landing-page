import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { roadmapContent } from '@/config/content';

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionTitle title={roadmapContent.title} />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {roadmapContent.milestones.map((milestone, index) => (
                <div key={milestone.period} className="relative flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 relative z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                      <div className="text-sm font-semibold text-primary mb-2">{milestone.period}</div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
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
