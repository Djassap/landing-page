import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { FeatureCard } from '../ui/feature-card';
import { Mic, Users, TrendingUp, CreditCard, Truck, Headphones } from 'lucide-react';
import { advantagesContent } from '@/config/content';

export function Advantages() {
  const icons = [Mic, Users, TrendingUp, CreditCard, Truck, Headphones];

  return (
    <section id="advantages" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionTitle 
          badge="Nos Avantages"
          title="Pourquoi choisir DjassApp pour votre commerce ?"
          subtitle="Une solution innovante qui combine technologie vocale avancée et simplicité d'utilisation pour offrir une expérience unique aux vendeurs et acheteurs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantagesContent.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <FeatureCard
                key={item.title}
                icon={<Icon className="w-6 h-6" />}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
