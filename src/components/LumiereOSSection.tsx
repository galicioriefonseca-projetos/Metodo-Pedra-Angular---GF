import React from 'react';
import { LayoutDashboard, CheckCircle2, ShieldCheck, FileText, Activity, Layers } from 'lucide-react';

export const LumiereOSSection: React.FC = () => {
  return (
    <section id="lumiereos" className="relative py-24 bg-[#090D16] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Kicker */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Camada de Gestão & Sustentação
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-white tracking-tight leading-tight mb-6">
          A presença digital é apenas uma parte da estrutura.
        </h2>

        {/* Section Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          Enquanto seus canais digitais ajudam sua empresa a ser encontrada, compreendida e contatada,
          o LumiereOS representa a camada de organização e gestão dentro do ecossistema Pedra Angular.
        </p>

        {/* Visual Conceptual Dashboard Mockup */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0E1526] p-6 sm:p-8 shadow-2xl overflow-hidden mb-12">
          
          {/* Conceptual Notice Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-semibold text-white tracking-tight">
                  LumiereOS · Painel da Metodologia
                </span>
                <span className="text-xs text-slate-400 block sm:inline sm:ml-2">
                  Visão Unificada da Operação
                </span>
              </div>
            </div>

            {/* Disclaimer obrigatório explícito */}
            <span className="text-[11px] text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded">
              Representação conceitual de acompanhamento
            </span>
          </div>

          {/* Conceptual Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            
            {/* Card 1: Saúde da Base Digital */}
            <div className="p-4 rounded-xl bg-[#121B2F] border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  Integridade dos Canais
                </span>
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Google Meu Negócio</span>
                  <span className="text-emerald-400 text-[11px]">Sincronizado</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Site Institucional</span>
                  <span className="text-emerald-400 text-[11px]">Alta Velocidade</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>WhatsApp Business</span>
                  <span className="text-emerald-400 text-[11px]">Processo Ativo</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Instagram</span>
                  <span className="text-cyan-400 text-[11px]">Integrado ao Fluxo</span>
                </div>
              </div>
            </div>

            {/* Card 2: Fluxo de Atendimento */}
            <div className="p-4 rounded-xl bg-[#121B2F] border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  Padronização de Atendimento
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Diretrizes de resposta ágil e catálogo de serviços organizados para que a equipe atenda com padrão uniforme.
              </p>
              <div className="text-[11px] text-cyan-300">
                Rotina documentada · Sem improviso
              </div>
            </div>

            {/* Card 3: Central de Diretrizes */}
            <div className="p-4 rounded-xl bg-[#121B2F] border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">
                  Repositório da Empresa
                </span>
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Acessos, modelos de mensagens e parâmetros do negócio reunidos em um único local seguro.
              </p>
              <div className="text-[11px] text-cyan-300">
                Autonomia garantida para a liderança
              </div>
            </div>

          </div>

          {/* Footer note inside dashboard */}
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-400 flex items-center justify-between">
            <span>Incluso em todos os planos da metodologia Pedra Angular.</span>
            <span className="text-slate-300 font-medium">Sem custo de licença adicional.</span>
          </div>

        </div>

        {/* 3 Pilares conceituais do LumiereOS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Centralização</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Elimina o retrabalho de procurar senhas, diretrizes e relatórios espalhados em dezenas de pastas ou conversas antigas.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Clareza Operacional</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Permite que os gestores compreendam exatamente onde estão as oportunidades e como cada canal contribui para o negócio.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Continuidade</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mesmo que colaboradores mudem, os processos da sua empresa permanecem documentados e estruturados.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
