import React from 'react';
import { DiagnosticQuestion, QuestionOption } from '../../types/diagnostic';
import { ArrowLeft, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface DiagnosticQuestionCardProps {
  question: DiagnosticQuestion;
  selectedOptionId?: string;
  onSelectOption: (option: QuestionOption) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoBack: boolean;
}

export const DiagnosticQuestionCard: React.FC<DiagnosticQuestionCardProps> = ({
  question,
  selectedOptionId,
  onSelectOption,
  onNext,
  onPrev,
  canGoBack,
}) => {
  return (
    <div className="w-full">
      {/* Pergunta Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug mb-3">
        {question.title}
      </h3>

      {/* Subtitle / Contextualização rápida */}
      {question.subtitle && (
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {question.subtitle}
        </p>
      )}

      {/* Opções de Resposta como cards grandes interativos */}
      <div
        className="space-y-3 mb-8"
        role="radiogroup"
        aria-label={question.title}
      >
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelectOption(option)}
              role="radio"
              aria-checked={isSelected}
              className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer group ${
                isSelected
                  ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-950/30'
                  : 'bg-[#101728]/70 hover:bg-[#151E33] border-white/10 hover:border-white/20 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Visual radio indicator */}
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                      : 'border-white/30 group-hover:border-white/50 bg-transparent'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                </div>

                <span className="text-sm sm:text-base font-medium leading-relaxed">
                  {option.label}
                </span>
              </div>

              {isSelected && (
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 hidden sm:block" />
              )}
            </button>
          );
        })}
      </div>

      {/* Context Note (se houver, como na pergunta 6) */}
      {question.contextNote && (
        <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-200/90 text-xs flex items-start gap-2.5 mb-8">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {question.contextNote}
          </p>
        </div>
      )}

      {/* Navigation Controls: Voltar & Continuar */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div>
          {canGoBack ? (
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar pergunta</span>
            </button>
          ) : (
            <div className="text-[11px] text-slate-500">Início do diagnóstico</div>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={onNext}
            disabled={!selectedOptionId}
            className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
              selectedOptionId
                ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-sm'
                : 'bg-white/10 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>Próxima</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
