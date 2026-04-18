'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D85A30]" />
          <span className="text-sm font-medium text-neutral-500">Contact</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Parlons de votre projet.</h1>
        <p className="text-neutral-500 text-lg">Consultation initiale gratuite · Réponse sous 24h.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        <div>
          {sent ? (
            <div className="rounded-3xl p-12 text-center bg-[#FFF4F0] border border-[#F0EDE8]">
              <p className="text-4xl mb-4">✅</p>
              <h2 className="text-2xl font-black mb-2">Reçu !</h2>
              <p className="text-neutral-500">Je vous réponds dans les 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Nom complet', type: 'text', required: true },
                { label: 'Email', type: 'email', required: true },
                { label: 'Téléphone (optionnel)', type: 'tel', required: false },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-neutral-500 mb-1">{f.label}</label>
                  <input
                    type={f.type}
                    required={f.required}
                    className="w-full border border-[#F0EDE8] rounded-xl px-4 py-3 text-[#0A0A0A] focus:outline-none focus:border-[#D85A30] transition-colors bg-white"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-1">Type de projet</label>
                <select className="w-full border border-[#F0EDE8] rounded-xl px-4 py-3 text-[#0A0A0A] focus:outline-none focus:border-[#D85A30] bg-white">
                  <option>Site vitrine</option>
                  <option>E-commerce</option>
                  <option>Refonte</option>
                  <option>Identité visuelle</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-1">Budget estimé</label>
                <select className="w-full border border-[#F0EDE8] rounded-xl px-4 py-3 text-[#0A0A0A] focus:outline-none focus:border-[#D85A30] bg-white">
                  <option>Moins de 500 000 FCFA</option>
                  <option>500 000 – 1 500 000 FCFA</option>
                  <option>1 500 000 – 3 000 000 FCFA</option>
                  <option>3 000 000+ FCFA</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-1">Décrivez votre projet</label>
                <textarea rows={5} required className="w-full border border-[#F0EDE8] rounded-xl px-4 py-3 text-[#0A0A0A] focus:outline-none focus:border-[#D85A30] resize-none bg-white" />
              </div>
              <button type="submit" className="w-full bg-[#D85A30] text-white font-bold py-4 rounded-full hover:bg-[#C14E27] transition-colors">
                Envoyer ma demande
              </button>
            </form>
          )}
        </div>

        <div className="space-y-10 pt-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Email</p>
            <a href="mailto:mr@cedricfotso.com" className="text-lg font-semibold hover:text-[#D85A30] transition-colors">mr@cedricfotso.com</a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Studio</p>
            <a href="https://tambour.cm" className="text-lg font-semibold hover:text-[#D85A30] transition-colors">tambour.cm</a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Réseaux</p>
            <div className="flex gap-4">
              {['LinkedIn', 'Facebook', 'Bento'].map((r) => (
                <a key={r} href="#" className="text-sm font-medium text-neutral-500 hover:text-[#D85A30] transition-colors">{r}</a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-[#FFF4F0] border border-[#F0EDE8]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold">Disponible pour de nouveaux projets</span>
            </div>
            <p className="text-neutral-500 text-sm">Consultation initiale gratuite · Réponse sous 24h</p>
          </div>
        </div>
      </div>
    </main>
  );
}