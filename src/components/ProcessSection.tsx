import React from 'react';
import { PROCESS_STEPS } from '../data/processSteps';

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#090D16] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Jornada de Execução
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Como a estrutura é construída na prática.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-16">
          Um método passo a passo desenhado para respeitar o ritmo da sua empresa, garantindo segurança técnica e alinhamento contínuo.
        </p>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-[#0E1526] border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                  {step.step}.
                </div>

                {/* Step Name */}
                <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                  {step.name}
                </h3>

                {/* Headline */}
                <p className="text-xs text-cyan-200/90 font-medium mb-3">
                  {step.headline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                  Etapa {idx + 1} de 5
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
