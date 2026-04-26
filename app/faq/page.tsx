'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/data';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gris-warm pt-32 pb-20 text-center">
        <p className="section-subtitle mb-4">Centre d&apos;aide</p>
        <h1 className="font-script text-5xl md:text-7xl text-noir-DEFAULT mb-4">
          Questions fréquentes
        </h1>
        <p className="text-sm font-sans text-gris-DEFAULT max-w-md mx-auto">
          Retrouvez les réponses à vos questions les plus fréquentes. Nous sommes là pour vous aider.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-20">
        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className={`border transition-all duration-300 ${openIndex === index ? 'border-orange-DEFAULT bg-orange-DEFAULT/2' : 'border-gray-200 bg-white'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span className="font-sans text-sm font-600 text-noir-DEFAULT leading-relaxed pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-colors ${openIndex === index ? 'bg-orange-DEFAULT text-white' : 'bg-gray-100 text-gris-DEFAULT'}`}>
                  {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60' : 'max-h-0'}`}>
                <div className="px-6 pb-6">
                  <div className="w-8 h-0.5 bg-orange-DEFAULT mb-4" />
                  <p className="font-sans text-sm text-gris-DEFAULT leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center bg-noir-DEFAULT text-white p-12">
          <span className="text-3xl mb-4 block">♛</span>
          <h3 className="font-script text-3xl text-white mb-3">Vous n&apos;avez pas trouvé votre réponse ?</h3>
          <p className="text-white/60 font-sans text-sm mb-8 max-w-md mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions personnalisées. N&apos;hésitez pas à nous contacter directement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Nous contacter
            </Link>
            <a
              href={`https://wa.me/33700000000`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 text-xs font-sans tracking-widest uppercase hover:bg-green-600 transition-colors"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
