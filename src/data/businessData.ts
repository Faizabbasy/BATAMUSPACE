export const BUSINESS_INFO = {
  name: 'BATAMU SPACE',
  shortName: 'Batamu',
  tagline: 'Find Your Space, Enjoy Your Coffee.',
  category: 'Specialty Cafe',
  address: 'Jl. Djarum Kp. Joglo No. RT 004/005, Cibeureum, Bogor, Kabupaten Bogor, Jawa Barat 16750',
  plusCode: '7WVV+P9 Cibeureum, Bogor Regency, West Java',
  priceRange: 'Rp25.000 – Rp50.000 per person',
  operatingHours: {
    closingNotice: 'Closing time: 23.00 WIB',
    status: 'Open Daily until 23.00 WIB',
  },
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Batamu+Space+Cibeureum+Bogor',
  instagramSearchUrl: 'https://www.instagram.com/explore/tags/batamuspace/',
};

export const FACILITIES = [
  { id: 'outdoor', name: 'Outdoor Seating', description: 'Breezy open-air garden terrace beneath the Bogor breeze.', icon: 'Trees' },
  { id: 'dine-in', name: 'Dine-In Area', description: 'Serene interior seating with minimalist aesthetic and cozy corners.', icon: 'Coffee' },
  { id: 'takeaway', name: 'Takeaway Coffee', description: 'Thoughtfully packaged beverages ready for the road.', icon: 'ShoppingBag' },
  { id: 'free-parking-lot', name: 'Free Parking Lot', description: 'Dedicated complimentary on-site parking for cars & motorbikes.', icon: 'Car' },
  { id: 'street-parking', name: 'Free Street Parking', description: 'Convenient streetside parking available nearby.', icon: 'Navigation' },
  { id: 'paid-parking', name: 'Paid Parking Lot', description: 'Secure alternative paid parking space adjacent to venue.', icon: 'ShieldCheck' },
  { id: 'toilet', name: 'Clean Restroom', description: 'Modern, well-maintained restroom facilities.', icon: 'Sparkles' },
  { id: 'reservations', name: 'Reservations Accepted', description: 'Table reservations available for groups and creative gatherings.', icon: 'CalendarCheck' },
];

export const SPACE_EXPERIENCES = [
  {
    id: 'twilight',
    title: 'Paviliun Senja & Suasana Hangat',
    tagline: 'Warm Twilight Gathering',
    description: 'Nuansa senja temaram dengan pencahayaan hangat berlatar relief kontur bercahaya dan sejuknya udara pegunungan Cibeureum.',
    image: '/images/space/batamu-real-twilight.jpg',
    span: 'col-span-12 md:col-span-6',
  },
  {
    id: 'mountain-view',
    title: 'Teras Terbuka Panorama Bukit',
    tagline: 'Highland Mountain Breeze',
    description: 'Duduk santai di atas lantai keramik bermotif klasik menghadap panorama perbukitan berkabut dan pepohonan hijau Bogor.',
    image: '/images/space/batamu-real-mountain-view.jpg',
    span: 'col-span-12 md:col-span-6',
  },
  {
    id: 'pavilion',
    title: 'Paviliun Utama & Area Komunal',
    tagline: 'Open-Air Modern Pavilion',
    description: 'Struktur arsitektur minimalis modern beratap kurva "Batamu." dengan meja kayu alami dan halaman kerikil terbuka yang asri.',
    image: '/images/space/batamu-real-pavilion-clean.jpg',
    span: 'col-span-12 md:col-span-7',
  },
  {
    id: 'cactus-wall',
    title: 'Gravel Courtyard & Feature Wall',
    tagline: '"It\'s where Conversations Flow."',
    description: 'Dinding beton industrial ikonik bertabur deretan kaktus vertikal dan tempat duduk santai di atas batu kerikil alami.',
    image: '/images/space/batamu-real-cactus-wall-clean.jpg',
    span: 'col-span-12 md:col-span-5',
  },
];

