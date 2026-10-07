import React from 'react';
import { DiagnosticResultData, PillarKey, PillarStatus } from '../../types/diagnostic';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import { trackEvent } from '../../utils/analytics';
import { openExternalLink } from '../../utils/navigation';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface DiagnosticResultViewProps {
  result: DiagnosticResultData;
  onReset: () => void;
  onExploreMethod: () => void;
}

export const DiagnosticResultView: React.FC<DiagnosticResultViewProps> = ({
  result,
  onReset,
  onExploreMethod,
}) => {
  const whatsappUrl = generateWhatsAppLink('diagnostic_result', result);

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      context: 'diagnostic_result',
      leadCompany: result.lead.company,
      primaryOpportunity: result.primaryOpportunity,
    });
    openExternalLink(whatsappUrl);
  };

  const handleExploreClick = () => {
    trackEvent('cta_method', { location: 'diagnostic_result' });
    onExploreMethod();
  };

  const getStatusBadge = (status: PillarStatus) => {
    switch (status) {
      case 'ESTRUTURADO':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Estruturado
          </span>
        );
      case 'OPORTUNIDADE':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Oportunidade
          </span>
        );
      case 'ATENÇÃO':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Atenção
          </span>
        );
    }
  };

  const keys: PillarKey[] = ['presenca', 'estrutura', 'conversao', 'relacionamento', 'gestao'];

  return (
    <div className="w-full">
      {/* Top Header do Diagnóstico */}
      <div className="border-b border-white/10 pb-6 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          <span>Diagnóstico Concluído</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{result.lead.company}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Seu diagnóstico de estrutura
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-2xl">
          Com base nas suas respostas, mapeamos a maturidade atual dos 5 pilares fundamentais da sua empresa.
        </p>
      </div>

      {/* Grid com os 5 Indicadores Estruturais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {keys.map((key) => {
          const item = result.pillarEvaluations[key];
          const isPrimary = result.primaryOpportunity === key;

          return (
            <div
              key={key}
              className={`p-5 rounded-xl border transition-all ${
                isPrimary
                  ? 'bg-cyan-950/20 border-cyan-400/50 shadow-md shadow-cyan-950/20'
                  : 'bg-[#101728]/70 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {item.label}
                </span>
                {getStatusBadge(item.status)}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {item.analysis}
              </p>

              <div className="pt-3 border-t border-white/5 text-[11px] text-cyan-200/90 leading-normal">
                <span className="font-semibold text-white">Recomendação: </span>
                {item.recommendation}
              </div>
            </div>
          );
        })}

        {/* Card Resumo do Momento */}
        <div className="p-5 rounded-xl border border-white/10 bg-[#101728]/70 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              PRIORIDADE IDENTIFICADA
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              Foco inicial selecionado: <span className="text-cyan-300 font-semibold">{result.prioritizedNeed}</span>.
            </p>
            <p className="text-[11px] text-slate-400">
              Momento de decisão: <span className="text-slate-200">{result.urgencyLevel}</span>.
            </p>
          </div>
          <div className="text-[11px] text-slate-500 pt-3 border-t border-white/5">
            Diagnóstico gerado para {result.lead.name}
          </div>
        </div>
      </div>

      {/* Bloco de Análise Narrativa Personalizada */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#0B101D] border border-cyan-500/20 mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Sparkles className="w-4 h-4" />
          <span>O que suas respostas indicam</span>
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
          {result.summaryNarrative}
        </p>
      </div>

      {/* Need-Payoff & Apresentação da Solução */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#10192D] to-[#0A0E1A] border border-white/10 text-center sm:text-left mb-8">
        <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
          Agora imagine se tudo isso trabalhasse junto.
        </h4>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
          Seu cliente encontra sua empresa no Google, entende rapidamente o que você oferece,
          encontra informações consistentes, conhece melhor seu trabalho no Instagram,
          encontra um caminho claro para falar com você no WhatsApp e, por trás dessa experiência,
          sua empresa possui uma estrutura mais organizada no LumiereOS para acompanhar tudo isso.
        </p>
        <p className="text-sm text-cyan-300 font-medium mb-6">
          É exatamente essa estrutura que a Pedra Angular foi criada para construir.
        </p>

        {/* Ações pós-resultado */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quero Estruturar Minha Empresa</span>
          </button>

          <button
            onClick={handleExploreClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded transition-colors cursor-pointer"
          >
            <span>Conhecer a Metodologia Completa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Botão Refazer Diagnóstico */}
      <div className="text-center pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Refazer diagnóstico com outras respostas</span>
        </button>
      </div>
    </div>
  );
};
