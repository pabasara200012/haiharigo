import type { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { primaryPhone } from '../../lib/partnerStores';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact HariහරිGo for delivery support, partner enquiries, and store onboarding.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header variant="internal" />
      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">Contact</p>
            <h1 className="section-title">Talk to HariහරිGo</h1>
            <p className="max-w-xl text-slate-600">Use this page for customer support, partner questions, and general marketplace enquiries.</p>
            <div className="space-y-4 rounded-[2rem] bg-slate-50 p-6 shadow-soft">
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a href="tel:+94707173730" className="text-lg font-semibold text-[#0A2F6B]">{primaryPhone}</a>
              </div>
              <div>
                <p className="text-sm text-slate-500">WhatsApp</p>
                <a href="https://wa.me/94707173730?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20support." target="_blank" rel="noreferrer" className="text-lg font-semibold text-[#58C13D]">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-5 rounded-[2rem] bg-[#0A2F6B] p-8 text-white shadow-soft">
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-200">Name</label>
              <input className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-200">Phone or WhatsApp</label>
              <input className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" placeholder="+94 ..." />
            </div>
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-200">Message</label>
              <textarea rows={4} className="w-full rounded-3xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200 focus:border-[#58C13D] focus:outline-none focus:ring-2 focus:ring-[#58C13D]/30" placeholder="How can we help?" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-[#58C13D] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#4db238]">
              Send request
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}