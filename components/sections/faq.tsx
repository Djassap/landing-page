
import { Container } from '../ui/container';
import { faqContent } from '@/config/content';
import { HelpCircle, CreditCard, Truck, Smartphone } from 'lucide-react';

import { SectionTitle } from '../ui/section-title';

export function FAQ() {
    const icons = [HelpCircle, CreditCard, Truck, Smartphone];

    return (
        <section id="faq" className="py-24 bg-background">
            <Container>
                <SectionTitle
                    badge="FAQ"
                    title={faqContent.title}
                    subtitle="Retrouvez ici les réponses aux questions les plus fréquentes sur l'utilisation de DjassApp."
                />

                <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {faqContent.items.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className="flex flex-col items-start">
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {item.question}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
