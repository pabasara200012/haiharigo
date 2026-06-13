const services = [
  {
    title: 'ඖෂධ බෙදාහැරීම',
    description: 'ඔබට අවශ්‍ය ඖෂධ සහ ෆාමසි භාණ්ඩ ඉක්මනින්, ආරක්ෂිතව සහ විශ්වාසනීයව ඔබගේ දොරකඩටම .',
    icon: '💊',
  },
  {
    title: 'පාරිභෝගික භාණ්ඩ',
    description: 'ගෙදරින් පිටවෙන්න අවශ්‍ය නැහැ.අවශ්‍ය grocery items  HariහරිGo සමඟ ඉක්මනින් හා පහසුවෙන් .',
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

const processSteps = [
  {
    title: 'ඔබගේ ඇණවුම ලබාදෙන්න',
    detail: 'දුරකථන ඇමතුමක්, WhatsApp පණිවිඩයක් හෝ වෙබ් අඩවිය හරහා ඔබගේ අවශ්‍යතාවය අපට දැනුම් දෙන්න.',
  },
  {
    title: 'ඇණවුම තහවුරු කිරීම',
    detail: 'අපගේ කණ්ඩායම ඔබගේ ඇණවුම තහවුරු කර ඉක්මනින් ක්‍රියාත්මක කිරීමට සූදානම් වෙයි.',
  },
  {
    title: 'භාණ්ඩ ලබාගෙන ගමන ආරම්භ කිරීම',
    detail: 'ඔබට අවශ්‍ය භාණ්ඩ, ආහාර, ඖෂධ හෝ ලියකියවිලි ලබාගෙන ආරක්ෂිතව ඔබ වෙත රැගෙන එන්නෙමු.',
  },
  {
    title: 'ආරක්ෂිත බෙදාහැරීම',
    detail: 'ඔබගේ නිවසට හෝ කාර්යාලයට නියමිත වේලාවට, ආරක්ෂිතව සහ විශ්වාසනීයව බෙදාහැරීම සිදු කරයි.',
  },
];

const testimonials = [
  {
    quote:'HariහරිGo නිසා මට ගොඩක් කාලය ඉතිරි වුණා. අවශ්‍ය භාණ්ඩ විනාඩි 30කටත් අඩු කාලයකින් මගේ නිවසටම ලැබුණා.',
    name: 'Nadeesha Silva',
    role: 'Marketing Manager',
  },
  {
    quote: "විශ්වාසනීය, ඉක්මන් සහ භාවිතයට ඉතා පහසු සේවාවක්. මගේ ඖෂධ ඇණවුම ඉතා සැලකිලිමත්ව ලැබුණි .",
    name: 'Chathura Perera',
    role: 'Business Owner',
  },
  {
    quote: 'හදිසි පැකේජ බෙදාහැරීම් සඳහා හොඳම සේවාවක්. කණ්ඩායම ඉක්මනින් ප්‍රතිචාර දුන්නා සහ සේවාවත් විශිෂ්ටයි.',
    name: 'Malar Kumari',
    role: 'Housewife',
  },
];

const faqs = [
  {
    question: 'මගේ ඇණවුම ලැබෙන්න කොපමණ කාලයක් ගතවේද?',
    answer: 'ඔබගේ ස්ථානය සහ සේවාවේ ස්වභාවය අනුව බොහෝ ඇණවුම් මිනිත්තු 30 සිට 60 අතර කාලයක් තුළ බෙදාහැරේ.',
  },
  {
    question: 'ඔබ සේවාව ලබාදෙන ප්‍රදේශ මොනවාද?',
    answer: 'බෙලිඅත්ත, තංගල්ල සහ අවට ප්‍රදේශ ආවරණය කරමින් සේවාව සපයන්නෙමු.',
  },
  {
    question: 'මගේ ඇණවුම නිරීක්ෂණය කළ හැකිද?',
    answer: 'ඔව්. ඔබගේ ඇණවුමේ තත්ත්වය පිළිබඳ WhatsApp හෝ දුරකථන මාර්ගයෙන් යාවත්කාලීන ලබා ගත හැක.',
  },
  {
    question: 'අවම ඇණවුම් වටිනාකමක් තිබේද?',
    answer: 'නැහැ. අවම ඇණවුම් වටිනාකමක් අවශ්‍ය නොවේ. බෙදාහැරීමේ ගාස්තුව දුර, භාණ්ඩයේ ස්වභාවය සහ සේවාවේ හදිසිභාවය අනුව තීරණය වේ.',
  },
];

const coverageAreas = [
  'Colombo',
  'Kandy',
  'Gampaha',
  'Negombo',
  'Mount Lavinia',
  'Nuwara Eliya',
];

const partnerStores = [
  {
    name: 'Beliatta Pharmacy',
    category: 'Pharmacy',
    location: 'Beliatta Town',
    logo: '💊',
  },
  {
    name: 'Fresh Market Groceries',
    category: 'Grocery',
    location: 'Beliatta Road',
    logo: '🛒',
  },
  {
    name: 'Seaside Kitchen',
    category: 'Restaurant',
    location: 'Beliatta Junction',
    logo: '🍲',
  },
  {
    name: 'Style Corner',
    category: 'Clothing',
    location: 'Main Street',
    logo: '👚',
  },
  {
    name: 'Fresh Bakery',
    category: 'Bakery',
    location: 'Market Lane',
    logo: '🥐',
  },
  {
    name: 'Daily Essentials',
    category: 'Convenience',
    location: 'City Center',
    logo: '🧺',
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container mx-auto px-3 sm:px-4 py-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
              <img src="/haiharigo/logo.svg" alt="HariහරිGo logo" className="h-12 w-auto" />
            </a>
            <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#process" className="hover:text-slate-900">Process</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#partner-stores" className="hover:text-slate-900">Partner Stores</a>
              <a href="#coverage" className="hover:text-slate-900">Coverage</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#0A2F6B] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0c3478]">
                දැන් ඇනවුම් කරන්න
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative w-full overflow-hidden bg-slate-100">
        <img src="/haiharigo/baner.png" alt="HariහරිGo banner" className="w-full h-auto max-h-[520px] object-contain" />
        {/* Optional small decorative overlay - place your image at public/overlay.png */}
      </section>

      <div className="container mx-auto -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-32 px-3 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.95fr] lg:items-center">
            <div className="space-y-3 text-slate-900">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0A2F6B]">HariහරිGo DELIVERY</p>
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">ඔබට අවශ්‍ය සියලුම delivery එකම තැනින්</h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">
                Fast, safe delivery for medicines, groceries, food and daily essentials with a Sinhala-English friendly service look and feel.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-[#0A2F6B] p-4 text-white shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#58C13D]">Fast</p>
                <p className="mt-3 text-2xl font-bold">Safe</p>
                <p className="mt-2 text-sm text-slate-200">Reliable delivery within your area.</p>
              </div>
              <div className="rounded-[1.75rem] bg-white p-4 shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0A2F6B]">Contact</p>
                <p className="mt-3 text-2xl font-bold text-[#0A2F6B]">070 717 3730</p>
                <p className="mt-2 text-sm text-slate-600">WhatsApp support for instant order help.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-6 lg:px-6">
        <section id="home" className="relative overflow-hidden bg-hero-glow py-16">
          <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1.3fr] lg:items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#58C13D]/20 bg-[#58C13D]/10 px-4 py-2 text-sm font-semibold text-[#0A2F6B]">
                  Premium delivery for urgent needs
                </div>
                <div className="space-y-6">
                  <h1 className="section-title max-w-3xl">
                    One call, Any service.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-700">
                    ඔබගේ කාලය වටිනා නිසා, ඖෂධ, ආහාර, නිතර අවශ්‍ය භාණ්ඩ, පැකේජ සහ ලිපි ලේඛන වැනි සියලුම අවශ්‍යතා ඉක්මනින් හා විශ්වාසනීයව ඔබ වෙත ගෙන එයි HariහරිGo. WhatsApp පණිවිඩයක් හෝ දුරකථන ඇමතුමක් පමණක් ප්‍රමාණවත්. ඉතිරිය අපි බලාගන්නෙමු.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/90 px-5 py-6 shadow-soft">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">විශ්වාසනීය හවුල්කරුවන්</p>
                    <p className="mt-3 text-3xl font-bold text-[#0A2F6B]">1200+</p>
                  </div>
                  <div className="rounded-3xl bg-white/90 px-5 py-6 shadow-soft">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">දෛනික බෙදාහැරීම්</p>
                    <p className="mt-3 text-3xl font-bold text-[#58C13D]">347+</p>
                  </div>
                </div>
              </div>

              {/* right column: 3 horizontal cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Documents Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
                  <img src="/haiharigo/document.png" alt="Documents delivery" className="h-40 sm:h-48 lg:h-56 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-slate-500">Documents</p>
                    <h4 className="mt-2 text-base font-semibold text-slate-900">Paperwork delivery</h4>
                    <p className="mt-2 text-xs text-slate-600">Quick, secure document drop-off for urgent forms.</p>
                  </div>
                </div>

                {/* Food Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
                  <img src="/haiharigo/food.png" alt="Food delivery" className="h-40 sm:h-48 lg:h-56 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-slate-500">Food</p>
                    <h4 className="mt-2 text-base font-semibold text-slate-900">Groceries & meals</h4>
                    <p className="mt-2 text-xs text-slate-600">Fresh groceries and ready meals delivered quickly.</p>
                  </div>
                </div>

                {/* Gas Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition">
                  <img src="/haiharigo/gas.png" alt="Gas delivery" className="h-40 sm:h-48 lg:h-56 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-slate-500">Gas</p>
                    <h4 className="mt-2 text-base font-semibold text-slate-900">Fuel essentials</h4>
                    <p className="mt-2 text-xs text-slate-600">Fast fuel top-ups and essentials delivered when you need them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>

      <div className="container mx-auto px-3 sm:px-4 py-16 lg:px-6">
        <section id="services" className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Our Services</p>
            <h2 className="section-title mt-3">Any need, Any time.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">ඔබට අවශ්‍ය දේ, අවශ්‍ය වේලාවට. ඖෂධ, groceries, food සහ දෛනික අවශ්‍යතා HariහරිGo සමඟ ඉක්මනින් හා විශ්වාසනීයව ලබා ගන්න.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <article key={service.title} className="glass-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-xl cursor-pointer group">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0A2F6B] to-[#0c3478] text-2xl text-white shadow-lg shadow-[#0A2F6B]/25 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="partner-stores" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">Trusted Local Partners</p>
            <h2 className="section-title mt-3">Trusted Local Partners</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Explore our connected stores in Beliatta and order your essentials through HariහරිGo.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Partner Stores</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Local shops connected with HariහරිGo</h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                Beliatta area
              </span>
            </div>

            <div className="marquee-container mt-8 overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x">
              <div className="marquee-track flex gap-5">
                {partnerStores.concat(partnerStores).map((store, idx) => (
                  <article key={`${store.name}-${idx}`} className="shop-card min-w-[260px] flex-shrink-0 scroll-snap-align-center">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0A2F6B] to-[#58C13D] text-2xl text-white shadow-lg">
                        {store.logo}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">{store.name}</h4>
                        <p className="text-sm text-slate-500">{store.category}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate-600">
                      <span className="rounded-2xl bg-slate-100 px-3 py-2">{store.location}</span>
                      <a href="#contact" className="inline-flex items-center rounded-full bg-[#0A2F6B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0c3478]">Order Now</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E11D2E]">How it works</p>
            <h2 className="section-title mt-3">Simple steps for speed.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">අපගේ delivery process එක සෑම order එකක් සඳහාම පැහැදිලි, ආරක්ෂිත සහ වේගවත් ලෙස සැලසුම් කර ඇත. ඔබ කළ යුත්තේ ඔබගේ අවශ්‍යතාවය අපට දැනුම් දීම පමණි.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="glass-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#58C13D]/10 to-[#0A2F6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#0A2F6B] to-[#0c3478] text-lg font-bold text-white">{index + 1}</span>
                <h3 className="relative text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="relative mt-3 text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">About</p>
            <h2 className="section-title">Your modern delivery partner for urgent needs.</h2>
            <p className="max-w-2xl text-slate-600">HariහරිGo යනු Medicines, Groceries, Food, Parcels, Documents සහ දෛනික අවශ්‍ය භාණ්ඩ සඳහා විශ්වාසනීය delivery service එකකි.
අපගේ අරමුණ වන්නේ කාර්යබහුල ඔබගේ  සහ businesses සඳහා අවශ්‍ය භාණ්ඩ ඉක්මනින්, ආරක්ෂිතව සහ පහසුවෙන් ලබාදීමයි. ඔබේ කාලය ඉතිරි කරමින්, විශ්වාසනීය සේවාවක් ලබාදීම අපගේ ප්‍රමුඛතාවයයි.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Speed</span>
                <p className="mt-3 text-3xl font-semibold text-[#58C13D]">Fast delivery</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Care</span>
                <p className="mt-3 text-3xl font-semibold text-[#0A2F6B]">Trusted handling</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-[#0A2F6B] p-8 text-white shadow-soft">
            <h3 className="text-3xl font-bold">HariහරිGo තෝරා ගැනීමට හේතු</h3>
            <ul className="mt-8 space-y-5 text-slate-100">
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>ඔබේ කාලය ඉතිරි කරන ඉක්මන් හා විශ්වාසනීය සේවාව.</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>ඔබට අවශ්‍ය ඕනෑම දෙයක්, අවශ්‍ය තැනට සහ වේලාවට</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>පුද්ගලික හා ව්‍යාපාරික අවශ්‍යතා සඳහා එකම විසඳුම.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="coverage" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Coverage</p>
            <h2 className="section-title mt-3">Service coverage across the region.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">We cover major city areas and nearby suburbs, so you can trust HariහරිGo to deliver to your home or office fast and reliable.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {coverageAreas.map((area) => (
                <div key={area} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                  <p className="text-lg font-semibold text-slate-900">{area}</p>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-soft">
              <iframe
                title="Coverage area map"
                className="h-[320px] w-full border-0"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E11D2E]">Customer Stories</p>
            <h2 className="section-title mt-3">Loved by customers who need service now.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <article key={item.name} className="glass-card p-6 transition-all duration-300 hover:shadow-soft-lg hover:scale-105 cursor-pointer">
                <p className="text-slate-700 italic">"{item.quote}"</p>
                <div className="mt-6 border-t border-slate-200/80 pt-5">
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">FAQ</p>
            <h2 className="section-title mt-3">Answers to common questions.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass-card rounded-3xl p-6">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-4 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[3rem] bg-[#f8fbff] p-8 shadow-soft sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Contact</p>
              <h2 className="section-title">Ready to make delivery easy?</h2>
              <p className="max-w-xl text-slate-600">Connect with our premium delivery team now. WhatsApp එකෙන් contact කරලා faster response එකක් ගන්න හෝ පහළ form එක through request එක submit කරන්න.</p>
              <div className="space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
                <div>
                  <p className="text-sm text-slate-500">දුරකථන</p>
                  <a href="tel:+94123456789" className="text-lg font-semibold text-[#0A2F6B]">070 7173730</a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <a href="https://wa.me/94712345678?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support." target="_blank" rel="noreferrer" className="text-lg font-semibold text-[#58C13D]">WhatsApp හරහා කතා කරන්න</a>
                </div>
              </div>
            </div>
            <form className="space-y-5 rounded-[2rem] bg-[#0A2F6B] p-8 text-white shadow-soft">
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">සම්පූර්ණ නම</label>
                <input type="text" placeholder="ඔබේ නම" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">WhatsApp / දුරකථන</label>
                <input type="tel" placeholder="+94 7xx xxx xxx" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">සේවා ඉල්ලීම්</label>
                <textarea rows={4} placeholder="ඔබට බෙදාහැරීමට අවශ්‍ය දේ විස්තර කරන්න" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#58C13D] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#4db238]">
                ඉල්ලීම යවන්න
              </button>
            </form>
          </div>
        </section>
      </div>

      <a
        href="https://wa.me/94707173730?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(37,211,102,0.22)] transition hover:translate-y-[-1px]"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366]">📱</span>
        WhatsApp ඔඩර්
      </a>

      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="container mx-auto px-3 sm:px-4 text-center text-sm text-slate-500 lg:px-6">
          © 2026 HariහරිGo. ඖෂධ, පාරිභෝගික භාණ්ඩ, ආහාර, පැකේජ, ලියකියවිලි සහ දෛනික අවශ්‍යතා සඳහා ප්‍රිමියම් බෙදාහැරීම් සේවාවන්.
        </div>
      </footer>
    </main>
  );
}
