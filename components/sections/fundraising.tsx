import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { TrendingUp, Target, DollarSign } from 'lucide-react';
import { fundraisingContent } from '@/config/content';

export function Fundraising() {
  return (
    <section id="fundraising" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-brand/5">
      <Container>
        <SectionTitle title={fundraisingContent.title} />
        
        <div className="max-w-4xl mx-auto">
          {/* Amount */}
          <div className="text-center mb-12">
            <div className="inline-block bg-background rounded-3xl px-12 py-8 border-2 border-primary shadow-xl">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {fundraisingContent.amount}
              </div>
              <div className="text-xl text-muted-foreground">
                ({fundraisingContent.amountFCFA})
              </div>
            </div>
          </div>

          {/* Allocation */}
          <div className="bg-background rounded-2xl p-8 border border-border mb-12">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6 text-center">
              Allocation des fonds
            </h3>
            <div className="space-y-4">
              {fundraisingContent.allocation.map((item) => {
                const Icon = item.label.includes('R&D') ? Target : item.label.includes('Marketing') ? TrendingUp : DollarSign;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-foreground">{item.label}</span>
                        <span className="text-2xl font-bold text-primary">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Now & What it Finances */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">
                {fundraisingContent.whyNow.title}
              </h4>
              <ul className="space-y-3">
                {fundraisingContent.whyNow.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">
                {fundraisingContent.whatItFinances.title}
              </h4>
              <ul className="space-y-3">
                {fundraisingContent.whatItFinances.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
