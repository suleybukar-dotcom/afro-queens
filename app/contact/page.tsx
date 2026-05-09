'use client';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Bonjour Afro Queens ! 👑 Je souhaite vous contacter pour...')}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Nous écrire</p>
        <h1 className="font-script text-5xl md:text-7xl text-white mb-4">Contact</h1>
        <p className="text-white/60 font-sans text-sm max-w-md mx-auto">Notre équipe est là pour vous accompagner.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-6">Nos coordonnées</p>
            {[
              { icon: <Mail size={20}/>, title: "Email", content: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: <Phone size={20}/>, title: "Téléphone 1", content: contactInfo.phone1, href: `tel:${contactInfo.phone1.replace(/\s/g,'')}` },
              { icon: <Phone size={20}/>, title: "Téléphone 2", content: contactInfo.phone2, href: `tel:${contactInfo.phone2.replace(/\s/g,'')}` },
              { icon: <MapPin size={20}/>, title: "Localisation", content: contactInfo.address, href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F5F0EA] hover:bg-[#E07B39]/5 transition-colors">
                <div className="text-[#E07B39] mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-xs font-sans text-[#9E9E9E] tracking-wide uppercase mb-1">{item.title}</p>
                  {item.href
                    ? <a href={item.href} className="font-sans text-sm text-[#1A1A1A] hover:text-[#E07B39] transition-colors">{item.content}</a>
                    : <p className="font-sans text-sm text-[#1A1A1A]">{item.content}</p>
                  }
                </div>
              </div>
            ))}

            <div className="bg-green-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={24} fill="white"/>
                <span className="font-sans font-bold text-sm">WhatsApp Direct</span>
              </div>
              <p className="text-white/80 text-sm font-sans mb-1">{contactInfo.phone1}</p>
              <p className="text-white/70 text-xs font-sans mb-4">Réponse en moins de 2 heures</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-full bg-white text-green-600 font-sans font-bold text-sm py-3 flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
                <MessageCircle size={18}/> Ouvrir WhatsApp
              </a>
            </div>

            <div className="border border-[#E07B39]/20 p-5">
              <p className="text-xs tracking-[0.2em] uppercase text-[#E07B39] mb-2">Délais de réponse</p>
              <ul className="space-y-2 text-sm font-sans text-[#6B6B6B]">
                <li className="flex items-center gap-2"><span className="text-green-500">●</span> WhatsApp : &lt; 2 heures</li>
                <li className="flex items-center gap-2"><span className="text-[#E07B39]">●</span> Email : 24-48 heures</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-96 text-center gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500"/>
                </div>
                <div>
                  <h3 className="font-script text-3xl text-[#1A1A1A] mb-2">Message envoyé !</h3>
                  <p className="text-sm font-sans text-[#6B6B6B]">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
                <button onClick={() => { setSent(false); setForm({name:'',email:'',subject:'',message:''}); }} className="btn-outline">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[{key:'name',label:'Nom complet',type:'text',req:true},{key:'email',label:'Email',type:'email',req:true}].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">{f.label} {f.req&&'*'}</label>
                      <input type={f.type} required={f.req} value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({...form,[f.key]:e.target.value})}
                        className="w-full border border-gray-200 px-5 py-4 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors"/>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">Sujet</label>
                  <select value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}
                    className="w-full border border-gray-200 px-5 py-4 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors bg-white">
                    <option value="">Choisir un sujet</option>
                    <option value="commande">Suivi de commande</option>
                    <option value="produit">Question produit</option>
                    <option value="retour">Retour / Échange</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">Message *</label>
                  <textarea required rows={8} value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                    className="w-full border border-gray-200 px-5 py-4 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors resize-none"
                    placeholder="Décrivez votre demande..."/>
                </div>
                <button type="submit" disabled={loading}
                  className="btn-primary flex items-center gap-3 w-full md:w-auto justify-center disabled:opacity-60">
                  {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Envoi...</>
                    : <><Send size={16}/>Envoyer le message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
