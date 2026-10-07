import React from 'react';

interface DiagnosticProgressProps {
  currentStep: number; // 1 to 10
  totalSteps: number;
  categoryLabel: string;
}

export const DiagnosticProgress: React.FC<DiagnosticProgressProps> = ({
  currentStep,
  totalSteps,
  categoryLabel,
}) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full mb-8">
      {/* Top Labels */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5 font-medium">
        <span className="text-cyan-400 font-semibold tracking-wide uppercase">
          {categoryLabel}
        </span>
        <div className="flex items-center gap-1.5 tabular-nums">
          <span className="text-white font-semibold">Pergunta {currentStep}</span>
          <span className="text-slate-600">de</span>
          <span>{totalSteps}</span>
        </div>
      </div>

      {/* Progress Track */}
      <div
        className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progresso do diagnóstico: ${percentage}%`}
      >
        <div
          className="h-full bg-cyan-400 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
