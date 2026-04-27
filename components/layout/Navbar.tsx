'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Navbar becomes solid after 50px scroll — no hide/show logic
      setScrolled(currentY > 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled || menuOpen ? 'bg-[#1A1A1A] shadow-lg' : 'bg-transparent';
  const textColor = 'text-white';
  const subColor = scrolled || menuOpen ? '#E07B39' : '#D4A843';

  return (
    <>
      {/* Fixed navbar — always visible, never hidden */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg}`}
        style={{ willChange: 'background-color' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/images/logo.jpeg" alt="Afro Queens" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="font-script text-base md:text-lg leading-none text-white">Afro Queens</p>
              <p className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase" style={{ color: subColor }}>
                La couronne naturelle
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase font-sans text-white/80 hover:text-[#E07B39] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsOpen(true)} className="relative p-2" aria-label="Panier">
              <ShoppingBag size={20} className="text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#E07B39] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-sans font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — slides down inside navbar flow, no white band */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#1A1A1A' }}
        >
          <div className="border-t border-white/10 px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white/80 hover:text-[#E07B39] text-sm tracking-widest uppercase font-sans py-3 border-b border-white/5 transition-colors"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-[#E07B39] text-xs">♛</span>
                {link.label}
              </Link>
            ))}
            {/* Cart CTA in mobile menu */}
            <button
              onClick={() => { setIsOpen(true); setMenuOpen(false); }}
              className="mt-4 w-full bg-[#E07B39] text-white text-xs font-sans tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-[#C4622A] transition-colors"
            >
              <ShoppingBag size={14} />
              Mon panier {totalItems > 0 && `(${totalItems})`}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay behind mobile menu — closes it on tap outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: '64px', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
