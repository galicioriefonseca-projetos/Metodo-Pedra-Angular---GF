import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackEvent } from '../utils/analytics';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onStartDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    trackEvent('cta_diagnostic', { location: 'header' });
    setMobileMenuOpen(false);
    onStartDiagnostic();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (Action) */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand wordmark (single text element in display font) */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Pedra Angular - Início"
          >
            <div className="w-7 h-7 rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
              <div className="w-2.5 h-2.5 bg-cyan-400 rotate-45 transform transition-transform group-hover:scale-110" />
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Galiciori & Fonseca
            </span>
          </a>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('diagnostico')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => handleNavClick('metodologia')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Metodologia
            </button>
            <button
              onClick={() => handleNavClick('pilares')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              5 Pilares
            </button>
            <button
              onClick={() => handleNavClick('lumiereos')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              LumiereOS
            </button>
            <button
              onClick={() => handleNavClick('planos')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Investimento
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              Fazer Diagnóstico
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('diagnostico')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              Diagnóstico Interativo
            </button>
            <button
              onClick={() => handleNavClick('metodologia')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              Metodologia Pedra Angular
            </button>
            <button
              onClick={() => handleNavClick('pilares')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              Os 5 Pilares
            </button>
            <button
              onClick={() => handleNavClick('lumiereos')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              LumiereOS (Gestão)
            </button>
            <button
              onClick={() => handleNavClick('planos')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              Planos e Investimento
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left text-slate-300 hover:text-white py-2"
            >
              Perguntas Frequentes
            </button>
            <div className="pt-2">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors"
              >
                Fazer Meu Diagnóstico
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
