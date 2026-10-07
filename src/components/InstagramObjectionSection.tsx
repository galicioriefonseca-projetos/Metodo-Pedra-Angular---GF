import React from 'react';
import { Instagram, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const InstagramObjectionSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0B101D] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Harmonia Operacional
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Você não precisa abandonar aquilo que já funciona.
        </h2>

        {/* Core Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            Já cuida do seu Instagram? Ou tem alguém interno responsável pelas publicações? <strong className="text-white">Ótimo.</strong>
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A Pedra Angular não foi feita para substituir uma rotina que já está funcionando.
            O objetivo é organizar como esse canal se conecta ao restante da jornada do cliente.
          </p>
        </div>

        {/* Visual Workflow: Instagram -> Conexão -> Estrutura */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1526] border border-white/10 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center sm:text-left">
            O Fluxo Integrado da Metodologia
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center items-center">
            {/* 1 */}
            <div className="p-3.5 rounded-xl bg-[#121B2F] border border-white/10">
              <span className="text-xs font-semibold text-pink-400 block mb-1">Instagram</span>
              <span className="text-[11px] text-slate-400">Conteúdo & Confiança</span>
            </div>

            {/* Seta mobile hidden */}
            <div className="hidden sm:flex justify-center text-slate-600">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* 2 */}
            <div className="p-3.5 rounded-xl bg-[#121B2F] border border-white/10">
              <span className="text-xs font-semibold text-blue-400 block mb-1">Google & Site</span>
              <span className="text-[11px] text-slate-400">Validação Técnica</span>
            </div>

            {/* Seta mobile hidden */}
            <div className="hidden sm:flex justify-center text-slate-600">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* 3 */}
            <div className="p-3.5 rounded-xl bg-[#121B2F] border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">WhatsApp & Gestão</span>
              <span className="text-[11px] text-slate-400">Conversão & Organização</span>
            </div>
          </div>

          {/* Citação Axiomática */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <blockquote className="text-sm sm:text-base text-cyan-200/90 font-medium italic">
              «A questão não é quem publica. A questão é se o canal faz parte de uma estrutura.»
            </blockquote>
          </div>
        </div>

        {/* Técnica do "OU" Reflexiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="text-sm font-semibold text-white mb-2">
              Você quer continuar administrando cada canal separadamente...
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              ...gastando tempo alinhando informações desencontradas entre o Google, o feed social e o atendimento no WhatsApp?
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
            <h3 className="text-sm font-semibold text-cyan-300 mb-2">
              ...ou prefere construir uma estrutura em que eles trabalhem juntos?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              ...onde cada canal cumpre seu papel estratégico com clareza, sustentado por processos documentados no LumiereOS.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
