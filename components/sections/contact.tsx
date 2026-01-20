"use client";

import { useState } from 'react';
import { Container } from '../ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Download, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig, ambitionContent } from '@/config/content';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { SectionTitle } from '../ui/section-title';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

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
                <div className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA & Form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">
              Rejoignez l'aventure
            </h3>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Vous souhaitez investir dans DjassApp ou en savoir plus sur notre projet ?
              Contactez-nous directement ou utilisez le formulaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="rounded-full"
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
                className="rounded-full"
              >
                <a href={siteConfig.contact.deckUrl}>
                  <Download className="mr-2 w-5 h-5" />
                  Télécharger le deck
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 flex flex-col">
                <Label htmlFor="name">Nom prénom</Label>
                <Input id="name" required placeholder="Votre nom complet" className="" />
              </div>

              <div className="space-y-2 flex flex-col">
                <Label htmlFor="company">Entreprise</Label>
                <Input id="company" placeholder="Nom de votre entreprise" className="" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col">
                  <Label htmlFor="email">Adresse mail</Label>
                  <Input id="email" type="email" required placeholder="vous@exemple.com" className="" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" type="tel" placeholder="+225 07..." className="" />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-lg">
                Envoyer le message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <Dialog open={submitted} onOpenChange={setSubmitted}>
          <DialogContent className="">
            <DialogHeader className="flex items-center text-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <DialogTitle className="text-xl">Message envoyé !</DialogTitle>
              <DialogDescription className="">
                Merci de votre intérêt, nous prendrons contact avec vous très bientôt.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center mt-4">
              <Button type="button" variant="outline" onClick={() => setSubmitted(false)} className="rounded-full min-w-[120px]">
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}
