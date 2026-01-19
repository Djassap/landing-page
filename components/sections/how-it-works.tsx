import { Container } from '../ui/container';
import { Badge } from '@/components/ui/badge';
import { howItWorksContent } from '@/config/content';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <Container>
        {/* Title centered */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            {howItWorksContent.title}
          </h2>
        </div>

        {/* Seller Journey - Content LEFT, Visual RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">Parcours Vendeur</Badge>
            <h3 className="text-3xl font-bold text-foreground">
              {howItWorksContent.seller.title}
            </h3>
            <div className="space-y-6">
              {howItWorksContent.seller.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="bg-gradient-to-br from-mauve-50 to-brand-50 rounded-3xl p-12 min-h-[400px] flex items-center justify-center border border-border">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-foreground">Parcours Vendeur</p>
            </div>
          </div>
        </div>

        {/* Buyer Journey - Visual LEFT, Content RIGHT (alternating) */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Visual placeholder */}
          <div className="bg-gradient-to-br from-brand-50 to-mauve-50 rounded-3xl p-12 min-h-[400px] flex items-center justify-center border border-border lg:order-1 order-2">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-brand/10 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-foreground">Parcours Acheteur</p>
            </div>
          </div>

          <div className="space-y-6 lg:order-2 order-1">
            <Badge variant="secondary" className="w-fit">Parcours Acheteur</Badge>
            <h3 className="text-3xl font-bold text-foreground">
              {howItWorksContent.buyer.title}
            </h3>
            <div className="space-y-6">
              {howItWorksContent.buyer.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0 text-brand-foreground font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
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
