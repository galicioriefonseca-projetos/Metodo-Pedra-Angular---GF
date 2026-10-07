import React, { useState } from 'react';
import { FAQS, FAQItem } from '../data/faqs';
import { trackEvent } from '../utils/analytics';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'metodologia', label: 'Metodologia & Conceito' },
    { id: 'canais', label: 'Canais (Google, Insta, Site)' },
    { id: 'planos_pagamento', label: 'Planos & Pagamento' },
    { id: 'rotina', label: 'Rotina & Equipe' },
  ];

  const filteredFaqs =
    selectedCategory === 'todos'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string, question: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      trackEvent('faq_open', { faqId: id, question });
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0B101D] border-t border-white/5 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Transparência Absoluta
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Perguntas Frequentes
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-10">
          Respostas claras e objetivas sobre a metodologia Pedra Angular, canais atendidos, formas de pagamento e rotina de trabalho.
        </p>

        {/* Category Filters (Clean interactive filter buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-400 text-slate-950 font-semibold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-white/10 bg-[#0E1526] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id, faq.question)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center bg-white/5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
