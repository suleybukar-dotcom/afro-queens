'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const message = encodeURIComponent("Bonjour Afro Queens ! 👑 Je suis intéressée par vos produits capillaires. Pourriez-vous m'aider ?");
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="bg-white shadow-xl rounded-2xl p-4 max-w-xs fade-in border border-green-100">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-sans font-bold text-sm text-[#1A1A1A]">Besoin d&apos;aide ?</p>
              <p className="text-xs text-[#6B6B6B] font-sans mt-1 leading-relaxed">
                Contactez-nous sur WhatsApp — réponse en moins de 2h ! 💚
              </p>
              <p className="text-xs text-[#E07B39] font-sans mt-1 font-bold">{contactInfo.whatsappDisplay}</p>
            </div>
            <button onClick={() => setShowTooltip(false)} className="text-[#6B6B6B] hover:text-[#1A1A1A]">
              <X size={16} />
            </button>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="mt-3 w-full bg-green-500 text-white text-xs font-sans tracking-wide text-center py-2.5 rounded-lg block hover:bg-green-600 transition-colors">
            Démarrer la conversation →
          </a>
        </div>
      )}
      <button onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp" style={{animation:'float 3s ease-in-out infinite'}}>
        <MessageCircle size={26} className="text-white" fill="white" />
      </button>
    </div>
  );
}
