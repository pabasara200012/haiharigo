import Link from 'next/link';
import { partnerStores } from '../lib/partnerStores';
import { PartnerStoreCard } from './PartnerStoreCard';

type FeaturedStoresProps = {
  title?: string;
  subtitle?: string;
};

export function FeaturedStores({
  title = 'Trusted Local Partners',
  subtitle = 'Explore our connected stores in Beliatta and order your essentials through HariහරිGo.',
}: FeaturedStoresProps) {
  return (
    <section id="partner-stores" className="mt-20 space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">Trusted Local Partners</p>
        <h2 className="section-title mt-3">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600">{subtitle}</p>
      </div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Partner Stores</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Local shops connected with HariහරිGo</h3>
          </div>
          <Link href="/stores" className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 transition hover:bg-slate-200">
            View all
          </Link>
        </div>
        <div className="marquee-container mt-8 overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x">
          <div className="marquee-track flex gap-5">
            {partnerStores.map((store) => (
              <div key={store.id} className="min-w-[280px] flex-shrink-0 scroll-snap-align-center">
                <PartnerStoreCard store={store} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}