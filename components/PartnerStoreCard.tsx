import Link from 'next/link';
import type { PartnerStore } from '../lib/partnerStores';

type PartnerStoreCardProps = {
  store: PartnerStore;
  variant?: 'compact' | 'full';
};

export function PartnerStoreCard({ store, variant = 'compact' }: PartnerStoreCardProps) {
  return (
    <article className={`rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg ${variant === 'compact' ? 'p-4' : 'p-5 sm:p-6'}`}>
      <div className={`flex gap-4 ${variant === 'full' ? 'flex-col sm:flex-row sm:items-start' : 'items-center'}`}>
        <img src={store.logo} alt={store.name} className={`${variant === 'compact' ? 'h-16 w-16' : 'h-20 w-20'} rounded-3xl object-cover shadow-lg`} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">{store.category}</p>
          <h3 className="mt-1 text-xl font-bold text-slate-900">{store.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{store.description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-600">{store.location}</span>
        <Link href={`/store/${store.slug}`} className="inline-flex items-center rounded-full bg-[#0A2F6B] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0c3478]">
          View Store
        </Link>
      </div>
    </article>
  );
}