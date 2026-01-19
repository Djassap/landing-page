import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { Check, X } from 'lucide-react';
import { businessModelContent } from '@/config/content';

export function BusinessModel() {
  return (
    <section id="business" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle 
          title={businessModelContent.title} 
          subtitle={businessModelContent.subtitle} 
        />
        
        {/* Seller Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Plans Vendeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessModelContent.sellerPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-background rounded-2xl p-8 border-2 ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </div>
                )}
                <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Commission: {plan.commission}
                </p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/60'}>
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
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Plans Acheteurs
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessModelContent.buyerPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-background rounded-2xl p-8 border border-border"
              >
                <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
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
