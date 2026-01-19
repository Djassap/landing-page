import { Container } from '../ui/container';
import { Button } from '@/components/ui/button';
import { Mail, Download } from 'lucide-react';
import { siteConfig, ambitionContent } from '@/config/content';

import { SectionTitle } from '../ui/section-title';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <Container>
        {/* Ambition Stats */}
        <div className="mb-32">
          <SectionTitle
            badge="Notre Ambition"
            title={ambitionContent.title}
            subtitle="Une croissance rapide soutenue par l'adoption massive du mobile et nos innovations technologiques."
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {ambitionContent.stats.map((stat, index) => (
              <div key={stat.label} className="">
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez l'aventure
          </h3>
          <p className="text-lg mb-8 max-w-2xl">
            Vous souhaitez investir dans DjassApp ou en savoir plus sur notre projet ?
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
            >
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="mr-2 w-5 h-5" />
                {siteConfig.contact.email}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <a href={siteConfig.contact.deckUrl}>
                <Download className="mr-2 w-5 h-5" />
                Télécharger le deck
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
