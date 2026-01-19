import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Market } from '@/components/sections/market';
import { Advantages } from '@/components/sections/advantages';
import { BusinessModel } from '@/components/sections/business-model';
import { Roadmap } from '@/components/sections/roadmap';
import { Team } from '@/components/sections/team';
import { Fundraising } from '@/components/sections/fundraising';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Market />
        <Advantages />
        <BusinessModel />
        <Roadmap />
        <Team />
        <Fundraising />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
