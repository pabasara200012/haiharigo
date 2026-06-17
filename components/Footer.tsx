import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="container mx-auto grid gap-4 px-3 text-sm text-slate-500 sm:px-4 lg:grid-cols-[1fr_auto] lg:items-center lg:px-6">
        <div>
          <div className="flex items-center gap-3 text-slate-900">
            <img src="/haiharigo/images/logo.svg" alt="HariහරිGo logo" className="h-8 w-auto" />
            <span className="font-semibold">HariහරිGo</span>
          </div>
          <p className="mt-3 max-w-2xl">Premium delivery for medicines, groceries, food, parcels, documents, and essentials across the HariහරිGo marketplace network.</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Link href="/stores" className="hover:text-slate-900">Stores</Link>
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/partner-register" className="hover:text-slate-900">Partner Register</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
}