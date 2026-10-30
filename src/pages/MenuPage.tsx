import React, { useState, useMemo } from 'react';
import { ALL_MENU_ITEMS, MANUAL_BREW_INFO, HOUSE_BLENDS_INFO } from '../data/menuData';
import { ContourPattern } from '../components/ContourPattern';
import { Logo } from '../components/Logo';
import { SpecialMenuSection } from '../components/SpecialMenuSection';
import {
  Search,
  Sparkles,
  Flame,
  ArrowLeft,
  Coffee,
  UtensilsCrossed,
  Cookie,
  CupSoda,
  Clock,
  MapPin,
  X,
  Eye,
  PlusCircle,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Info,
} from 'lucide-react';
import type { MenuCategory, MenuItem } from '../types';

interface MenuPageProps {
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  onBackToHome: () => void;
  onOpenMenuModal: (cardIndex?: number) => void;
  onOpenVisitModal: () => void;
}

interface CategoryConfig {
  id: MenuCategory;
  navTitle: string;
  pageTitle: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
}

const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    id: 'bestseller',
    navTitle: '⭐ Best Seller & Spesial',
    pageTitle: 'BEST SELLER & MENU SPESIAL',
    subtitle: 'Koleksi hidangan unggulan chef dengan foto plating asli, serta seluruh sajian makanan dan minuman paling difavoritkan di Batamu Space.',
    badge: 'Paling Difavoritkan',
    icon: Flame,
  },
  {
    id: 'main-course',
    navTitle: '🍛 Main Course',
    pageTitle: 'MAIN COURSE',
    subtitle: 'Nasi olahan khas Batamu, sop iga sapi berempah, hidangan Nusantara, dan pasta Western pilihan.',
    badge: 'Hidangan Utama',
    icon: UtensilsCrossed,
  },
  {
    id: 'coffee',
    navTitle: '☕ Coffee & Espresso',
    pageTitle: 'SPECIALTY COFFEE & ESPRESSO',
    subtitle: 'Coffee milk flavours, cold brew barista recommendations, espresso bar, dan manual single-origin filter roasts.',
    badge: 'Specialty Coffee',
    icon: Coffee,
  },
  {
    id: 'tea',
    navTitle: '🍃 Tea Series',
    pageTitle: 'TEA SERIES',
    subtitle: 'Teh seduh segar dengan free refill 1x, fruit tea leci & peach slice, hingga black tea macchiato lembut.',
    badge: 'Refill 1x Available',
    icon: Leaf,
  },
  {
    id: 'non-coffee',
    navTitle: '🥤 Non-Coffee',
    pageTitle: 'NON-COFFEE SERIES',
    subtitle: 'Uji matcha series, silky cream cheese series, dan artisan chocolate blends yang lembut dan menyegarkan.',
    badge: 'Non-Coffee',
    icon: CupSoda,
  },
  {
    id: 'dish',
    navTitle: '🍟 Dish & Savory',
    pageTitle: 'DISH & SAVORY BITES',
    subtitle: 'Garlic wings, sharing platter, croissant sandwich, quesadilla renyah, dimsum, dan sate asin.',
    badge: 'Camilan & Sharing',
    icon: Cookie,
  },
  {
    id: 'appetizer',
    navTitle: '🧇 Appetizer & Sweets',
    pageTitle: 'APPETIZER & SWEET PASTRY',
    subtitle: 'Kudapan manis khas Belanda poffertjes, cinnamon churros renyah saus coklat, tape roll es krim, dan roti bakar tiramisu.',
    badge: 'Dessert & Pastry',
    icon: Cookie,
  },
  {
    id: 'addon',
    navTitle: '➕ Add On',
    pageTitle: 'ADD ON & SIDES',
    subtitle: 'Pilihan pelengkap nasi putih pulen, nasi daun jeruk wangi, aneka sambal segar, lontong, dan mashed potato mentega.',
    badge: 'Pelengkap Hidangan',
    icon: PlusCircle,
  },
];

export const MenuPage: React.FC<MenuPageProps> = ({
  activeCategory,
  onSelectCategory,
  onBackToHome,
  onOpenMenuModal,
  onOpenVisitModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [useShortPrice, setUseShortPrice] = useState(true);

  // Handle switching category
  const handleSelectCategory = (cat: MenuCategory) => {
    setSearchQuery('');
    onSelectCategory(cat);
  };

  // Find current config
  const currentConfigIndex = CATEGORY_CONFIGS.findIndex((c) => c.id === activeCategory);
  const currentConfig = CATEGORY_CONFIGS[currentConfigIndex] || CATEGORY_CONFIGS[0];

  const prevConfig = currentConfigIndex > 0 ? CATEGORY_CONFIGS[currentConfigIndex - 1] : null;
  const nextConfig =
    currentConfigIndex < CATEGORY_CONFIGS.length - 1 ? CATEGORY_CONFIGS[currentConfigIndex + 1] : null;

  // Items for the current separated page
  const pageItems = useMemo(() => {
    let items: MenuItem[] = [];

    if (activeCategory === 'bestseller') {
      // ONLY best seller items!
      items = ALL_MENU_ITEMS.filter((item) => item.isBestSeller);
    } else {
      // Strictly items belonging to this specific category page
      items = ALL_MENU_ITEMS.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.notes.some((n) => n.toLowerCase().includes(q)) ||
          (item.subCategory && item.subCategory.toLowerCase().includes(q))
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      bestseller: ALL_MENU_ITEMS.filter((i) => i.isBestSeller).length,
      'main-course': ALL_MENU_ITEMS.filter((i) => i.category === 'main-course').length,
      coffee: ALL_MENU_ITEMS.filter((i) => i.category === 'coffee').length,
      tea: ALL_MENU_ITEMS.filter((i) => i.category === 'tea').length,
      'non-coffee': ALL_MENU_ITEMS.filter((i) => i.category === 'non-coffee').length,
      dish: ALL_MENU_ITEMS.filter((i) => i.category === 'dish').length,
      appetizer: ALL_MENU_ITEMS.filter((i) => i.category === 'appetizer').length,
      addon: ALL_MENU_ITEMS.filter((i) => i.category === 'addon').length,
    };
  }, []);

  // Render individual menu item line
  const renderItemRow = (item: MenuItem) => (
    <div
      key={item.id}
      className="group pb-5 border-b border-charcoal/10 hover:border-olive transition-colors"
    >
      {/* Title & Price Row */}
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-bold font-sans text-charcoal group-hover:text-olive transition-colors">
            {item.name}
          </span>
          {item.isBestSeller && (
            <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-coffee/10 text-coffee">
              <Flame className="w-2.5 h-2.5" />
              <span>Best Seller</span>
            </span>
          )}
          {item.isSignature && (
            <span className="inline-flex items-center gap-1 text-[9px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-olive/10 text-olive">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Signature</span>
            </span>
          )}
          {item.subCategory && activeCategory === 'bestseller' && (
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-ivory text-charcoal/60 border border-charcoal/10">
              {item.subCategory}
            </span>
          )}
        </div>

        <span className="text-base sm:text-lg font-mono font-bold text-olive shrink-0">
          {useShortPrice ? item.priceShort : item.priceFormatted}
        </span>
      </div>

      {/* Description */}
      <p className="mt-1 text-xs sm:text-sm text-charcoal/75 font-sans leading-relaxed">
        {item.description}
      </p>

      {/* Taste notes */}
      {item.notes && item.notes.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.notes.map((note) => (
            <span
              key={note}
              className="text-[10px] font-sans px-2 py-0.5 rounded bg-ivory-soft text-charcoal/65 border border-charcoal/5"
            >
              {note}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F3F0E7] text-[#292A27] selection:bg-[#465347] selection:text-[#F3F0E7]">
      {/* Sticky Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#F3F0E7]/95 backdrop-blur-md border-b border-olive/15 py-3.5 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase text-olive hover:text-charcoal transition-colors px-3 py-1.5 rounded-full bg-olive/5 hover:bg-olive/10"
              title="Return to main page"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            <div className="h-5 w-[1px] bg-olive/20 hidden sm:block" />
            <div onClick={onBackToHome} className="cursor-pointer">
              <Logo variant="dark" size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Original Menu Cards Button */}
            <button
              onClick={() => onOpenMenuModal(0)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ivory-soft border border-olive/30 text-xs font-sans font-semibold text-olive hover:bg-olive hover:text-ivory transition-all shadow-sm"
              title="Inspect official printed menu cards"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Original Printed Cards (10)</span>
              <span className="md:hidden">Cards (10)</span>
            </button>

            {/* Price Format Toggle */}
            <button
              onClick={() => setUseShortPrice(!useShortPrice)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-sage-50 text-[11px] font-sans font-medium text-olive border border-sage/20 hover:bg-sage-100 transition-colors"
            >
              <span className="hidden sm:inline">Price:</span>
              <span className="font-mono font-bold">{useShortPrice ? '38k' : 'Rp38.000'}</span>
            </button>

            {/* Visit Us CTA */}
            <button
              onClick={onOpenVisitModal}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-olive text-ivory text-xs font-sans uppercase tracking-wider font-semibold hover:bg-olive-dark transition-all shadow-sm"
            >
              <MapPin className="w-3 h-3" />
              <span>Visit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation Bar (Distinct Page Selector) */}
      <nav className="sticky top-[59px] z-30 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-olive/15 py-3 px-5 sm:px-8 shadow-[0_2px_12px_rgba(70,83,71,0.04)]">
        <div className="max-w-7xl mx-auto flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORY_CONFIGS.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count = categoryCounts[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? cat.id === 'bestseller'
                      ? 'bg-coffee text-ivory shadow-md scale-[1.02]'
                      : 'bg-olive text-ivory shadow-md scale-[1.02]'
                    : 'bg-ivory text-charcoal/75 hover:bg-sage-100 hover:text-charcoal border border-charcoal/10'
                }`}
              >
                <span>{cat.navTitle}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-ivory/20 text-ivory'
                      : 'bg-charcoal/10 text-charcoal/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Hero Banner for Current Dedicated Category Page */}
      <section className="relative pt-12 pb-12 sm:pb-16 bg-[#E9E4D8] overflow-hidden border-b border-olive/15">
        <ContourPattern opacity={0.16} strokeColor="#465347" variant="dense" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-olive/10 text-olive text-xs font-mono tracking-widest uppercase font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-coffee" />
            <span>Batamu Space · {currentConfig.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.1]">
            {currentConfig.pageTitle}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-charcoal/80 font-sans leading-relaxed max-w-2xl mx-auto">
            {currentConfig.subtitle}
          </p>

          {/* Quick Search Input within this page */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/50" />
            <input
              type="text"
              placeholder={`Cari di halaman ${currentConfig.navTitle.replace(/[^a-zA-Z &]/g, '')}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-ivory border border-olive/20 text-xs sm:text-sm font-sans text-charcoal placeholder-charcoal/45 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-charcoal/40 hover:text-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* ============================================================== */}
        {/* CASE 1: BEST SELLER PAGE — STRICTLY SPECIAL MENU & BEST SELLERS */}
        {/* ============================================================== */}
        {activeCategory === 'bestseller' && (
          <div className="space-y-16">
            {/* 1. Featured Menu Spesial with Real Plating Photography */}
            <div>
              <SpecialMenuSection
                onOpenVisitModal={onOpenVisitModal}
                className="rounded-3xl shadow-xl"
              />
            </div>

            {/* 2. Daftar Menu Best Seller (strictly isBestSeller: true) */}
            <div>
              <div className="pb-4 mb-8 border-b-2 border-charcoal/15 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-coffee font-bold block">
                    Paling Banyak Dipesan
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight mt-0.5">
                    DAFTAR MENU BEST SELLER
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-charcoal/70 font-sans">
                  Menampilkan {pageItems.length} hidangan & minuman best seller terfavorit
                </p>
              </div>

              {pageItems.length === 0 ? (
                <div className="py-12 text-center text-charcoal/60 text-sm">
                  Tidak ditemukan menu best seller dengan kata kunci "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                  {pageItems.map((item) => renderItemRow(item))}
                </div>
              )}

              <div className="mt-8 p-4 rounded-2xl bg-ivory-soft border border-olive/15 flex items-center gap-3 text-xs text-charcoal/70">
                <Info className="w-4 h-4 text-olive shrink-0" />
                <span>
                  Halaman ini secara eksklusif hanya menampilkan Menu Spesial dan Menu Best Seller Batamu Space. Untuk melihat menu lengkap lainnya, silakan pilih tab kategori di atas.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 2: MAIN COURSE PAGE — STRICTLY MAIN COURSE DISHES */}
        {/* ============================================================== */}
        {activeCategory === 'main-course' && (
          <div className="space-y-14">
            {/* If searching, show filtered list directly */}
            {searchQuery ? (
              <div>
                <div className="pb-3 mb-8 border-b border-olive/20 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold">
                    Hasil Pencarian Main Course
                  </span>
                  <span className="text-xs font-sans text-charcoal/60">{pageItems.length} items</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                  {pageItems.map((item) => renderItemRow(item))}
                </div>
              </div>
            ) : (
              <>
                {/* Section A: Nasi & Olahan Nusantara */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Bagian 1
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        NASI & OLAHAN NUSANTARA
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Olahan Beras & Rempah</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Rice Specialties' || i.id === 'bakmie-jawa')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Section B: Sop Iga & Daging Rempah */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Bagian 2
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        SOP IGA & DAGING REMPAH
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Kuah Kaldu & Daging Pilihan</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter(
                        (i) =>
                          i.subCategory === 'Ribs & Heritage Soups' ||
                          i.id === 'bebek-bumbu-hitam' ||
                          i.id === 'ayam-bumbu-hitam' ||
                          i.id === 'kari-ayam' ||
                          i.id === 'soto-batamu' ||
                          i.id === 'soto-betawi' ||
                          i.id === 'tongseng-sapi'
                      )
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Section C: Western Pasta & Classics */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Bagian 3
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        WESTERN PASTA & CLASSICS
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Aldente & Crispy Crusted</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter(
                        (i) =>
                          i.subCategory === 'Western Pasta' ||
                          i.subCategory === 'Western Classic'
                      )
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>
              </>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 3: COFFEE & ESPRESSO PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'coffee' && (
          <div className="space-y-14">
            {/* If searching, show filtered list directly */}
            {searchQuery ? (
              <div>
                <div className="pb-3 mb-8 border-b border-olive/20 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-olive font-bold">
                    Hasil Pencarian Coffee
                  </span>
                  <span className="text-xs font-sans text-charcoal/60">{pageItems.length} items</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                  {pageItems.map((item) => renderItemRow(item))}
                </div>
              </div>
            ) : (
              <>
                {/* Subcategory 1: Coffee Milk Flavour */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Kategori A
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        COFFEE MILK FLAVOUR
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Creamy & Balanced</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Coffee Milk')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Subcategory 2: Barista Recommendation */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Kategori B
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        BARISTA RECOMMENDATION
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Cold Brew & Citrus Infusions</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Barista Recommendation')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Subcategory 3: Classic Espresso Bar */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-olive font-bold">
                        Kategori C
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                        CLASSIC ESPRESSO BAR
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-charcoal/60">Black & White Selections</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Classic Espresso')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* House Espresso Blends Profile */}
                <div className="p-6 rounded-3xl bg-ivory-soft border border-olive/20 shadow-sm">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-olive font-bold block mb-2">
                    House Espresso Blends
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {HOUSE_BLENDS_INFO.map((blend) => (
                      <div key={blend.name} className="p-4 rounded-2xl bg-ivory border border-charcoal/10">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif italic font-bold text-base text-charcoal">
                            {blend.name}
                          </h4>
                          <span className="text-[10px] font-mono text-olive font-semibold">
                            {blend.profile}
                          </span>
                        </div>
                        <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                          {blend.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manual Brew Bar Box */}
                <div className="p-6 sm:p-8 rounded-3xl bg-olive text-ivory shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono tracking-widest uppercase opacity-80">
                      Single Origin Filter Bar
                    </span>
                    <span className="text-xs font-mono font-semibold bg-ivory/15 px-3 py-1 rounded-full">
                      Ask Barista
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    MANUAL BREW (Ask our Barista)
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ivory/80 leading-relaxed max-w-2xl">
                    {MANUAL_BREW_INFO.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {MANUAL_BREW_INFO.methods.map((method) => (
                      <span
                        key={method}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-ivory/15 text-ivory border border-ivory/10"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 4: TEA SERIES PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'tea' && (
          <div className="space-y-10">
            <div className="p-4 rounded-2xl bg-sage-50 border border-sage/20 text-xs text-olive flex items-center justify-between">
              <span>🍃 Menu Tea (Refill 1x) dapat dinikmati untuk dine-in santai di Batamu Space.</span>
              <span className="font-mono font-semibold hidden sm:inline">Dine-in Privilege</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {pageItems.map((item) => renderItemRow(item))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 5: NON-COFFEE SERIES PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'non-coffee' && (
          <div className="space-y-12">
            {searchQuery ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                {pageItems.map((item) => renderItemRow(item))}
              </div>
            ) : (
              <>
                {/* Matcha Series */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                      MATCHA SERIES
                    </h3>
                    <span className="text-xs font-mono text-charcoal/60">Pure Uji Whisked</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Matcha Series')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Cream Cheese Series */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                      CREAM CHEESE SERIES
                    </h3>
                    <span className="text-xs font-mono text-charcoal/60">Fluffy Savory Foam Cap</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Cream Cheese Series')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>

                {/* Choco Series */}
                <section>
                  <div className="pb-3 mb-6 border-b-2 border-charcoal/15 flex items-baseline justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal">
                      CHOCO SERIES
                    </h3>
                    <span className="text-xs font-mono text-charcoal/60">Rich Artisan Cocoa</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                    {pageItems
                      .filter((i) => i.subCategory === 'Choco Series')
                      .map((item) => renderItemRow(item))}
                  </div>
                </section>
              </>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 6: DISH & SAVORY PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'dish' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {pageItems.map((item) => renderItemRow(item))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 7: APPETIZER & SWEET PASTRY PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'appetizer' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {pageItems.map((item) => renderItemRow(item))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CASE 8: ADD ON PAGE */}
        {/* ============================================================== */}
        {activeCategory === 'addon' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {pageItems.map((item) => renderItemRow(item))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PAGE FLIPPING & PAGINATION NAVIGATION */}
        {/* ============================================================== */}
        <div className="mt-16 pt-10 border-t-2 border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevConfig ? (
            <button
              onClick={() => handleSelectCategory(prevConfig.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ivory border border-olive/30 text-xs font-sans font-semibold text-olive hover:bg-olive hover:text-ivory transition-all shadow-sm w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya: {prevConfig.navTitle}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          <div className="text-xs font-mono text-charcoal/50">
            Halaman {currentConfigIndex + 1} dari {CATEGORY_CONFIGS.length}
          </div>

          {nextConfig && (
            <button
              onClick={() => handleSelectCategory(nextConfig.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-sans font-bold uppercase tracking-wider hover:bg-olive-dark transition-all shadow-md w-full sm:w-auto justify-center"
            >
              <span>Lanjut ke: {nextConfig.navTitle}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Bottom Callout & Location Info */}
        <div className="mt-16 p-8 rounded-3xl bg-ivory-soft border border-olive/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center text-olive shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif italic text-xl font-bold text-charcoal">
                Tanya barista untuk rekomendasi racikan hari ini
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/75 mt-0.5">
                Jam tutup: 23.00 WIB · Jl. Djarum Kp. Joglo RT 004/005, Cibeureum, Bogor.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 rounded-full bg-ivory border border-olive/30 text-xs font-sans font-semibold text-olive hover:bg-olive hover:text-ivory transition-all"
            >
              Kembali ke Beranda
            </button>
            <button
              onClick={onOpenVisitModal}
              className="px-6 py-2.5 rounded-full bg-olive text-ivory text-xs font-sans uppercase font-bold tracking-wider hover:bg-olive-dark transition-all shadow-md"
            >
              Petunjuk Arah
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
