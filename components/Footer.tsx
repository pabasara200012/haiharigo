import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-8 xl:grid xl:min-w-0 xl:grid-cols-4 xl:gap-12">
          <div className="w-[280px] shrink-0 space-y-4 xl:w-auto xl:min-w-0">
            <Link href="/" className="inline-flex max-w-full items-center gap-3 text-slate-900">
              <img src="/haiharigo/images/logo.svg" alt="HariහරිGo logo" className="h-10 w-auto" />
            </Link>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#58C13D]">One Call. Any Service.</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                Premium delivery for medicines, groceries, food, parcels, documents, and essentials across the HariහරිGo marketplace network.
              </p>
            </div>
          </div>

          <div className="w-[280px] shrink-0 xl:w-auto xl:min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">Quick Links</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600">
              <li><Link href="/" className="inline-flex transition hover:text-[#0A2F6B]">Home</Link></li>
              <li><Link href="/stores" className="inline-flex transition hover:text-[#0A2F6B]">Stores</Link></li>
              <li><Link href="/services" className="inline-flex transition hover:text-[#0A2F6B]">Services</Link></li>
              <li><Link href="/contact" className="inline-flex transition hover:text-[#0A2F6B]">Contact</Link></li>
            </ul>
          </div>

          <div className="w-[280px] shrink-0 xl:w-auto xl:min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">Services</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600">
              <li>Medicine Delivery</li>
              <li>Grocery Delivery</li>
              <li>Document Delivery</li>
              <li>Parcel Delivery</li>
            </ul>
          </div>

          <div className="w-[280px] shrink-0 xl:w-auto xl:min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0A2F6B]">Contact</h3>
            <ul className="mt-4 space-y-5 text-sm text-slate-600">
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Phone</p>
                <a href="tel:+94707173730" className="mt-1 block font-medium text-slate-700 transition hover:text-[#0A2F6B]">
                  +94 70 717 3730
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">WhatsApp</p>
                <a
                  href="https://wa.me/94707173730?text=Hi%20Hari%E0%B7%84%E0%B6%BB%E0%B7%92Go,%20I%20need%20delivery%20support."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full max-w-[180px] items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb45a]"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Email</p>
                <a href="mailto:support@hariharigo.com" className="mt-1 block font-medium text-slate-700 transition hover:text-[#0A2F6B]">
                  support@hariharigo.com
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Service Area</p>
                <p className="mt-1 font-medium text-slate-700">Beliatta and surrounding areas</p>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 HariහරිGo</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}