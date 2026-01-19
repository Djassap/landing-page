import { ArrowRight, Mic, Store } from 'lucide-react';
import { Container } from '../ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { heroContent, siteConfig } from '@/config/content';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-mauve-50/30 to-brand-50/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-mauve-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse mr-2" />
              Par {siteConfig.parentCompany}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-display text-foreground" style={{ fontWeight: 900, lineHeight: 1.1 }}>
                {heroContent.title}
                <span className="block text-primary mt-2">{heroContent.subtitle}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="#contact">
                  {heroContent.cta.primary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  {heroContent.cta.secondary}
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">IA vocale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Marketplace</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-mauve-400 to-mauve-600 rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-sm" />
              <div className="relative bg-primary rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  <div className="bg-primary px-6 py-8 text-center flex flex-col justify-center items-center">
                    <Image src="/djassapp_h_grdt.svg" alt="Logo DjassApp" width={150} height={150} />
                    <p className="text-brand-200 text-sm mt-1">Version 1.0</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-10 bg-muted rounded-lg" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-muted/50 rounded-xl" />
                      <div className="h-24 bg-muted/50 rounded-xl" />
                    </div>
                    <div className="h-12 bg-mauve-100 rounded-xl flex items-center justify-center">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-center text-sm text-muted-foreground italic">
                      "{siteConfig.tagline}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-lg border border-border animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Djassaman</p>
                  <p className="text-sm font-medium text-foreground">"Je vends des fleurs..."</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl p-4 shadow-lg border border-border animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Boutique créée</p>
                  <p className="text-sm font-medium text-foreground">En 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
