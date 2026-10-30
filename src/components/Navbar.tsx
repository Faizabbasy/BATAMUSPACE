import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Clock, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  onOpenVisitModal: () => void;
  onNavigateToMenu: () => void;
  onNavigateToHome: () => void;
  currentView: 'home' | 'menu';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVisitModal,
  onNavigateToMenu,
  onNavigateToHome,
  currentView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#menu-page') {
      onNavigateToMenu();
      return;
    }

    if (currentView === 'menu') {
      onNavigateToHome();
      setTimeout(() => {
        const id = href.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const id = href.replace('#', '');
      const elem = document.getElementById(id);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Full Menu', href: '#menu-page', isMenu: true },
    { label: 'The Space', href: '#space' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F3F0E7]/90 backdrop-blur-md border-b border-[#465347]/10 py-3 shadow-[0_4px_24px_rgba(70,83,71,0.06)]'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={onNavigateToHome}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-olive rounded-md text-left"
            aria-label="Batamu Space Home"
          >
            <Logo variant="dark" size="sm" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xs lg:text-sm font-sans tracking-wide transition-colors py-1 ${
                  link.isMenu && currentView === 'menu'
                    ? 'text-olive font-bold border-b-2 border-olive'
                    : 'text-charcoal/80 hover:text-charcoal editorial-link'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Area: Status Badge & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onNavigateToMenu}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ivory border border-olive/25 text-xs font-sans text-olive hover:bg-olive hover:text-ivory transition-all shadow-sm"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Dedicated Menu</span>
            </button>

            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 border border-sage/20 text-[11px] font-sans text-olive">
              <Clock className="w-3 h-3 text-sage" />
              <span>Closes 23.00 WIB</span>
            </div>

            <button
              onClick={onOpenVisitModal}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-sans tracking-wider uppercase font-medium hover:bg-olive-dark transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onNavigateToMenu}
              className="p-2 rounded-lg text-olive bg-olive/10 text-xs font-bold font-sans"
            >
              Menu
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-olive hover:bg-sage-100/50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-[#F3F0E7] p-8 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-sage/15">
              <div onClick={onNavigateToHome}>
                <Logo variant="dark" size="sm" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-olive hover:text-charcoal"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-serif text-left text-2xl text-charcoal hover:text-olive transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-sage/15 space-y-4">
            <div className="text-xs text-charcoal/70 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sage" />
              <span>Open Daily until 23.00 WIB</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-olive text-ivory text-xs font-sans tracking-wider uppercase font-medium shadow-md"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
