import { Container } from '../ui/container';
import { siteConfig } from '@/config/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-brand-200">
                <path
                  fill="currentColor"
                  d="M50 10 C30 10 20 30 25 45 C15 50 15 70 30 75 C35 90 65 90 70 75 C85 70 85 50 75 45 C80 30 70 10 50 10"
                />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg">{siteConfig.companyName}</span>
              <p className="text-xs text-muted-foreground opacity-60">Par {siteConfig.parentCompany}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground opacity-60">
            <a href="#problem" className="hover:text-background transition-colors">
              Problème
            </a>
            <a href="#solution" className="hover:text-background transition-colors">
              Solution
            </a>
            <a href="#market" className="hover:text-background transition-colors">
              Marché
            </a>
            <a href="#contact" className="hover:text-background transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground opacity-40">
            {currentYear} {siteConfig.parentCompany}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
