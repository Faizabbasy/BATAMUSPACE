export type MenuCategory =
  | 'bestseller'
  | 'main-course'
  | 'dish'
  | 'appetizer'
  | 'coffee'
  | 'tea'
  | 'non-coffee'
  | 'addon';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'main-course' | 'dish' | 'appetizer' | 'non-coffee' | 'tea' | 'addon';
  subCategory?: string;
  priceFormatted: string; // e.g. "Rp27.000"
  priceShort: string; // e.g. "27k"
  description: string;
  notes: string[];
  base?: string;
  isBestSeller?: boolean;
  isSignature?: boolean;
  isSpecial?: boolean;
  image?: string;
  specialImage?: string;
}

export interface Facility {
  id: string;
  name: string;
  description?: string;
  iconName: string;
}

export interface SpaceGalleryItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface MenuCardReference {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: MenuCategory;
}
