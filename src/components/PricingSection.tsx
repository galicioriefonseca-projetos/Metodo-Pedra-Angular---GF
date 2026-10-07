import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { generateWhatsAppLink, WhatsAppContext } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { Check, ArrowRight, ShieldCheck, Sparkles, TrendingDown } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { plans } = SITE_CONFIG;
  const planList = [plans.monthly, plans.quarterly, plans.semester, plans.annual];

  const handleSelectPlan = (plan: typeof plans.monthly | typeof plans.quarterly | typeof plans.semester | typeof plans.annual) => {
    // Analytics conforme especificação
    trackEvent('plan_selected', {
      plan: plan.id,
      plan_value: plan.contractedPrice,
      discount_percentage: plan.discountPercent,
      payment_method: 'card',
      installment_count: plan.installmentsCount,
    });

    const contextMap: Record<string, WhatsAppContext> = {
      monthly: 'pricing_monthly',
      quarterly: 'pricing_quarterly',
      semester: 'pricing_semester',
      annual: 'pricing_annual',
    };

    const url = generateWhatsAppLink(contextMap[plan.id] || 'pricing_annual');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planos" className="relative py-24 bg-[#090D16] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Planos de Investimento
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Escolha o tempo ideal para estruturar sua empresa.
        </h2>

        {/* Section Subtitle com foco em investimento e viabilidade */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-6">
          Preço-base oficial de R$ 1.500,00/mês com descontos progressivos sobre o contrato.
          A entrada de R$ 500,00 abate o valor total e o saldo restante é parcelado no cartão.
        </p>

        {/* Nota de comparação sutil entre trimestral e semestral */}
        <div className="max-w-xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Por praticamente a mesma faixa de parcela (~R$ 369 vs ~R$ 372), você amplia o período para 6 meses.</span>
          </div>
        </div>

        {/* The 4 Plans Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {planList.map((plan) => {
            const isAnnual = plan.id === 'annual';
            const isSemester = plan.id === 'semester';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isAnnual
                    ? 'border-2 border-cyan-400/90 bg-[#0E172B] shadow-2xl shadow-cyan-950/50'
                    : isSemester
                    ? 'border border-cyan-500/50 bg-[#0E1528] shadow-lg shadow-black/40'
                    : 'border border-white/10 bg-[#0E1526]'
                }`}
              >
                {/* Badges superiores de destaque */}
                {isAnnual && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                    <span className="px-3 py-1 bg-cyan-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                      Melhor Custo-Benefício
                    </span>
                    <span className="px-2.5 py-1 bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                      25% de Economia
                    </span>
                  </div>
                )}

                {isSemester && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-cyan-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                      Mais Escolhido
                    </span>
                  </div>
                )}

                <div>
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isAnnual ? 'text-cyan-300' : isSemester ? 'text-cyan-300' : 'text-slate-400'}`}>
                      {plan.periodLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {plan.durationMonths} {plan.durationMonths === 1 ? 'mês' : 'meses'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[32px]">
                    {plan.positioning}
                  </p>

                  {/* BLOCO FINANCEIRO — ORDEM VISUAL RIGOROSA:
                      1. Valor real sem desconto
                      2. Percentual de economia
                      3. Valor final contratado
                      4. Valor economizado em reais
                      5. Entrada
                      6. Parcelamento
                  */}
                  <div className={`p-4 rounded-xl border mb-5 ${
                    isAnnual 
                      ? 'bg-cyan-950/40 border-cyan-400/40 shadow-inner' 
                      : isSemester 
                      ? 'bg-cyan-950/20 border-cyan-500/20' 
                      : 'bg-white/[0.02] border-white/5'
                  }`}>
                    
                    {/* 1. Valor real sem desconto */}
                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-[11px] text-slate-400">Valor de referência:</span>
                      <span className={`text-xs font-mono ${plan.discountPercent > 0 ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                        R$ {plan.basePrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </span>
                    </div>

                    {/* 2 & 3. Percentual de economia e Valor final contratado */}
                    <div className="flex items-baseline justify-between pt-1 mb-1">
                      <div>
                        {plan.discountPercent > 0 ? (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                            {plan.discountPercent}% OFF
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                            Sem desconto
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-extrabold font-mono text-white tracking-tight">
                        R$ {plan.contractedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </div>
                    </div>

                    {/* 4. Valor economizado em reais */}
                    {plan.savedAmount > 0 ? (
                      <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-3 pb-2 border-b border-white/5">
                        <span className="flex items-center gap-1">
                          <TrendingDown className="w-3.5 h-3.5" />
                          Você economiza:
                        </span>
                        <span className="font-mono">
                          R$ {plan.savedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                        </span>
                      </div>
                    ) : (
                      <div className="text-[11px] text-slate-400 mb-3 pb-2 border-b border-white/5 text-right">
                        Valor integral do mês
                      </div>
                    )}

                    {/* 5. Entrada (ABATE do valor contratado) */}
                    <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
                      <span>Entrada (abate o total):</span>
                      <span className="font-semibold text-white font-mono">
                        R$ {plan.entryFee.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </span>
                    </div>

                    {/* Saldo após entrada */}
                    <div className="flex justify-between items-center text-[11px] text-slate-400 mb-3 pb-2 border-b border-white/5">
                      <span>Saldo a parcelar:</span>
                      <span className="font-mono text-slate-200">
                        R$ {plan.balance.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                      </span>
                    </div>

                    {/* 6. Parcelamento do saldo */}
                    <div className="pt-0.5">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 mb-0.5">
                        Condição no Cartão:
                      </div>
                      <div className="text-base font-bold font-mono text-white leading-tight">
                        {plan.installmentsCount}x de aproximadamente R$ {plan.installmentValue.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {plan.installmentsDetail}
                      </div>
                    </div>
                  </div>

                  {/* Entregáveis do Plano */}
                  <div className="mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-2.5">
                      Escopo incluído:
                    </div>
                    <ul className="space-y-2">
                      {plan.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA do Card */}
                <div className="pt-2">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isAnnual
                        ? 'text-slate-950 bg-cyan-400 hover:bg-cyan-300 font-bold shadow-lg shadow-cyan-500/20 active:scale-[0.99]'
                        : isSemester
                        ? 'text-slate-950 bg-cyan-400 hover:bg-cyan-300 font-bold active:scale-[0.99]'
                        : 'text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>Quero Este Plano</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

        </div>

        {/* Rodapé informativo de conformidade e clareza sobre investimento */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Valores fixos e transparentes. A entrada de R$ 500,00 é integralmente deduzida do contrato.
          O saldo restante é quitado conforme a condição de parcelamento indicada.
          Contrato formal com responsabilidades, prazos e entregas delimitadas.
        </div>

      </div>
    </section>
  );
};
