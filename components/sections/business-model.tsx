"use client";

import { useState } from 'react';
import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { CheckCircle2, XCircle } from 'lucide-react';
import { businessModelContent } from '@/config/content';

export function BusinessModel() {
  const [activeTab, setActiveTab] = useState<'seller' | 'buyer'>('seller');

  return (
    <section id="business" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle
          badge="Modèle Économique"
          title="Des offres flexibles adaptées à chaque besoin"
          subtitle="Choisissez le plan qui correspond à votre activité avec des tarifs transparents et sans engagement. Nos commissions sont compétitives pour vous permettre de maximiser vos revenus."
        />

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-muted rounded-full border border-border">
            <button
              onClick={() => setActiveTab('seller')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === 'seller'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Vendeurs
            </button>
            <button
              onClick={() => setActiveTab('buyer')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === 'buyer'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Acheteurs
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Seller Plans */}
          {activeTab === 'seller' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                {businessModelContent.sellerPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative bg-background rounded-3xl p-6 border-2 transition-all duration-300 ${plan.popular ? 'border-primary shadow-xl scale-[1.02] z-10' : 'border-border/50 hover:border-primary/30'
                      }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        Populaire
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-foreground mb-1">{plan.name}</h4>
                    <div className="mb-1">
                      <span className={`text-2xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5">
                      Commission: {plan.commission}
                    </p>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="text-primary" />
                            </div>
                          ) : (
                            <XCircle className="w-5 h-5 text-muted-foreground/20 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex flex-col">
                            <span className={`text-sm ${feature.included ? 'text-foreground/80 font-medium' : 'text-muted-foreground/50'}`}>
                              {feature.name}
                            </span>
                            {feature.detail && feature.included && (
                              <span className="text-xs text-muted-foreground">{feature.detail}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buyer Plans */}
          {activeTab === 'buyer' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {businessModelContent.buyerPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="relative bg-background rounded-3xl p-8 border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <h4 className="text-xl font-bold text-foreground mb-2">{plan.name}</h4>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    </div>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="text-primary/80" />                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground/80">
                              {feature.name}
                            </span>
                            {feature.detail && (
                              <span className="text-xs text-muted-foreground">{feature.detail}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
