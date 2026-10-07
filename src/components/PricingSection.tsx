import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { trackEvent } from '../utils/analytics';
import { Check, ArrowRight, ShieldCheck, Sparkles, TrendingDown } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { sixMonths, twelveMonths } = SITE_CONFIG.plans;

  const handleSelectPlan = (planKey: 'sixMonths' | 'twelveMonths') => {
    const context = planKey === 'sixMonths' ? 'pricing_6_months' : 'pricing_12_months';
    trackEvent(context, { planName: planKey });
    const url = generateWhatsAppLink(context);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planos" className="relative py-24 bg-[#090D16] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-16">
          Investimento estruturado de forma acessível e previsível, com entrada facilitada e saldo parcelado no boleto direto ou no cartão.
        </p>

        {/* The 2 Plans Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: Plano 6 Meses */}
          <div className="rounded-2xl border border-white/10 bg-[#0E1526] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {sixMonths.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">6 Meses</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {sixMonths.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {sixMonths.description}
              </p>

              {/* Bloco de Investimento Parcelado em Destaque Absoluto (Foco no Cartão em 18x) */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Investimento Parcelado no Cartão
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Entrada de R$ 500
                  </span>
                </div>
                
                {/* Hero number: 18x de R$ 376,67 */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                    18x de R$ 376,67
                  </span>
                  <span className="text-xs text-slate-400 font-medium">+ taxas</span>
                </div>
                
                <div className="text-xs text-slate-300 mb-3">
                  no cartão de crédito (após entrada de R$ 500,00)
                </div>

                {/* Opção no Boleto */}
                <div className="p-2.5 rounded-lg bg-[#111A2E] border border-white/5 text-xs text-slate-300 flex items-center justify-between mb-3">
                  <span>Ou no boleto bancário direto:</span>
                  <span className="font-semibold text-white font-mono">6x de R$ 1.130,00</span>
                </div>

                {/* Ancoragem com valor real dos serviços avulsos */}
                <div className="p-3 rounded-lg bg-[#081220] border border-white/5 text-xs text-slate-400 mb-3 space-y-1">
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>Valor real dos serviços avulsos:</span>
                    <span className="font-mono text-cyan-300">R$ 1.213,33/mês</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    (Instagram: R$ 550 + GMN: R$ 480 + Site: R$ 183,33/mês diluído de R$ 1.100)
                  </div>
                </div>

                {/* Detalhamento transparente do investimento */}
                <div className="space-y-1.5 text-xs text-slate-300 pt-3 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span>Entrada inicial de abertura:</span>
                    <span className="font-semibold text-white">R$ 500,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saldo restante parcelado:</span>
                    <span className="font-mono text-slate-200">R$ 6.779,98</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 pt-1">
                    <span>Investimento total do plano:</span>
                    <span className="font-mono text-slate-300">R$ 7.279,98</span>
                  </div>
                </div>
              </div>

              {/* Entregáveis */}
              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  O que está contemplado:
                </div>
                <ul className="space-y-2.5">
                  {sixMonths.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Plano 6 Meses */}
            <div>
              <button
                onClick={() => handleSelectPlan('sixMonths')}
                className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Quero Estruturar Minha Empresa (6 Meses)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card: Plano 12 Meses (RECOMENDADO · DESTAQUE MÁXIMO) */}
          <div className="relative rounded-2xl border-2 border-cyan-400/80 bg-[#0E172B] p-7 sm:p-9 flex flex-col justify-between shadow-2xl shadow-cyan-950/40">
            
            {/* Badge Recomendado */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-md">
              Recomendado · Melhor Custo-Benefício
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Estrutura Completa & Maturação
                </span>
                <span className="text-xs text-cyan-300 font-mono">12 Meses</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {twelveMonths.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {twelveMonths.description}
              </p>

              {/* Bloco de Investimento Parcelado em Destaque Absoluto com Ancoragem (Foco no Cartão em 24x) */}
              <div className="p-5 sm:p-6 rounded-xl bg-cyan-950/40 border border-cyan-400/40 mb-6 shadow-inner">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Investimento Parcelado no Cartão
                  </span>
                  <span className="text-[11px] text-cyan-300/90 font-medium">
                    Entrada de R$ 500
                  </span>
                </div>
                
                {/* Hero number: Parcela de 24x em destaque visual máximo */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                    24x de R$ 429,17
                  </span>
                  <span className="text-xs text-cyan-300/80 font-medium">+ taxas</span>
                </div>

                <div className="text-xs text-cyan-200/90 mb-3">
                  no cartão de crédito (ou em até 18x de R$ 572,22 + taxas)
                </div>

                {/* Opção no Boleto */}
                <div className="p-2.5 rounded-lg bg-[#0c182d] border border-cyan-500/20 text-xs text-slate-200 flex items-center justify-between mb-3">
                  <span>Ou no boleto bancário sem juros:</span>
                  <span className="font-semibold text-white font-mono">12x de R$ 858,33</span>
                </div>

                {/* Ancoragem direta vs mercado fragmentado */}
                <div className="mb-4 p-3 rounded-lg bg-[#081220] border border-cyan-500/20 text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-slate-300 font-medium">
                    <span>Valor real dos serviços avulsos somados:</span>
                    <span className="font-mono text-cyan-300">R$ 1.213,33/mês</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    (Instagram: R$ 550 + GMN: R$ 480 + Site: R$ 183,33/mês diluído de R$ 1.100)
                  </div>
                  <div className="flex justify-between items-center text-emerald-300 font-semibold pt-1 border-t border-cyan-500/10">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Economia real no plano integrado:
                    </span>
                    <span className="font-mono">R$ 2.660,00 ({twelveMonths.savings?.percentage})</span>
                  </div>
                </div>

                {/* Detalhamento transparente do investimento */}
                <div className="space-y-1.5 text-xs text-slate-200 pt-3 border-t border-cyan-500/20">
                  <div className="flex justify-between items-center">
                    <span>Entrada inicial de abertura:</span>
                    <span className="font-semibold text-white">R$ 500,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saldo restante parcelado:</span>
                    <span className="font-mono text-slate-100">R$ 10.300,00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 pt-1">
                    <span>Investimento total do plano:</span>
                    <span className="font-mono text-slate-300">R$ 10.800,00</span>
                  </div>
                </div>
              </div>

              {/* Entregáveis */}
              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
                  Tudo do plano de 6 meses somado a:
                </div>
                <ul className="space-y-2.5">
                  {twelveMonths.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Plano 12 Meses */}
            <div>
              <button
                onClick={() => handleSelectPlan('twelveMonths')}
                className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 font-bold"
              >
                <span>Quero Estruturar Minha Empresa (12 Meses)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Rodapé informativo de conformidade e clareza sobre investimento */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Valores fixos, sem custos ocultos ou cobranças surpresa. A entrada de R$ 500,00 é integralmente deduzida do saldo final.
          Contrato formal com responsabilidades, prazos e entregas delimitadas.
        </div>

      </div>
    </section>
  );
};

