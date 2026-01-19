import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { CheckCircle2, XCircle } from 'lucide-react';
import { businessModelContent } from '@/config/content';

export function BusinessModel() {
  return (
    <section id="business" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle 
          badge="Modèle Économique"
          title="Des offres flexibles adaptées à chaque besoin"
          subtitle="Choisissez le plan qui correspond à votre activité avec des tarifs transparents et sans engagement. Nos commissions sont compétitives pour vous permettre de maximiser vos revenus."
        />
        
        {/* Seller Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Plans Vendeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessModelContent.sellerPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-background rounded-3xl p-6 border-2 transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-xl scale-[1.02]' : 'border-border/50 hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Populaire
                  </div>
                )}
                <h4 className="text-xl font-bold text-foreground mb-1">{plan.name}</h4>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">
                  Commission: {plan.commission}
                </p>
                
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-foreground/90' : 'text-muted-foreground/50'}`}>
                        {feature.name}
                        {feature.detail && <span className="text-xs"> ({feature.detail})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Buyer Plans */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Plans Acheteurs
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {businessModelContent.buyerPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-background rounded-3xl p-6 border-2 border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-foreground mb-1">{plan.name}</h4>
                <div className="mb-5">
                  <span className="text-2xl font-bold text-primary">{plan.price}</span>
                </div>
                
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground/90">
                        {feature.name}
                        {feature.detail && <span className="text-xs text-muted-foreground"> ({feature.detail})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
