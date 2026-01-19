import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { Badge } from '@/components/ui/badge';
import { howItWorksContent } from '@/config/content';
import Image from 'next/image';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle 
          badge="Processus"
          title="Comment ça marche"
          subtitle="DjassApp simplifie la création de boutiques en ligne et l'achat de produits grâce à une interface vocale intuitive et accessible à tous."
        />

        {/* Seller Journey - Content LEFT, Visual RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
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

          {/* Seller Mockup - Single pre-composed image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-brand/10 rounded-[3rem] blur-3xl" />
            <div className="relative">
              <Image 
                src="/seller.png" 
                alt="Interface Vendeur DjassApp" 
                width={800} 
                height={600}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Buyer Journey - Visual LEFT, Content RIGHT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Buyer Mockup - Single pre-composed image */}
          <div className="relative lg:order-1 order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-primary/5 rounded-[3rem] blur-3xl" />
            <div className="relative">
              <Image 
                src="/customer_view.png" 
                alt="Interface Acheteur DjassApp" 
                width={1900} 
                height={1275}
                className="w-full h-auto drop-shadow-2xl"
              />
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
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-brand-foreground font-bold">
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
