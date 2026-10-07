import React from 'react';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { ArrowUpRight, MessageSquare, ArrowDown } from 'lucide-react';

interface FinalCTASectionProps {
  onStartDiagnostic: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onStartDiagnostic }) => {
  const whatsappUrl = generateWhatsAppLink('final_cta');

  const handleWhatsAppClick = () => {
    trackEvent('cta_final', { action: 'whatsapp_conversation' });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDiagnosticClick = () => {
    trackEvent('cta_diagnostic', { location: 'final_cta' });
    onStartDiagnostic();
  };

  return (
    <section className="relative py-28 bg-[#090D16] overflow-hidden">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>O Próximo Passo Estratégico</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
          Sua empresa já existe.{' '}
          <span className="text-cyan-300 font-bold block sm:inline">
            Agora ela precisa de uma estrutura à altura.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Primeiro entendemos sua empresa. Depois avaliamos se a Pedra Angular realmente faz sentido para o seu momento.
        </p>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quero Estruturar Minha Empresa</span>
          </button>

          <button
            onClick={handleDiagnosticClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all cursor-pointer"
          >
            <span>Fazer Meu Diagnóstico Primeiro</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Microcopy */}
        <div className="text-xs text-slate-400 font-medium">
          Conversa consultiva direta · Análise prévia sem pressão comercial
        </div>

      </div>
    </section>
  );
};
