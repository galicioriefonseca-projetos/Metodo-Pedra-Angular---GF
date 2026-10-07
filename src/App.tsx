import React, { useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiagnosticIntro } from './components/DiagnosticIntro';
import { DiagnosticContainer } from './components/Diagnostic/DiagnosticContainer';
import { NeedPayoffSection } from './components/NeedPayoffSection';
import { MethodologySection } from './components/MethodologySection';
import { PillarsSection } from './components/PillarsSection';
import { LumiereOSSection } from './components/LumiereOSSection';
import { InstagramObjectionSection } from './components/InstagramObjectionSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingAnchorSection } from './components/PricingAnchorSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleStartDiagnostic = useCallback(() => {
    scrollToSection('diagnostico');
  }, [scrollToSection]);

  const handleExploreMethodology = useCallback(() => {
    scrollToSection('metodologia');
  }, [scrollToSection]);

  const handleExplorePillars = useCallback(() => {
    scrollToSection('pilares');
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Top Header com contrato estrito de 3 zonas */}
      <Header onStartDiagnostic={handleStartDiagnostic} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Dobra */}
        <Hero
          onStartDiagnostic={handleStartDiagnostic}
          onExploreMethod={handleExploreMethodology}
        />

        {/* 2. Bloco de Transição / Convite ao Diagnóstico */}
        <DiagnosticIntro onStartDiagnostic={handleStartDiagnostic} />

        {/* 3. Diagnóstico Interativo (SPIN Selling + Lead Capture + Resultado) */}
        <DiagnosticContainer onExploreMethod={handleExploreMethodology} />

        {/* 4. Momento de Need-Payoff: "Agora imagine se tudo isso trabalhasse junto" */}
        <NeedPayoffSection onExplorePillars={handleExplorePillars} />

        {/* 5. Apresentação da Metodologia Pedra Angular */}
        <MethodologySection />

        {/* 6. Os 5 Pilares Fundamentais */}
        <PillarsSection />

        {/* 7. LumiereOS: Camada de Gestão & Organização */}
        <LumiereOSSection />

        {/* 8. Tratamento da Objeção: "Já tenho Instagram" + Técnica do "OU" */}
        <InstagramObjectionSection />

        {/* 9. Timeline de Processo de Implantação */}
        <ProcessSection />

        {/* 10. Ancoragem de Preço com Componentes Reais */}
        <PricingAnchorSection />

        {/* 11. Planos: 6 Meses e 12 Meses (Recomendado) */}
        <PricingSection />

        {/* 12. Perguntas Frequentes (FAQ Accordion Completo) */}
        <FAQSection />

        {/* 13. CTA Final */}
        <FinalCTASection onStartDiagnostic={handleStartDiagnostic} />
      </main>

      {/* Rodapé Corporativo e Ético */}
      <Footer />
    </div>
  );
}
