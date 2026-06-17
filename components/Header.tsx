import Link from 'next/link';

type HeaderProps = {
  variant?: 'home' | 'internal';
};

const homeLinks = [
  { href: '#services', label: 'Services' },
  { href: '#partner-stores', label: 'Partner Stores' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#contact', label: 'Contact' },
];

const internalLinks = [
  { href: '/', label: 'Home' },
  { href: '/stores', label: 'Stores' },
  { href: '/services', label: 'Services' },
  { href: '/partner-register', label: 'Partner Register' },
  { href: '/contact', label: 'Contact' },
];

export function Header({ variant = 'home' }: HeaderProps) {
  const links = variant === 'home' ? homeLinks : internalLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto px-3 py-4 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-900 sm:gap-3">
            <img src="/haiharigo/images/logo.svg" alt="HariහරිGo logo" className="h-10 w-auto sm:h-12" />
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href={variant === 'home' ? '#contact' : '/contact'} className="inline-flex items-center justify-center rounded-full bg-[#0A2F6B] px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-[#0c3478] sm:px-5 sm:py-3 sm:text-sm">
              දැන් ඇනවුම් කරන්න
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}