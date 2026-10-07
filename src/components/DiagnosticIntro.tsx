import React from 'react';
import { trackEvent } from '../utils/analytics';
import { ArrowDown, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

interface DiagnosticIntroProps {
  onStartDiagnostic: () => void;
}

export const DiagnosticIntro: React.FC<DiagnosticIntroProps> = ({ onStartDiagnostic }) => {
  const handleStart = () => {
    trackEvent('cta_diagnostic', { location: 'transition_intro' });
    onStartDiagnostic();
  };

  return (
    <section className="relative py-20 bg-[#0B101D] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle category kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Autodiagnóstico Estrutural</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-6">
          Antes de procurar uma solução, descubra onde sua empresa realmente está.
        </h2>

        {/* Reflexive copy */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Talvez você já tenha Google, Instagram, site, WhatsApp e várias ferramentas.
          Mas ter presença em vários canais não significa necessariamente ter uma estrutura.
        </p>

        {/* Triad of reflections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-semibold text-slate-400 mb-1">01 · Canais Dispersos</div>
            <p className="text-xs text-slate-300 leading-normal">
              Informações diferentes no perfil do Google, no Instagram e no site causam hesitação no cliente.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-semibold text-slate-400 mb-1">02 · Gargalo de Contato</div>
            <p className="text-xs text-slate-300 leading-normal">
              O cliente demonstra interesse, mas não encontra um caminho rápido e acolhedor para tirar dúvidas.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-semibold text-slate-400 mb-1">03 · Gestão Desconectada</div>
            <p className="text-xs text-slate-300 leading-normal">
              O atendimento e os processos dependem exclusivamente da memória ou de planilhas soltas.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleStart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-md cursor-pointer"
          >
            <span>Começar Meu Diagnóstico</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 text-xs text-slate-500 font-medium">
          Leva apenas 3 minutos · 10 perguntas objetivas · Resultado personalizado imediato
        </div>
      </div>
    </section>
  );
};
