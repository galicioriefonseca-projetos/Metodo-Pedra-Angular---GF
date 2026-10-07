import React from 'react';
import { PILLARS } from '../data/pillars';
import { Check, ArrowRight } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section id="pilares" className="relative py-24 bg-[#0B101D] border-t border-white/5 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Arquitetura em 5 Dimensões
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          Os 5 Pilares da Metodologia
        </h2>

        {/* Section Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-2xl mx-auto leading-relaxed mb-16">
          Cada pilar cumpre uma função estratégica insubstituível. Juntos, constroem uma jornada contínua para o seu cliente e para a sua equipe.
        </p>

        {/* Bento Grid / Asymmetric Layout dos Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            // Destaque visual suave para o Pilar 5 (Gestão/LumiereOS) ocupando 2 colunas no desktop ou posição especial
            const isFullSpan = index === 4;

            return (
              <div
                key={pillar.number}
                className={`p-7 rounded-2xl bg-[#0E1526] border border-white/10 flex flex-col justify-between transition-all hover:border-cyan-500/30 ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-r from-[#0E1526] to-[#111A30]' : ''
                }`}
              >
                <div>
                  {/* Editorial Index Number & Name */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      {pillar.number}.
                    </span>
                    <span className="text-xs font-medium text-slate-400 italic">
                      {pillar.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight mb-3">
                    {pillar.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet points de escopo técnico */}
                  <ul className="space-y-2 mb-6">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Outcome */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-semibold text-cyan-300/90">
                    Resultado esperado:
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-normal">
                    {pillar.keyOutcome}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
