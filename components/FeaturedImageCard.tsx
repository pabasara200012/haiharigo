'use client';

import { useState } from 'react';

export default function FeaturedImageCard() {
  const [imageSrc, setImageSrc] = useState('/hero-extra.png');

  const handleImageError = () => {
    setImageSrc('/baner.png');
  };

  return (
    <div className="w-[240px] lg:w-[320px]">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
        <img
          src={imageSrc}
          alt="Featured extra"
          onError={handleImageError}
          className="h-[240px] w-full object-cover"
        />
        <div className="p-4">
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Featured</p>
          <h4 className="mt-2 text-sm font-semibold text-slate-900">Featured delivery</h4>
          <p className="mt-1 text-xs text-slate-600">Highlighting our top service — tap to contact via WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
