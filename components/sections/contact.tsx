import { Container } from '../ui/container';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { siteConfig, ambitionContent } from '@/config/content';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-brand text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-white mb-6">
            {ambitionContent.title}
          </h2>
          
          <div className="flex items-center justify-center gap-12 mb-12">
            {ambitionContent.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl font-display font-bold mb-4">
              Rejoignez l'aventure
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vous souhaitez investir dans DjassApp ou en savoir plus sur notre projet ?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
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
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href={siteConfig.contact.deckUrl}>
                  Télécharger le deck
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
