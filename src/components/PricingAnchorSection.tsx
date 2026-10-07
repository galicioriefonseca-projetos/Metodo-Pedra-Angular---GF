import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Layers, ArrowRight, Check, TrendingDown } from 'lucide-react';

export const PricingAnchorSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0B101D] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Ancoragem de Investimento
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-semibold text-center text-white tracking-tight leading-tight mb-4">
          Quanto você investiria estruturando cada parte separadamente?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-12">
          Se sua empresa contratasse fornecedores isolados para cada canal, além do investimento financeiro fragmentado, a responsabilidade de coordenar e integrar tudo recairia sobre você.
        </p>

        {/* Tabela de Comparação de Mercado */}
        <div className="rounded-2xl border border-white/10 bg-[#0E1526] overflow-hidden shadow-xl mb-10">
          
          <div className="p-4 sm:p-6 bg-white/[0.02] border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-sm font-semibold text-white">Componentes Essenciais de Mercado</span>
              <p className="text-xs text-slate-400">Investimento médio de referência para contratação fragmentada em 12 meses</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Investimento Referencial Isolado</span>
              <span className="text-lg font-bold font-mono text-slate-200">R$ 13.460,00</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {SITE_CONFIG.componentsBenchmark.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="max-w-md">
                  <div className="font-semibold text-white text-sm mb-0.5">{item.name}</div>
                  <div className="text-slate-400 leading-normal">{item.scope}</div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                  <span className="text-slate-200 font-mono font-semibold">
                    {item.referenceMonthly ? `R$ ${item.referenceMonthly.toFixed(2).replace('.', ',')}/mês` : 'Incluso'}
                  </span>
                  <span className="text-[11px] text-cyan-400">
                    {item.includedStatus}
                  </span>
                </div>
              </div>
            ))}

            {/* Linha de Total Somado dos Serviços Avulsos */}
            <div className="p-4 sm:p-5 bg-[#0a101d] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <div className="font-bold text-cyan-300 text-sm">Valor Real dos Serviços Avulsos Somados</div>
                <div className="text-slate-400 text-[11px]">
                  Instagram (R$ 550,00) + GMN (R$ 480,00) + Site (R$ 183,33/mês diluído do valor real de R$ 1.100,00)
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                <span className="text-base font-bold font-mono text-cyan-300">
                  R$ 1.213,33/mês
                </span>
                <span className="text-[11px] text-slate-400">
                  Total individual no mercado
                </span>
              </div>
            </div>
          </div>

          {/* Rodapé da Tabela com Ancoragem Mensal Direta */}
          <div className="p-5 sm:p-6 bg-cyan-950/30 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs font-semibold text-cyan-300">
                A metodologia Pedra Angular viabiliza essa estrutura com parcelas facilitadas:
              </div>
              <div className="text-xs text-slate-200 mt-1 space-y-0.5">
                <div>
                  • Plano 12 Meses: até <strong className="text-white font-mono font-bold text-sm">24x de R$ 429,17</strong> no cartão ou <strong className="text-white font-mono font-bold">12x de R$ 858,33</strong> no boleto (após entrada de R$ 500).
                </div>
                <div>
                  • Plano 6 Meses: até <strong className="text-white font-mono font-bold text-sm">18x de R$ 376,67</strong> no cartão ou <strong className="text-white font-mono font-bold">6x de R$ 1.130,00</strong> no boleto (após entrada de R$ 500).
                </div>
              </div>
            </div>
            <div className="text-xs text-emerald-300 font-semibold bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2.5 rounded-lg shrink-0 flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4" />
              <span>Economia de R$ 2.660,00 no plano de 12 meses</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
