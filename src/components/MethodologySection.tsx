import React from 'react';
import { Network, Layers, GitBranch, ArrowRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" className="relative py-24 bg-[#090D16] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Metodologia Proprietária
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Não construímos canais isolados.{' '}
          <span className="text-cyan-300 font-bold block sm:inline">
            Construímos uma estrutura.
          </span>
        </h2>

        {/* Section Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          A Pedra Angular conecta presença digital, comunicação, conversão e gestão em uma arquitetura pensada para a realidade da empresa.
        </p>

        {/* The 3 Core Architectural Axioms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                A Estrutura como Todo
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Você não contrata partes avulsas da Pedra Angular. Você contrata a estrutura. O que muda é o nível de execução que fica sob nossa coordenação técnica ou sob os cuidados da sua equipe.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                <Network className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Base Antes da Escala
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Antes de investir verba em anúncios ou produzir dezenas de postagens, construa uma base digital capaz de sustentar e converter a atenção gerada.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                <GitBranch className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Organização sem Reféns
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A metodologia organiza os canais e implanta processos documentados no LumiereOS, garantindo que o conhecimento permaneça com a sua empresa.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Architecture Tree Diagram */}
        <div className="relative p-8 sm:p-12 rounded-2xl bg-[#0E1526]/80 border border-white/10 text-center overflow-hidden">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Mapa de Interdependência da Metodologia
          </div>

          {/* Root Foundation */}
          <div className="inline-block p-4 sm:px-8 sm:py-4 rounded-xl bg-[#090D16] border border-cyan-400/60 shadow-lg shadow-cyan-950/40 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              PEDRA ANGULAR · FUNDAÇÃO DO NEGÓCIO
            </span>
          </div>

          {/* Central Stem Line */}
          <div className="w-px h-8 bg-cyan-400/40 mx-auto -mt-8 mb-6" />

          {/* Horizontal Split */}
          <div className="max-w-2xl mx-auto border-t border-cyan-500/30 mb-6 hidden md:block" />

          {/* Three Main Branches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Branch 1 */}
            <div className="p-5 rounded-xl bg-[#121B2F] border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                01 · PRESENÇA & ESTRUTURA
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                Google, Maps & Site Institucional
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Garante que sua empresa seja encontrada nas buscas locais e que o visitante compreenda sua proposta de valor com rapidez.
              </p>
            </div>

            {/* Branch 2 */}
            <div className="p-5 rounded-xl bg-[#121B2F] border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                02 · RELACIONAMENTO & CONVERSÃO
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                Instagram & WhatsApp Business
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Transforma o interesse casual em confiança e direciona o fluxo para um atendimento estruturado e veloz.
              </p>
            </div>

            {/* Branch 3 */}
            <div className="p-5 rounded-xl bg-[#121B2F] border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                03 · GESTÃO & SUSTENTAÇÃO
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                LumiereOS & Rotinas Internas
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Centraliza o acompanhamento de processos, reduz retrabalho e sustenta o volume crescente de oportunidades.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
