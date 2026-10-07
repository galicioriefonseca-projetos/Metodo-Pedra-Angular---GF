import React from 'react';
import { trackEvent } from '../utils/analytics';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Sparkles, Network } from 'lucide-react';

interface HeroProps {
  onStartDiagnostic: () => void;
  onExploreMethod: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartDiagnostic, onExploreMethod }) => {
  const handleDiagnosticClick = () => {
    trackEvent('cta_hero', { action: 'start_diagnostic' });
    onStartDiagnostic();
  };

  const handleMethodClick = () => {
    trackEvent('cta_method', { action: 'explore_method' });
    onExploreMethod();
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#090D16]">
      {/* Subtle architectural grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient architectural lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[350px] h-[350px] bg-slate-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Argumento e Ação (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Metodologia Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Galiciori & Fonseca · Metodologia Proprietária</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-6">
              Sua empresa está presente no digital.{' '}
              <span className="text-cyan-300 font-bold block sm:inline">
                Mas ela está realmente estruturada para crescer?
              </span>
            </h1>

            {/* Subheadline Reflexiva */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Google, site, Instagram, WhatsApp e gestão não deveriam funcionar como peças isoladas.
              Descubra se sua empresa possui uma estrutura capaz de transformar presença digital em oportunidades.
            </p>

            {/* Ações Primária e Secundária */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={handleDiagnosticClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                <span>Fazer Meu Diagnóstico</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleMethodClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-all cursor-pointer"
              >
                <span>Entender a Pedra Angular</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Microcopy: Sem pills ou badges genéricos, texto limpo com separadores */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span>Diagnóstico rápido</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Gratuito</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Sem compromisso</span>
            </div>
          </div>

          {/* Coluna Direita: Representação Arquitetônica da Estrutura (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl border border-white/10 bg-[#0E1422]/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-black/40">
              
              {/* Background Geometric Grid Accent */}
              <div className="absolute inset-0 bg-dot-pattern opacity-30 rounded-2xl pointer-events-none" />

              {/* Header da Estrutura */}
              <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Arquitetura Integrada
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">5 Dimensões Conectadas</span>
              </div>

              {/* Diagrama Conector Central */}
              <div className="relative my-auto py-4 flex items-center justify-center">
                {/* Linhas Conectoras Radiais */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border border-dashed border-cyan-500/20 rounded-full" />
                  <div className="w-40 h-40 border border-white/10 rounded-full" />
                </div>

                {/* Nó Central: A PEDRA ANGULAR (Fundação) */}
                <div className="relative z-10 text-center p-5 rounded-xl border border-cyan-400/50 bg-[#0B111E] shadow-xl shadow-cyan-950/50 max-w-[190px]">
                  <div className="w-8 h-8 mx-auto mb-2 rounded bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-cyan-400 rotate-45 transform" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Pedra Angular
                  </div>
                  <div className="text-[10px] text-cyan-300/80 mt-0.5 font-medium">
                    Fundação & Estrutura
                  </div>
                </div>

                {/* Nós Periféricos Conectados */}
                {/* 1. Google (Norte) */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#131B2E] border border-white/10 text-[11px] font-medium text-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Google & Maps</span>
                </div>

                {/* 2. Site (Leste) */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#131B2E] border border-white/10 text-[11px] font-medium text-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Site & Decisão</span>
                </div>

                {/* 3. WhatsApp (Sul-Leste) */}
                <div className="absolute -bottom-1 right-8 px-2.5 py-1 rounded bg-[#131B2E] border border-white/10 text-[11px] font-medium text-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>WhatsApp Business</span>
                </div>

                {/* 4. Instagram (Sul-Oeste) */}
                <div className="absolute -bottom-1 left-8 px-2.5 py-1 rounded bg-[#131B2E] border border-white/10 text-[11px] font-medium text-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Instagram</span>
                </div>

                {/* 5. LumiereOS (Oeste) */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#131B2E] border border-white/10 text-[11px] font-medium text-slate-200 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>LumiereOS</span>
                </div>
              </div>

              {/* Mensagem de Síntese no Rodapé do Mockup */}
              <div className="relative border-t border-white/10 pt-3 text-center">
                <p className="text-[11px] text-slate-400 italic">
                  «Não construímos canais isolados. Construímos uma estrutura.»
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
