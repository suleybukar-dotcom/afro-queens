'use client';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
}

export default function BlogImage({ src, alt }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        style={{ background: 'linear-gradient(135deg, #1A0F00, #2D1A06)' }}>
        <span className="text-4xl text-[#D4A843] opacity-60">♛</span>
        <span className="text-xs font-sans text-[#D4A843]/60 tracking-widest uppercase">Afro Queens</span>
        <span className="text-xs font-sans text-white/30 mt-1">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setError(true)}
      unoptimized={src.endsWith('.svg')}
    />
  );
}
