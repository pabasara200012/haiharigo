export type Product = {
  id: string;
  name: string;
  price: string;
  available: boolean;
  image: string;
  description: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  items: Product[];
};

export type StoreOffer = {
  id: string;
  title: string;
  description: string;
  badge: string;
};

export type StoreReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type BusinessHour = {
  day: string;
  hours: string;
};

export type PartnerStore = {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  about: string;
  phone: string;
  whatsapp: string;
  address: string;
  logo: string;
  coverImage: string;
  hours: BusinessHour[];
  products: ProductCategory[];
  offers: StoreOffer[];
  rating: number;
  reviewCount: number;
  reviews: StoreReview[];
  mapEmbed: string;
};

export const brand = {
  name: 'HariහරිGo',
  slogan: 'One Call. Any Service.',
  description: 'Premium on-demand delivery for medicines, groceries, food, parcels, documents, and essentials.',
};

export const primaryPhone = '+94 70 717 3730';

export const services = [
  {
    title: 'ඖෂධ බෙදාහැරීම',
    description: 'ඔබට අවශ්‍ය ඖෂධ සහ ෆාමසි භාණ්ඩ ඉක්මනින්, ආරක්ෂිතව සහ විශ්වාසනීයව ඔබගේ දොරකඩටම.',
    icon: '💊',
  },
  {
    title: 'පාරිභෝගික භාණ්ඩ',
    description: 'ගෙදරින් පිටවෙන්න අවශ්‍ය නැහැ. අවශ්‍ය grocery items HariහරිGo සමඟ ඉක්මනින් හා පහසුවෙන්.',
    icon: '🛒',
  },
  {
    title: 'ආහාර බෙදාහැරීම',
    description: 'ඔබගේ ප්‍රියතම අවන්හල්වලින් සහ ආහාර සැපයුම්කරුවන්ගෙන් ඇණවුම් කළ ආහාර ඉක්මනින්.',
    icon: '🍱',
  },
  {
    title: 'පැකේජ සහ ලියකියවිලි',
    description: 'එදිනම විශ්වාසනීය හා වේගවත් බෙදාහැරීම.',
    icon: '📦',
  },
  {
    title: 'නිවසේ අවශ්‍යතා',
    description: 'පැහැදිලි පිරිසිදු භාණ්ඩ, සුරතල් ද්‍රව්‍ය සහ දිනපතා අවශ්‍ය ද්‍රව්‍ය.',
    icon: '🏠',
  },
  {
    title: 'විශේෂ ඇණවුම්',
    description: 'ප්‍රදේශයේ ඕනෑම වෙළඳසැලකින් ඔබට අවශ්‍ය දේ ලබා ගැනීම.',
    icon: '✨',
  },
];

export const partnerStores: PartnerStore[] = [
  {
    id: 'beliatta-pharmacy',
    slug: 'beliatta-pharmacy',
    name: 'Beliatta Pharmacy',
    category: 'Pharmacy',
    location: 'Beliatta Town',
    description: 'Trusted local pharmacy with fast medicine delivery support through HariහරිGo.',
    about: 'Beliatta Pharmacy is a trusted local chemist in Beliatta that serves every prescription and daily wellness need with professional care.',
    phone: '+94 71 234 5678',
    whatsapp: '+94712345678',
    address: 'Main Road, Beliatta, Sri Lanka',
    logo: '/partner-logos/beliatta-pharmacy.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '07:00 - 21:00' },
      { day: 'Tue', hours: '07:00 - 21:00' },
      { day: 'Wed', hours: '07:00 - 21:00' },
      { day: 'Thu', hours: '07:00 - 21:00' },
      { day: 'Fri', hours: '07:00 - 21:00' },
      { day: 'Sat', hours: '08:00 - 20:00' },
      { day: 'Sun', hours: '08:00 - 18:00' },
    ],
    products: [
      {
        id: 'pharmacy-medicines',
        name: 'Medicines',
        items: [
          { id: 'vitamin-c', name: 'Vitamin C 500mg', price: 'Rs. 280', available: true, image: '/haiharigo/services/gas.png', description: 'Immune boost tablets for everyday health.' },
          { id: 'paracetamol', name: 'Paracetamol 500mg', price: 'Rs. 120', available: true, image: '/haiharigo/services/document.png', description: 'Fast relief for fever and pain.' },
          { id: 'cough-syrup', name: 'Cough Syrup', price: 'Rs. 450', available: false, image: '/haiharigo/services/food.png', description: 'Soothing formula for cold and cough.' },
        ],
      },
      {
        id: 'pharmacy-wellness',
        name: 'Wellness',
        items: [
          { id: 'hand-sanitizer', name: 'Hand Sanitizer', price: 'Rs. 350', available: true, image: '/haiharigo/images/banner.png', description: 'Kills 99.9% germs with gentle care.' },
          { id: 'face-mask', name: 'Disposable Face Mask', price: 'Rs. 250', available: true, image: '/haiharigo/services/food.png', description: 'Soft and breathable protection.' },
        ],
      },
    ],
    offers: [
      { id: 'pharmacy-offer-1', title: 'Free delivery over Rs. 1,500', description: 'Order daily medicines and wellness products for free local delivery.', badge: 'Free Delivery' },
      { id: 'pharmacy-offer-2', title: '10% off first order', description: 'Save on your first HariහරිGo pharmacy order.', badge: '10% OFF' },
    ],
    rating: 4.9,
    reviewCount: 68,
    reviews: [
      { id: 'rev-1', name: 'Sanduni', rating: 5, comment: 'Great service and fast medicine delivery. Very reliable.', date: 'May 2026' },
      { id: 'rev-2', name: 'Ruwan', rating: 4, comment: 'Friendly staff and easy ordering through HariහරිGo.', date: 'June 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
  {
    id: 'fresh-market-groceries',
    slug: 'fresh-market-groceries',
    name: 'Fresh Market Groceries',
    category: 'Grocery',
    location: 'Beliatta Road',
    description: 'Daily grocery store offering fresh essentials and rapid delivery options.',
    about: 'Fresh Market Groceries brings fresh vegetables, household products and pantry staples to your doorstep with fast marketplace delivery.',
    phone: '+94 71 345 6789',
    whatsapp: '+94713456789',
    address: 'Beliatta Road, Beliatta, Sri Lanka',
    logo: '/partner-logos/fresh-market-groceries.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '07:00 - 20:30' },
      { day: 'Tue', hours: '07:00 - 20:30' },
      { day: 'Wed', hours: '07:00 - 20:30' },
      { day: 'Thu', hours: '07:00 - 20:30' },
      { day: 'Fri', hours: '07:00 - 20:30' },
      { day: 'Sat', hours: '08:00 - 19:00' },
      { day: 'Sun', hours: '08:00 - 18:00' },
    ],
    products: [
      {
        id: 'grocery-fresh',
        name: 'Fresh Produce',
        items: [
          { id: 'banana-bunch', name: 'Banana Bunch', price: 'Rs. 220', available: true, image: '/haiharigo/services/gas.png', description: 'Fresh bananas ready for daily use.' },
          { id: 'tomato-kg', name: 'Tomatoes (1kg)', price: 'Rs. 180', available: true, image: '/haiharigo/services/food.png', description: 'Juicy tomatoes for all cooking needs.' },
        ],
      },
      {
        id: 'grocery-dry',
        name: 'Pantry Essentials',
        items: [
          { id: 'rice-5kg', name: 'White Rice 5kg', price: 'Rs. 1,150', available: true, image: '/haiharigo/services/document.png', description: 'Quality rice for daily meals.' },
          { id: 'cooking-oil', name: 'Cooking Oil 1L', price: 'Rs. 720', available: true, image: '/haiharigo/images/banner.png', description: 'Pure oil for healthy cooking.' },
        ],
      },
    ],
    offers: [
      { id: 'grocery-offer-1', title: 'Buy 2 get 1 free', description: 'Buy two daily essentials and get one free item from selected pantry categories.', badge: 'BUNDLE' },
      { id: 'grocery-offer-2', title: 'Free delivery over Rs. 2,000', description: 'Local delivery is free when you order groceries over Rs. 2,000.', badge: 'FREE' },
    ],
    rating: 4.8,
    reviewCount: 54,
    reviews: [
      { id: 'rev-3', name: 'Nimali', rating: 5, comment: 'Fresh items delivered quickly with HariහරිGo.', date: 'May 2026' },
      { id: 'rev-4', name: 'Janith', rating: 4, comment: 'Great selection of pantry essentials and fast service.', date: 'June 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
  {
    id: 'seaside-kitchen',
    slug: 'seaside-kitchen',
    name: 'Seaside Kitchen',
    category: 'Restaurant',
    location: 'Beliatta Junction',
    description: 'Local restaurant serving delicious meals and ready-to-order dishes.',
    about: 'Seaside Kitchen prepares fresh home-style meals and delivery-ready dishes for families in Beliatta, partnered with HariහරිGo for fast pickup.',
    phone: '+94 71 456 7890',
    whatsapp: '+94714567890',
    address: 'Beliatta Junction, Beliatta, Sri Lanka',
    logo: '/partner-logos/seaside-kitchen.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '08:00 - 22:00' },
      { day: 'Tue', hours: '08:00 - 22:00' },
      { day: 'Wed', hours: '08:00 - 22:00' },
      { day: 'Thu', hours: '08:00 - 22:00' },
      { day: 'Fri', hours: '08:00 - 23:00' },
      { day: 'Sat', hours: '09:00 - 23:00' },
      { day: 'Sun', hours: '09:00 - 21:00' },
    ],
    products: [
      {
        id: 'restaurant-favorites',
        name: 'Popular Meals',
        items: [
          { id: 'seafood-noodles', name: 'Seafood Noodles', price: 'Rs. 1,250', available: true, image: '/haiharigo/services/food.png', description: 'Fresh seafood tossed in house spices.' },
          { id: 'chicken-rice', name: 'Chicken Rice Plate', price: 'Rs. 980', available: true, image: '/haiharigo/services/gas.png', description: 'Satisfying rice plate with spicy chicken.' },
        ],
      },
      {
        id: 'restaurant-snacks',
        name: 'Quick Bites',
        items: [
          { id: 'spring-rolls', name: 'Vegetable Spring Rolls', price: 'Rs. 390', available: true, image: '/haiharigo/services/document.png', description: 'Crispy rolls with tasty vegetable filling.' },
          { id: 'fish-curry', name: 'Fish Curry Bowl', price: 'Rs. 720', available: false, image: '/haiharigo/images/banner.png', description: 'Homestyle fish curry with fragrant rice.' },
        ],
      },
    ],
    offers: [
      { id: 'kitchen-offer-1', title: 'Bundle Meal Savings', description: 'Save 12% when you order any main dish with a drink and side.', badge: 'Save 12%' },
      { id: 'kitchen-offer-2', title: 'Free dessert on orders over Rs. 1,800', description: 'Get a sweet treat with your large meal order.', badge: 'Free Dessert' },
    ],
    rating: 4.7,
    reviewCount: 39,
    reviews: [
      { id: 'rev-5', name: 'Mohana', rating: 5, comment: 'Delicious food and quick delivery by HariහරිGo.', date: 'June 2026' },
      { id: 'rev-6', name: 'Kamal', rating: 4, comment: 'Great restaurant menu with friendly service.', date: 'May 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
  {
    id: 'style-corner',
    slug: 'style-corner',
    name: 'Style Corner',
    category: 'Clothing',
    location: 'Main Street',
    description: 'Fashion boutique with the latest clothing and accessories in Beliatta.',
    about: 'Style Corner curates stylish outfits and accessories for modern customers, all available via HariහරිGo delivery service.',
    phone: '+94 71 567 8901',
    whatsapp: '+94715678901',
    address: 'Shopping Arcade, Main Street, Beliatta, Sri Lanka',
    logo: '/partner-logos/style-corner.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '09:00 - 19:00' },
      { day: 'Tue', hours: '09:00 - 19:00' },
      { day: 'Wed', hours: '09:00 - 19:00' },
      { day: 'Thu', hours: '09:00 - 19:00' },
      { day: 'Fri', hours: '09:00 - 19:00' },
      { day: 'Sat', hours: '09:00 - 18:00' },
      { day: 'Sun', hours: 'Closed' },
    ],
    products: [
      {
        id: 'style-womens',
        name: 'Women’s Fashion',
        items: [
          { id: 'summer-dress', name: 'Summer Dress', price: 'Rs. 2,200', available: true, image: '/haiharigo/services/food.png', description: 'Lightweight dress for everyday styling.' },
          { id: 'silk-scarf', name: 'Silk Scarf', price: 'Rs. 790', available: true, image: '/haiharigo/images/banner.png', description: 'Elegant accessory with premium finish.' },
        ],
      },
      {
        id: 'style-mens',
        name: 'Men’s Essentials',
        items: [
          { id: 'formal-shirt', name: 'Formal Shirt', price: 'Rs. 1,850', available: true, image: '/haiharigo/services/document.png', description: 'Smart fit shirt for work and events.' },
          { id: 'denim-jeans', name: 'Denim Jeans', price: 'Rs. 2,400', available: false, image: '/haiharigo/services/gas.png', description: 'Comfortable and stylish everyday jeans.' },
        ],
      },
    ],
    offers: [
      { id: 'style-offer-1', title: 'Style bundle discount', description: 'Get 15% off when you order any two fashion items.', badge: '15% OFF' },
      { id: 'style-offer-2', title: 'Free styling advice', description: 'Order now and receive free outfit suggestions from the store team.', badge: 'Free Advice' },
    ],
    rating: 4.6,
    reviewCount: 28,
    reviews: [
      { id: 'rev-7', name: 'Sandamali', rating: 5, comment: 'Beautiful clothes and fast delivery.', date: 'May 2026' },
      { id: 'rev-8', name: 'Udara', rating: 4, comment: 'Great selection of outfits for any occasion.', date: 'June 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
  {
    id: 'fresh-bakery',
    slug: 'fresh-bakery',
    name: 'Fresh Bakery',
    category: 'Bakery',
    location: 'Market Lane',
    description: 'Bakery offering fresh bread, cakes, and snacks every day.',
    about: 'Fresh Bakery delivers warm breads, cakes, and snacks every day through HariහරිGo, making mornings and celebrations sweeter.',
    phone: '+94 71 678 9012',
    whatsapp: '+94716789012',
    address: 'Market Lane, Beliatta, Sri Lanka',
    logo: '/partner-logos/fresh-bakery.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '06:00 - 18:00' },
      { day: 'Tue', hours: '06:00 - 18:00' },
      { day: 'Wed', hours: '06:00 - 18:00' },
      { day: 'Thu', hours: '06:00 - 18:00' },
      { day: 'Fri', hours: '06:00 - 18:00' },
      { day: 'Sat', hours: '06:00 - 17:00' },
      { day: 'Sun', hours: '06:00 - 16:00' },
    ],
    products: [
      {
        id: 'bakery-breads',
        name: 'Fresh Breads',
        items: [
          { id: 'white-bread', name: 'White Bread Loaf', price: 'Rs. 180', available: true, image: '/haiharigo/services/food.png', description: 'Soft daily bread perfect for sandwiches.' },
          { id: 'whole-wheat', name: 'Whole Wheat Bread', price: 'Rs. 220', available: true, image: '/haiharigo/services/gas.png', description: 'Healthy bread with rich grain flavor.' },
        ],
      },
      {
        id: 'bakery-sweets',
        name: 'Sweets & Snacks',
        items: [
          { id: 'nut-cake', name: 'Nut Cake Slice', price: 'Rs. 290', available: true, image: '/haiharigo/services/document.png', description: 'Moist cake slice with crunchy nuts.' },
          { id: 'butter-cookies', name: 'Butter Cookies', price: 'Rs. 170', available: false, image: '/haiharigo/images/banner.png', description: 'Crispy cookies with rich butter taste.' },
        ],
      },
    ],
    offers: [
      { id: 'bakery-offer-1', title: 'Morning bundle', description: 'Buy any two breads and get 10% off on cookies.', badge: '10% OFF' },
      { id: 'bakery-offer-2', title: 'Free delivery on cake orders', description: 'Get free delivery when ordering cakes over Rs. 1,000.', badge: 'Free Delivery' },
    ],
    rating: 4.9,
    reviewCount: 46,
    reviews: [
      { id: 'rev-9', name: 'Priyanka', rating: 5, comment: 'Lovely bakery goods, delivered warm and fresh.', date: 'May 2026' },
      { id: 'rev-10', name: 'Suresh', rating: 5, comment: 'Great taste and fast marketplace delivery.', date: 'June 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
  {
    id: 'daily-essentials',
    slug: 'daily-essentials',
    name: 'Daily Essentials',
    category: 'Convenience',
    location: 'City Center',
    description: 'Convenience store for everyday essentials and quick delivery service.',
    about: 'Daily Essentials offers household staples, snacks and quick refreshment items for fast marketplace delivery through HariහරිGo.',
    phone: '+94 71 789 0123',
    whatsapp: '+94717890123',
    address: 'City Center, Beliatta, Sri Lanka',
    logo: '/partner-logos/daily-essentials.svg',
    coverImage: '/haiharigo/images/banner.png',
    hours: [
      { day: 'Mon', hours: '06:00 - 22:00' },
      { day: 'Tue', hours: '06:00 - 22:00' },
      { day: 'Wed', hours: '06:00 - 22:00' },
      { day: 'Thu', hours: '06:00 - 22:00' },
      { day: 'Fri', hours: '06:00 - 22:00' },
      { day: 'Sat', hours: '06:00 - 22:00' },
      { day: 'Sun', hours: '06:00 - 20:00' },
    ],
    products: [
      {
        id: 'convenience-snacks',
        name: 'Quick Snacks',
        items: [
          { id: 'cup-noodles', name: 'Cup Noodles', price: 'Rs. 180', available: true, image: '/haiharigo/services/food.png', description: 'Instant meal for anytime hunger.' },
          { id: 'energy-drink', name: 'Energy Drink', price: 'Rs. 270', available: true, image: '/haiharigo/services/gas.png', description: 'Refreshment with fast energy boost.' },
        ],
      },
      {
        id: 'convenience-home',
        name: 'Home Essentials',
        items: [
          { id: 'dish-soap', name: 'Dish Soap', price: 'Rs. 240', available: true, image: '/haiharigo/services/document.png', description: 'Cleans dishes with a fresh scent.' },
          { id: 'toilet-paper', name: 'Toilet Paper', price: 'Rs. 390', available: false, image: '/haiharigo/images/banner.png', description: 'Soft and strong daily paper rolls.' },
        ],
      },
    ],
    offers: [
      { id: 'daily-offer-1', title: 'Quick pickup discount', description: 'Save 8% on orders placed before 10 AM.', badge: '8% OFF' },
      { id: 'daily-offer-2', title: 'Weekend essentials offer', description: 'Enjoy 15% off on selected household items every weekend.', badge: '15% OFF' },
    ],
    rating: 4.5,
    reviewCount: 33,
    reviews: [
      { id: 'rev-11', name: 'Hiran', rating: 4, comment: 'Convenient store with everything I needed for the day.', date: 'May 2026' },
      { id: 'rev-12', name: 'Dilani', rating: 5, comment: 'Fast delivery and helpful marketplace service.', date: 'June 2026' },
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus',
  },
];

export function getPartnerStore(slug: string) {
  return partnerStores.find((store) => store.slug === slug);
}

export function getPartnerStoreParams() {
  return partnerStores.map((store) => ({ slug: store.slug }));
}

export function formatWhatsAppHref(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`;
}
