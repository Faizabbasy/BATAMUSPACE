import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SignatureMenu } from './components/SignatureMenu';
import { TheSpace } from './components/TheSpace';
import { BrandStatement } from './components/BrandStatement';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { VisitModal } from './components/VisitModal';
import { MenuPage } from './pages/MenuPage';
import { SpecialMenuSection } from './components/SpecialMenuSection';
import type { MenuCategory } from './types';

const VALID_MENU_CATEGORIES: MenuCategory[] = [
  'bestseller',
  'main-course',
  'coffee',
  'tea',
  'non-coffee',
  'dish',
  'appetizer',
  'addon',
];

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'menu'>('home');
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuCategory>('bestseller');
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [menuModalInitialIndex, setMenuModalInitialIndex] = useState(0);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  // Sync with browser hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/menu') || hash === '#menu-page' || hash === '#menu-full') {
        setCurrentView('menu');
        const parts = hash.split('/');
        const cat = parts[2] as MenuCategory;
        if (cat && VALID_MENU_CATEGORIES.includes(cat)) {
          setActiveMenuCategory(cat);
        } else {
          setActiveMenuCategory('bestseller');
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToMenu = (category: MenuCategory = 'bestseller') => {
    setCurrentView('menu');
    setActiveMenuCategory(category);
    window.location.hash = `#/menu/${category}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMenuModal = (cardIndex: number = 0) => {
    setMenuModalInitialIndex(cardIndex);
    setIsMenuModalOpen(true);
  };

  const scrollTo = (id: string) => {
    if (currentView === 'menu') {
      setCurrentView('home');
      window.location.hash = '';
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(id);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0E7] text-[#292A27] flex flex-col selection:bg-[#465347] selection:text-[#F3F0E7]">
      {/* Dynamic View Rendering */}
      {currentView === 'menu' ? (
        <MenuPage
          activeCategory={activeMenuCategory}
          onSelectCategory={(cat) => navigateToMenu(cat)}
          onBackToHome={navigateToHome}
          onOpenMenuModal={handleOpenMenuModal}
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />
      ) : (
        <>
          {/* SECTION 01: Minimal, Sticky Navigation */}
          <Navbar
            currentView={currentView}
            onNavigateToHome={navigateToHome}
            onNavigateToMenu={() => navigateToMenu('bestseller')}
            onOpenVisitModal={() => setIsVisitModalOpen(true)}
          />

          {/* Main Content Sections */}
          <main className="flex-grow">
            {/* SECTION 02: Editorial Hero Section */}
            <Hero
              onExploreMenu={() => scrollTo('menu')}
              onFindSpace={() => scrollTo('location')}
            />

            {/* SECTION 03: Brand Introduction ("MORE THAN JUST COFFEE") */}
            <BrandIntro />

            {/* SECTION: Featured Menu Spesial with Real Plating Photography */}
            <SpecialMenuSection onOpenVisitModal={() => setIsVisitModalOpen(true)} />

            {/* SECTION 04: Signature Menu with Direct Link to Dedicated Menu */}
            <SignatureMenu
              onOpenOriginalMenu={handleOpenMenuModal}
              onNavigateToFullMenu={() => navigateToMenu('bestseller')}
            />

            {/* SECTION 05: The Space Atmosphere Gallery ("YOUR SPACE, YOUR MOMENT") */}
            <TheSpace />

            {/* SECTION 06: Full-Width Brand Statement ("TAKE A MOMENT. MAKE IT YOURS.") */}
            <BrandStatement />

            {/* SECTION 07: Location, Facilities & Embedded Map ("COME FIND YOUR SPACE") */}
            <LocationSection onOpenVisitModal={() => setIsVisitModalOpen(true)} />

            {/* SECTION 08: Memorable Closing CTA ("YOUR NEXT FAVORITE COFFEE IS WAITING") */}
            <FinalCta onFindUs={() => scrollTo('location')} />
          </main>
        </>
      )}

      {/* Global Footer (shown on both views) */}
      <Footer
        onNavigateToHome={navigateToHome}
        onNavigateToMenu={() => navigateToMenu('bestseller')}
      />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        initialCardIndex={menuModalInitialIndex}
      />

      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </div>
  );
}

export default App;
