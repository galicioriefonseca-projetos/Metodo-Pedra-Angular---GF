import React from 'react';
import { trackEvent } from '../utils/analytics';
import { ArrowDown, CheckCircle2, Shield, Network, Zap } from 'lucide-react';

interface NeedPayoffSectionProps {
  onExplorePillars: () => void;
}

export const NeedPayoffSection: React.FC<NeedPayoffSectionProps> = ({ onExplorePillars }) => {
  const handleExplore = () => {
    trackEvent('cta_method', { location: 'need_payoff' });
    onExplorePillars();
  };

  return (
    <section className="relative py-24 bg-[#0B101D] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subhead Kicker */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            A Experiência Integrada
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-semibold text-center text-white tracking-tight leading-snug mb-8 max-w-3xl mx-auto">
          Agora imagine se todos os canais da sua empresa trabalhassem juntos.
        </h2>

        {/* Narrative Flow Box */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-[#0E1526] border border-white/10 shadow-xl mb-12">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
            Seu cliente encontra sua empresa no Google, entende rapidamente o que você oferece,
            encontra informações consistentes, consegue conhecer melhor seu trabalho no Instagram,
            encontra um caminho claro para falar com você no WhatsApp e, por trás dessa experiência,
            sua empresa possui uma estrutura mais organizada para acompanhar tudo isso.
          </p>

          <p className="text-base sm:text-lg text-cyan-300 font-medium leading-relaxed">
            É exatamente essa estrutura que a Pedra Angular foi criada para construir.
          </p>
        </div>

        {/* The 4 Journey Steps (Visual Flow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-bold text-cyan-400 mb-1">01 · Descoberta</div>
            <div className="text-sm font-semibold text-white mb-2">Busca Local no Google</div>
            <p className="text-xs text-slate-400 leading-normal">
              O cliente encontra sua empresa com endereço, fotos, horário e avaliações precisas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-bold text-cyan-400 mb-1">02 · Validação</div>
            <div className="text-sm font-semibold text-white mb-2">Site & Instagram</div>
            <p className="text-xs text-slate-400 leading-normal">
              Navega por um site rápido e rede social alinhada que confirmam a credibilidade técnica.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-bold text-cyan-400 mb-1">03 · Ação</div>
            <div className="text-sm font-semibold text-white mb-2">WhatsApp Business</div>
            <p className="text-xs text-slate-400 leading-normal">
              Inicia o contato sem atrito, com recepção profissional e catálogo disponível.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-bold text-cyan-400 mb-1">04 · Sustentação</div>
            <div className="text-sm font-semibold text-white mb-2">Gestão LumiereOS</div>
            <p className="text-xs text-slate-400 leading-normal">
              As oportunidades e processos são registrados sem dependência de anotações soltas.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={handleExplore}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-md cursor-pointer"
          >
            <span>Conhecer os 5 Pilares da Metodologia</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
