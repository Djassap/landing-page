'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/content';
import Image from 'next/image';

const navItems = [
  { label: 'Problème', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Marché', href: '#market' },
  { label: 'Business', href: '#business' },
  { label: 'Équipe', href: '#team' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <Image src="/djassapp_logo.png" alt="Logo" width={150} height={150} />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Contact</a>
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button asChild size="sm" className="w-full">
                  <a href="#contact">Contact</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
