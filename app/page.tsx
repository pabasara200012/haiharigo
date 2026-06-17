import { Footer } from '../components/Footer';
import { FeaturedStores } from '../components/FeaturedStores';
import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { brand, primaryPhone, services } from '../lib/partnerStores';

const coverageAreas = ['Colombo', 'Kandy', 'Gampaha', 'Negombo', 'Mount Lavinia', 'Nuwara Eliya'];

const processSteps = [
  {
    title: 'ඔබගේ ඇණවුම ලබාදෙන්න',
    detail: 'WhatsApp, phone call, or the contact form can be used to share your request quickly.',
  },
  {
    title: 'ඇණවුම තහවුරු කිරීම',
    detail: 'Our team confirms the order, checks availability, and prepares it for pickup.',
  },
  {
    title: 'භාණ්ඩ ලබාගැනීම',
    detail: 'We collect medicines, groceries, food, or documents from the right partner store.',
  },
  {
    title: 'ආරක්ෂිත බෙදාහැරීම',
    detail: 'The order is delivered safely to your home, office, or preferred delivery point.',
  },
];

const testimonials = [
  {
    quote: 'HariහරිGo නිසා මට ගොඩක් කාලය ඉතිරි වුණා. අවශ්‍ය භාණ්ඩ ඉක්මනින්ම ලැබුණා.',
    name: 'Nadeesha Silva',
    role: 'Marketing Manager',
  },
  {
    quote: 'විශ්වාසනීය, ඉක්මන් සහ භාවිතයට පහසු සේවාවක්. මගේ ඖෂධ ඇණවුමත් හොඳින් ලැබුණා.',
    name: 'Chathura Perera',
    role: 'Business Owner',
  },
  {
    quote: 'හදිසි බෙදාහැරීම් සඳහා ඉතා හොඳ සේවාවක්. කණ්ඩායම ඉක්මනින් ප්‍රතිචාර දුන්නා.',
    name: 'Malar Kumari',
    role: 'Housewife',
  },
];

const faqs = [
  {
    question: 'මගේ ඇණවුම ලැබෙන්න කොපමණ කාලයක් ගතවේද?',
    answer: 'ඔබගේ ස්ථානය සහ ඇණවුමේ ස්වභාවය අනුව බොහෝ ඇණවුම් මිනිත්තු 30 සිට 60 අතර කාලයකදී බෙදාහරිනවා.',
  },
  {
    question: 'ඔබ සේවාව ලබාදෙන ප්‍රදේශ මොනවාද?',
    answer: 'බෙලිඅත්ත සහ අවට ප්‍රදේශවලින් ආරම්භ කර, ප්‍රමුඛ නගර සහ සබඳතා ප්‍රදේශ ආවරණය කරයි.',
  },
  {
    question: 'මගේ ඇණවුම නිරීක්ෂණය කළ හැකිද?',
    answer: 'ඔව්. WhatsApp හෝ දුරකථන මගින් status update ලබා ගත හැක.',
  },
  {
    question: 'අවම ඇණවුම් වටිනාකමක් තිබේද?',
    answer: 'නැහැ. අවම ඇණවුම් වටිනාකමක් අවශ්‍ය නොවේ.',
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-white">
      <Header />

      <section className="relative w-full overflow-hidden bg-slate-100">
        <img src="/haiharigo/images/banner.png" alt="HariහරිGo banner" className="h-auto w-full max-h-[520px] object-cover" />
      </section>

      <div className="section-shell -mt-10 py-6 sm:-mt-16 md:-mt-20 lg:-mt-32">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/20 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.95fr] lg:items-center">
            <div className="space-y-3 text-slate-900">
              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0A2F6B]">{brand.name} DELIVERY</p>
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">ඔබට අවශ්‍ය සියලුම delivery එකම තැනින්</h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">
                Fast, safe delivery for medicines, groceries, food and daily essentials with a Sinhala-English friendly marketplace experience.
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
                <p className="mt-3 text-2xl font-bold text-[#0A2F6B]">{primaryPhone}</p>
                <p className="mt-2 text-sm text-slate-600">WhatsApp support for instant order help.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell py-10 sm:py-12 lg:py-16">
        <section id="services" className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Our Services</p>
            <h2 className="section-title mt-3">Any need, Any time.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">ඔබට අවශ්‍ය දේ, අවශ්‍ය වේලාවට. ඖෂධ, groceries, food සහ දෛනික අවශ්‍යතා HariහරිGo සමඟ ඉක්මනින් හා විශ්වාසනීයව ලබා ගන්න.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </section>

        <section id="process" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Process</p>
            <h2 className="section-title mt-3">Simple steps, faster delivery.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="rounded-[2rem] bg-[#f8fbff] p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">About</p>
            <h2 className="section-title mt-3">Built for local marketplace delivery.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              HariහරිGo connects trusted local partners with customers who need fast delivery for everyday essentials. The focus is simple: clean ordering, clear communication, and dependable service.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Support</p>
            <h3 className="mt-3 text-2xl font-bold">Need help right now?</h3>
            <p className="mt-4 text-slate-200">Call or WhatsApp us and our team will guide you through the order process.</p>
            <a href="https://wa.me/94707173730?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support." className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb45a]">
              WhatsApp support
            </a>
          </div>
        </section>

        <FeaturedStores />

        <section id="coverage" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Coverage</p>
            <h2 className="section-title mt-3">Service coverage across the region.</h2>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.166159662036!2d79.85710505!3d6.92707985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25979f06df59f%3A0x3e915bb31c5bd991!2sBeliatta%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1727848081234!5m2!1sen!2sus"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">FAQ</p>
            <h2 className="section-title mt-3">Common questions.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
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

      <Footer />
    </main>
  );
}
