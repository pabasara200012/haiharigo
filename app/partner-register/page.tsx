import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const metadata: Metadata = {
  title: 'Partner Register',
  description: 'Register your store to join the HariහරිGo marketplace network.',
};

export default function PartnerRegisterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header variant="internal" />
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Partner Register</p>
            <h1 className="section-title">Join the HariහරිGo marketplace</h1>
            <p className="max-w-2xl text-slate-600">Use this page as the entry point for stores that want to join the network. The form is intentionally lightweight for now so the architecture stays easy to extend later.</p>
            <div className="rounded-[2rem] bg-[#0A2F6B] p-6 text-white shadow-soft">
              <h2 className="text-2xl font-bold">What partner pages get</h2>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li>SEO-friendly store URL and metadata</li>
                <li>Dynamic products, hours, and contact details</li>
                <li>WhatsApp and phone buttons ready to use</li>
              </ul>
            </div>
          </div>
          <form className="space-y-5 rounded-[2rem] bg-white p-6 shadow-soft">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Store name</label>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[#0A2F6B] focus:outline-none" placeholder="Your store name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Contact phone</label>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[#0A2F6B] focus:outline-none" placeholder="+94 ..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">WhatsApp number</label>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[#0A2F6B] focus:outline-none" placeholder="+94 ..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Store notes</label>
              <textarea rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:border-[#0A2F6B] focus:outline-none" placeholder="Tell us about your store" />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Submit interest
            </button>
            <Link href="/contact" className="btn-secondary flex w-full justify-center">
              Contact HariහරිGo
            </Link>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}