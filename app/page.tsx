const services = [
  {
    title: 'Medicine Delivery',
    description: 'Fast, secure delivery of prescriptions and pharmacy orders across the city.',
    icon: '💊',
  },
  {
    title: 'Grocery Runs',
    description: 'Daily essentials and fresh groceries delivered straight to your door.',
    icon: '🛒',
  },
  {
    title: 'Food Delivery',
    description: 'Hot meals and restaurant orders delivered with premium care.',
    icon: '🍱',
  },
  {
    title: 'Parcel & Documents',
    description: 'Same-day courier service for parcels, papers, and urgent items.',
    icon: '📦',
  },
  {
    title: 'Home Essentials',
    description: 'Cleaning supplies, pet items, and everyday essentials delivered fast.',
    icon: '🏠',
  },
  {
    title: 'Custom Requests',
    description: 'Anything you need delivered from local shops or services.',
    icon: '✨',
  },
];

const processSteps = [
  {
    title: 'Place Your Order',
    detail: 'Call, WhatsApp or request through the website with just one message.',
  },
  {
    title: 'We Confirm Fast',
    detail: 'Our team verifies your request and assigns the nearest delivery partner.',
  },
  {
    title: 'Pickup & Track',
    detail: 'We collect your item quickly, then keep you updated until delivery.',
  },
  {
    title: 'Delivered Safely',
    detail: 'Receive your order at home or work with premium service and care.',
  },
];

const testimonials = [
  {
    quote: 'HariහරිGo saved me during a busy day – my groceries arrived in under 30 minutes.',
    name: 'Nadeesha Silva',
    role: 'Marketing Lead',
  },
  {
    quote: 'Reliable, fast, and easy to order. The team delivered my medicine with care.',
    name: 'Chathu Perera',
    role: 'Startup Founder',
  },
  {
    quote: 'Great service for urgent parcels. The support team responded immediately.',
    name: 'Malar Kumari',
    role: 'Working Mom',
  },
];

const faqs = [
  {
    question: 'How soon can I expect delivery?',
    answer: 'Most orders arrive in 30-60 minutes depending on your location and service type.',
  },
  {
    question: 'Which service areas do you cover?',
    answer: 'We cover major urban areas and nearby suburbs. Check the coverage map below for details.',
  },
  {
    question: 'Can I track my delivery?',
    answer: 'Yes, we provide real-time updates via WhatsApp and SMS while your order is in transit.',
  },
  {
    question: 'Is there a minimum order value?',
    answer: 'No minimum order is required. Delivery fees vary by distance and urgency.',
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

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-white">
      <div className="container mx-auto px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between gap-6 py-6">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-slate-900">
            <img src="/logo.svg" alt="HariහරිGo logo" className="h-12 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#process" className="hover:text-slate-900">How It Works</a>
            <a href="#about" className="hover:text-slate-900">About Us</a>
            <a href="#coverage" className="hover:text-slate-900">Coverage</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+94123456789" className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-block">
              Call Now
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#0A2F6B] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0c3478]">
              Order Now
            </a>
          </div>
        </header>
      </div>

      <section id="home" className="relative overflow-hidden bg-hero-glow py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#58C13D]/20 bg-[#58C13D]/10 px-4 py-2 text-sm font-semibold text-[#0A2F6B]">
                Premium on-demand delivery
              </div>
              <div className="space-y-6">
                <h1 className="section-title max-w-3xl">
                  One Call. Any Service.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  Medicines, Groceries, Parcels & Essentials Delivered To Your Doorstep with fast, secure service for busy people.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#0A2F6B] px-7 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0c3478]">
                  Order Now
                </a>
                <a href="https://wa.me/94712345678?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go%20team,%20I%20need%20delivery%20support." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#0A2F6B] bg-white px-7 py-4 text-sm font-semibold text-[#0A2F6B] transition hover:bg-slate-100">
                  WhatsApp Us
                </a>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/90 px-5 py-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Trusted Partners</p>
                  <p className="mt-3 text-3xl font-bold text-[#0A2F6B]">1200+</p>
                </div>
                <div className="rounded-3xl bg-white/90 px-5 py-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Daily deliveries</p>
                  <p className="mt-3 text-3xl font-bold text-[#58C13D]">347</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#0A2F6B]/10 to-[#58C13D]/10 blur-3xl" />
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/90 shadow-soft">
                <img src="/hero-cover.svg" alt="HariහරිGo cover illustration" className="h-[520px] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 lg:px-8">
        <section id="services" className="space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Our Services</p>
            <h2 className="section-title mt-3">Delivery for every need, any time.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">From urgent medicines to household essentials, HariහරිGo makes premium delivery effortless and dependable.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0A2F6B] text-2xl text-white shadow-lg shadow-[#0A2F6B]/15">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E11D2E]">How It Works</p>
            <h2 className="section-title mt-3">A simple process designed for speed.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Our delivery workflow keeps every request clear, secure, and fast — so you can focus on what matters.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="glass-card p-6">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A2F6B] text-lg font-bold text-white">{index + 1}</span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">About Us</p>
            <h2 className="section-title">Your modern delivery partner for life’s urgent needs.</h2>
            <p className="max-w-2xl text-slate-600">HariහරිGo provides on-demand delivery services for medicines, groceries, food, parcels, documents, and everyday essentials. Our mission is to save time for busy people by delivering anything they need directly to their homes or workplaces.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Speed</span>
                <p className="mt-3 text-3xl font-semibold text-[#58C13D]">Rapid delivery</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Care</span>
                <p className="mt-3 text-3xl font-semibold text-[#0A2F6B]">Trusted handling</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-[#0A2F6B] p-8 text-white shadow-soft">
            <h3 className="text-3xl font-bold">Why choose HariහරිGo?</h3>
            <ul className="mt-8 space-y-5 text-slate-100">
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>24/7 support and quick response for every request.</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>Premium delivery partners with real-time tracking.</span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#58C13D] text-lg">✓</span>
                <span>Flexible fulfillment for personal and business needs.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="coverage" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Coverage Areas</p>
            <h2 className="section-title mt-3">Serving communities across the region.</h2>
            <p className="mt-4 max-w-2xl text-slate-600">We cover major districts and growing urban centers so you can rely on HariහරිGo for delivery wherever you work and live.</p>
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
            {testimonials.map((item) => (
              <article key={item.name} className="glass-card p-6">
                <p className="text-slate-700">“{item.quote}”</p>
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
            <h2 className="section-title mt-3">Common questions answered.</h2>
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Get in touch</p>
              <h2 className="section-title">Ready to make your delivery effortless?</h2>
              <p className="max-w-xl text-slate-600">Contact our premium delivery team now. Use WhatsApp for the fastest response or submit a quick request below.</p>
              <div className="space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a href="tel:+94123456789" className="text-lg font-semibold text-[#0A2F6B]">+94 123 456 789</a>
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <a href="https://wa.me/94712345678?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support." target="_blank" rel="noreferrer" className="text-lg font-semibold text-[#58C13D]">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
            <form className="space-y-5 rounded-[2rem] bg-[#0A2F6B] p-8 text-white shadow-soft">
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">WhatsApp / Phone</label>
                <input type="tel" placeholder="+94 7xx xxx xxx" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-200">Service Request</label>
                <textarea rows={4} placeholder="Tell us what you need delivered" className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#58C13D] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#4db238]">
                Send Request
              </button>
            </form>
          </div>
        </section>
      </div>

      <a
        href="https://wa.me/94712345678?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(37,211,102,0.22)] transition hover:translate-y-[-1px]"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366]">📱</span>
        WhatsApp Order
      </a>

      <footer className="border-t border-slate-200 py-8 bg-slate-50">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500 lg:px-8">
          © 2026 HariහරිGo. Premium delivery services for medicines, groceries, food, parcels, documents, and everyday essentials.
        </div>
      </footer>
    </main>
  );
}
