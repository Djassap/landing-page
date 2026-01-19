import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { Mic, Check, Sparkles } from 'lucide-react';
import { solutionContent } from '@/config/content';

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <Container>
        <SectionTitle 
          badge="Notre Solution"
          title="Le Djassaman : L'assistant vocal qui transforme votre commerce"
          subtitle="Notre intelligence artificielle vocale guide les vendeurs et acheteurs pas à pas, rendant le commerce en ligne accessible à tous, même sans expérience technique."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Djassaman - Elegant presentation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-primary/5 rounded-full border border-primary/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <Mic className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {solutionContent.djassaman.title}
                </h3>
                <p className="text-xs text-primary font-medium">{solutionContent.djassaman.subtitle}</p>
              </div>
            </div>
            
            <div className="space-y-4 pl-4 border-l-2 border-primary/20">
              <p className="text-base text-foreground/90 leading-relaxed">
                {solutionContent.djassaman.sellerDescription}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {solutionContent.djassaman.buyerDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 pl-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground italic">
                Une expérience guidée et intuitive à chaque étape
              </p>
            </div>
          </div>

          {/* Inclusion - Clean checklist */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              {solutionContent.inclusion.title}
            </h3>
            
            <div className="space-y-3">
              {solutionContent.inclusion.points.map((point, index) => (
                <div 
                  key={point} 
                  className="group flex items-start gap-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-0.5 transition-colors">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed flex-1">{point}</p>
                </div>
              ))}
            </div>

            <div className="pl-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Accessible à <span className="text-foreground font-semibold">tous</span>, sans barrière technique ni linguistique
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
