import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { FeatureCard } from '../ui/feature-card';
import { AlertCircle, Users, Smartphone } from 'lucide-react';
import { problemContent } from '@/config/content';

export function Problem() {
  const icons = [AlertCircle, Users, Smartphone];

  return (
    <section id="problem" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionTitle 
          badge="Problématique"
          title="Les défis du commerce informel en Côte d'Ivoire"
          subtitle="Des millions de vendeurs talentueux restent invisibles faute d'accès aux outils numériques. Barrières techniques, linguistiques et financières les excluent du commerce en ligne."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {problemContent.blocks.map((block, index) => {
            const Icon = icons[index];
            return (
              <FeatureCard
                key={block.title}
                icon={<Icon className="w-6 h-6" />}
                title={block.title}
                description={block.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
