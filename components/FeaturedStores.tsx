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
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-5 lg:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Partner Stores</p>
            <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">Local shops connected with HariහරිGo</h3>
          </div>
          <Link
            href="/stores"
            className="inline-flex items-center justify-center rounded-full bg-[#0A2F6B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0c3478]"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2">
          <div className="flex gap-6">
            {partnerStores.map((store) => (
            <div key={store.id} className="w-[320px] flex-shrink-0 snap-start">
              <PartnerStoreCard store={store} />
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}