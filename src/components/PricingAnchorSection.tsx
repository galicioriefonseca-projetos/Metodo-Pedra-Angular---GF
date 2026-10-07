import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ArrowRight, Check, TrendingDown, Percent, ShieldCheck } from 'lucide-react';

export const PricingAnchorSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0B101D] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Lógica Comercial & Descontos Progressivos
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-semibold text-center text-white tracking-tight leading-tight mb-4">
          Quanto maior o compromisso, maior a economia.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-12">
          O investimento-base oficial da Pedra Angular é de <strong className="text-white">R$ 1.500,00/mês</strong>.
          Contratos com períodos mais amplos recebem descontos progressivos aplicados diretamente sobre o valor total do contrato.
        </p>

        {/* Régua Visual de Progressão de Desconto (0% -> 15% -> 20% -> 25%) */}
        <div className="rounded-2xl border border-white/10 bg-[#0E1526] p-6 sm:p-8 shadow-xl mb-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-2">
            <div>
              <span className="text-sm font-semibold text-white">Régua Comparativa de Investimento</span>
              <p className="text-xs text-slate-400">Desconto aplicado sobre o valor bruto do período contratado</p>
            </div>
            <div className="text-xs text-cyan-300 font-medium">
              Entrada de R$ 500 deduzida integralmente do contrato
            </div>
          </div>

          {/* Grid dos 4 Estágios da Régua */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* 1. Mensal */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-slate-400">MENSAL</span>
                  <span className="text-[11px] text-slate-400 font-mono">0% OFF</span>
                </div>
                <div className="text-lg font-bold font-mono text-white mb-1">
                  R$ 1.500
                </div>
                <div className="text-[11px] text-slate-400 mb-2">
                  Sem desconto no período
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-300">
                Máxima flexibilidade para começar mês a mês.
              </div>
            </div>

            {/* 2. Trimestral */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-slate-400">TRIMESTRAL</span>
                  <span className="text-[11px] text-cyan-400 font-mono font-semibold">15% OFF</span>
                </div>
                <div className="text-lg font-bold font-mono text-white mb-1">
                  R$ 3.825
                </div>
                <div className="text-[11px] text-slate-400 line-through mb-1">
                  De R$ 4.500
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mb-2">
                  Economia de R$ 675
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-300">
                Para validar a estrutura e primeiros contatos.
              </div>
            </div>

            {/* 3. Semestral (Mais Escolhido) */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col justify-between relative">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-cyan-400 text-slate-950 text-[10px] font-bold uppercase rounded">
                Mais Escolhido
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-cyan-300">SEMESTRAL</span>
                  <span className="text-[11px] text-cyan-300 font-mono font-semibold">20% OFF</span>
                </div>
                <div className="text-lg font-bold font-mono text-white mb-1">
                  R$ 7.200
                </div>
                <div className="text-[11px] text-slate-400 line-through mb-1">
                  De R$ 9.000
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mb-2">
                  Economia de R$ 1.800
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-slate-200">
                Para estruturar, acompanhar e otimizar.
              </div>
            </div>

            {/* 4. Anual (Melhor Custo-Benefício) */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/50 flex flex-col justify-between relative shadow-lg">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-cyan-400 text-slate-950 text-[10px] font-bold uppercase rounded">
                Melhor Custo-Benefício
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-cyan-200">ANUAL</span>
                  <span className="text-[11px] text-emerald-300 font-mono font-bold">25% OFF</span>
                </div>
                <div className="text-lg font-bold font-mono text-white mb-1">
                  R$ 13.500
                </div>
                <div className="text-[11px] text-slate-400 line-through mb-1">
                  De R$ 18.000
                </div>
                <div className="text-[11px] text-emerald-300 font-bold mb-2">
                  Economia de R$ 4.500
                </div>
              </div>
              <div className="pt-3 border-t border-white/5 text-[11px] text-cyan-100">
                Construção, maturação plena e máxima economia.
              </div>
            </div>

          </div>

          {/* Copy Consultiva & Técnica do OU */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="max-w-2xl">
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                «Você prefere manter a flexibilidade de uma contratação mensal ou aproveitar um compromisso maior para economizar até R$ 4.500,00?»
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                A entrada de R$ 500,00 não é custo extra: ela é abatida integralmente do valor final contratado.
              </p>
            </div>
            <div className="shrink-0 text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-2 rounded-lg">
              Parcelamento do saldo em até 18x no cartão
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
