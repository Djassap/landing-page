import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { Mic, Check } from 'lucide-react';
import { solutionContent } from '@/config/content';

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle 
          title={solutionContent.title} 
          subtitle={solutionContent.subtitle} 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-brand/10 rounded-3xl p-8 border border-border">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4">
              <Mic className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
              {solutionContent.djassaman.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{solutionContent.djassaman.subtitle}</p>
            <p className="text-foreground mb-4">{solutionContent.djassaman.sellerDescription}</p>
            <p className="text-muted-foreground">{solutionContent.djassaman.buyerDescription}</p>
          </div>

          <div className="bg-muted/50 rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              {solutionContent.inclusion.title}
            </h3>
            <ul className="space-y-4">
              {solutionContent.inclusion.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
