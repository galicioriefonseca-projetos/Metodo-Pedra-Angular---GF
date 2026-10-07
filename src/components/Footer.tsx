import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060911] border-t border-white/10 py-16 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Marca & Conceito */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-400 rotate-45 transform" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                {SITE_CONFIG.company.legalName}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm mb-4">
              {SITE_CONFIG.company.tagline}
            </p>

            <div className="text-[11px] text-slate-500 leading-normal">
              Metodologia Pedra Angular: estruturação da presença digital e processos empresariais integrados (Google + Site + Instagram + WhatsApp + LumiereOS).
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScrollTo('diagnostico')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Diagnóstico Interativo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('metodologia')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Metodologia Pedra Angular
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('pilares')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Os 5 Pilares
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('lumiereos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  LumiereOS (Gestão)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('planos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Planos de Investimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Perguntas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Diretrizes Éticas */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Compromisso Ético
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Não vendemos promessas de resultados milagrosos ou posições arbitrárias no Google. Entregamos engenharia de canais, clareza estratégica e processos organizados para fundamentar o crescimento do seu negócio.
            </p>
            <div className="text-[11px] text-slate-500">
              {SITE_CONFIG.company.location}
            </div>
          </div>

        </div>

        {/* Rodapé inferior com Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.company.legalName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade e Proteção de Dados</span>
            <span aria-hidden="true">·</span>
            <span>Termos de Serviço</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
