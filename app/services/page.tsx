import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../lib/partnerStores';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the delivery services supported by HariහරිGo marketplace operations.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header variant="internal" />
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Services</p>
          <h1 className="section-title">Marketplace services, cleaned up</h1>
          <p className="max-w-2xl text-slate-600">The current look and feel stays intact while the services are now split into a reusable data source and component set.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}