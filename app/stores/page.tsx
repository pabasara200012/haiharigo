import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PartnerStoreCard } from '../../components/PartnerStoreCard';
import { partnerStores, brand } from '../../lib/partnerStores';

export const metadata: Metadata = {
  title: 'Stores',
  description: 'Browse HariහරිGo partner stores and open dynamic marketplace pages for each store.',
};

export default function StoresPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header variant="internal" />
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Stores</p>
          <h1 className="section-title">{brand.name} partner stores</h1>
          <p className="max-w-2xl text-slate-600">These are the stores currently onboarded into the marketplace. Each one has its own SEO-friendly store page.</p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {partnerStores.map((store) => (
            <PartnerStoreCard key={store.id} store={store} variant="full" />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/partner-register" className="btn-primary">
            Register as partner
          </Link>
          <Link href="/" className="btn-secondary">
            Back home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}