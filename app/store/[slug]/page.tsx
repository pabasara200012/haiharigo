import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import {
  formatPhoneHref,
  formatWhatsAppHref,
  getPartnerStore,
  getPartnerStoreParams,
  type BusinessHour,
} from '../../../lib/partnerStores';

type StorePageProps = {
  params: Promise<{ slug: string }>;
};

function getStoreStatus(hours: BusinessHour[]) {
  const now = new Date();
  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = weekdayNames[now.getDay()];
  const currentHour = now.getHours();

  const todayHours = hours.find((item) => item.day === today);
  if (!todayHours || todayHours.hours.toLowerCase().includes('closed')) {
    return { label: 'Closed', open: false };
  }

  const [start, end] = todayHours.hours.split(' - ').map((value) => parseInt(value, 10));
  const isOpen = currentHour >= start && currentHour < end;
  return { label: isOpen ? 'Open Now' : 'Closed', open: isOpen };
}

export function generateStaticParams() {
  return getPartnerStoreParams();
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const store = getPartnerStore(resolvedParams.slug);

  if (!store) {
    return {
      title: 'Store not found',
      description: 'The requested HariහරිGo partner store could not be found.',
    };
  }

  return {
    title: `${store.name} Marketplace`,
    description: store.description,
    openGraph: {
      title: `${store.name} Marketplace`,
      description: store.description,
      type: 'website',
    },
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const resolvedParams = await params;
  const store = getPartnerStore(resolvedParams.slug);

  if (!store) {
    notFound();
  }

  const status = getStoreStatus(store.hours);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header variant="internal" />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F6B]/10 via-transparent to-[#58C13D]/10" />
        <div className="relative">
          <div className="h-[220px] overflow-hidden bg-slate-900 sm:h-[280px] lg:h-[320px]">
            <img src={store.coverImage ?? '/haiharigo/images/banner.png'} alt={`${store.name} cover`} className="h-full w-full object-cover opacity-80" />
          </div>
          <div className="section-shell px-3 py-8 sm:px-4 sm:py-10 lg:px-6">
            <div className="grid gap-6 rounded-[2rem] border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6 lg:grid-cols-[0.85fr_0.45fr] lg:items-center lg:p-8">
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] bg-[#0A2F6B] text-3xl text-white shadow-lg">
                    <img src={store.logo ?? '/haiharigo/images/logo.svg'} alt={`${store.name} logo`} className="h-12 w-12 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">{store.category}</p>
                    <h1 className="mt-1 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">{store.name}</h1>
                  </div>
                </div>
                <p className="max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{store.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-4 py-2 text-sm font-semibold ${status.open ? 'bg-[#E7F7EA] text-[#0A2F6B]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>{status.label}</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{store.location}</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{store.rating} ★ ({store.reviewCount})</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-[#0A2F6B] p-5 text-white shadow-soft sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Contact</p>
                  <p className="mt-3 break-words text-lg font-semibold sm:text-xl">{store.phone}</p>
                  <p className="mt-1 break-words text-sm text-slate-200">WhatsApp: {store.whatsapp}</p>
                </div>
                <div className="rounded-[2rem] bg-slate-100 p-5 shadow-soft sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Address</p>
                  <p className="mt-3 break-words text-base font-semibold text-slate-900">{store.address}</p>
                  <p className="mt-2 text-sm text-slate-600">Fast delivery through HariහරිGo platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-shell px-3 py-10 sm:px-4 lg:px-6">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_0.55fr]">
          <section className="space-y-10">
            <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#0A2F6B]">Store Information</p>
                  <h2 className="section-title mt-3 text-2xl sm:text-3xl">About {store.name}</h2>
                </div>
                <Link href="/stores" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Back to Stores
                </Link>
              </div>
              <p className="mt-6 leading-7 text-slate-700">{store.about}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
                  <a href={formatPhoneHref(store.phone)} className="mt-3 block text-lg font-semibold text-slate-900">
                    {store.phone}
                  </a>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">WhatsApp</p>
                  <a href={formatWhatsAppHref(store.whatsapp, `Hi ${store.name}, I want to order.`)} target="_blank" rel="noreferrer" className="mt-3 block text-lg font-semibold text-slate-900">
                    {store.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#58C13D]">Products</p>
              <h2 className="section-title mt-3 text-2xl sm:text-3xl">Browse categories</h2>
              <div className="mt-6 grid gap-6">
                {store.products.map((category) => (
                  <div key={category.id} className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">{category.name}</h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {category.items.map((item) => (
                        <div key={item.id} className="rounded-[1.75rem] border border-slate-200 p-4 transition hover:shadow-lg">
                          <div className="flex h-40 items-center justify-center overflow-hidden rounded-3xl bg-slate-100">
                            <img src={item.image ?? '/haiharigo/services/food.png'} alt={item.name} className="h-full w-full object-cover" />
                          </div>
                          <div className="mt-4">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                              <h4 className="min-w-0 text-lg font-semibold text-slate-900">{item.name}</h4>
                              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.available ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#991B1B]'}`}>
                                {item.available ? 'In stock' : 'Out of stock'}
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <span className="text-lg font-bold text-slate-900">{item.price}</span>
                              <button type="button" className="rounded-full bg-[#0A2F6B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0c3478]">
                                Order
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#58C13D]">Offers</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Current promotions</h3>
              <div className="mt-6 space-y-4">
                {store.offers.map((offer) => (
                  <article key={offer.id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                    <span className="inline-flex rounded-full bg-[#0A2F6B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">{offer.badge}</span>
                    <h4 className="mt-4 text-lg font-semibold text-slate-900">{offer.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{offer.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[#58C13D]">Reviews</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">Customer feedback</h3>
              <div className="mt-6 space-y-4">
                {store.reviews.map((review) => (
                  <article key={review.id} className="rounded-[1.75rem] border border-slate-200 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-base font-semibold text-slate-900">{review.name}</h4>
                      <span className="text-sm font-semibold text-[#0A2F6B]">{review.rating}★</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">{review.date}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <iframe title={`${store.name} location`} className="h-[320px] w-full border-0" loading="lazy" src={store.mapEmbed} />
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={formatWhatsAppHref(store.whatsapp, `Hi ${store.name}, I want to order.`)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1fb45a]">
            WhatsApp Order
          </a>
          <a href={formatPhoneHref(store.phone)} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Call Store
          </a>
          <Link href="/stores" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Back to Stores
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
