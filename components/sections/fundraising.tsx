
import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { fundraisingContent } from '@/config/content';
import { Wallet } from 'lucide-react';

export function Fundraising() {
    return (
        <section id="fundraising" className="py-24 bg-background">
            <Container>
                <SectionTitle
                    badge="Investissement"
                    title={fundraisingContent.title}
                    subtitle="Participez à la révolution du commerce informel en Afrique de l'Ouest"
                />

                <div className="mt-12 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Main Stats Column */}
                    <div className="space-y-12">
                        <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                    <Wallet className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg">Objectif de levée</h3>
                            </div>
                            <div className="space-y-1">
                                <p className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                                    {fundraisingContent.amount}
                                </p>
                                <p className="text-lg text-muted-foreground font-medium">
                                    {fundraisingContent.amountFCFA}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">Allocation des fonds</h3>
                            <div className="space-y-6">
                                {fundraisingContent.allocation.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="font-medium text-foreground">{item.label}</span>
                                            <span className="font-bold text-primary">{item.percentage}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Context Column */}
                    <div className="space-y-12 lg:pt-8">
                        {/* Why Now */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">{fundraisingContent.whyNow.title}</h3>
                            <ul className="space-y-4">
                                {fundraisingContent.whyNow.points.map((point, index) => (
                                    <li key={index} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-muted-foreground leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What It Finances */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">{fundraisingContent.whatItFinances.title}</h3>
                            <ul className="space-y-4">
                                {fundraisingContent.whatItFinances.points.map((point, index) => (
                                    <li key={index} className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-muted-foreground leading-relaxed">
                                            {point}
                                        </span>
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
