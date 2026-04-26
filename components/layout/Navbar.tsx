'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/images/logo.jpeg"
              alt="Afro Queens"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-script text-lg leading-none" style={{ color: scrolled ? '#1A1A1A' : '#FDFAF6' }}>
              Afro Queens
            </p>
            <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: scrolled ? '#E07B39' : '#D4A843' }}>
              La couronne naturelle
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-sans transition-colors duration-300 hover:text-orange-DEFAULT ${
                scrolled ? 'text-noir-DEFAULT' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2"
            aria-label="Panier"
          >
            <ShoppingBag
              size={22}
              className={`transition-colors ${scrolled ? 'text-noir-DEFAULT' : 'text-white'}`}
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-DEFAULT text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-sans font-600 cart-bounce">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen
              ? <X size={22} className={scrolled ? 'text-noir-DEFAULT' : 'text-white'} />
              : <Menu size={22} className={scrolled ? 'text-noir-DEFAULT' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-noir-DEFAULT py-6 px-8 flex flex-col gap-5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm tracking-widest uppercase font-sans hover:text-ocre-DEFAULT transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
