/**
 * Configuração Central — Pedra Angular / Galiciori & Fonseca Estratégia Digital
 * Todos os dados vitais estão centralizados aqui para facilitar manutenção ética e consistente.
 */

export const SITE_CONFIG = {
  company: {
    legalName: "Galiciori & Fonseca Estratégia Digital",
    shortName: "Galiciori & Fonseca",
    methodology: "Pedra Angular",
    tagline: "Antes de crescer no digital, construa uma base para sustentar esse crescimento.",
    coreConcept: "Não construímos canais isolados. Construímos uma estrutura.",
    location: "São Paulo, SP — Atendimento Brasil",
    cnpjPlaceholder: "Galiciori & Fonseca Estratégia Digital",
  },
  
  // Configure o WhatsApp oficial da empresa aqui (somente números com código do país e DDD)
  // Caso permaneça "CONFIGURE_AQUI", o sistema utiliza um fallback seguro avisando o usuário
  whatsapp: {
    number: "5511999999999", // Altere para o número real quando disponível
    defaultGreeting: "Olá! Gostaria de conversar sobre a estruturação da minha empresa com a metodologia Pedra Angular.",
  },

  // Ancoragem e valores reais dos componentes individuais de mercado vs metodologia integrada
  componentsBenchmark: [
    {
      name: "Instagram Estrutural",
      scope: "Posicionamento, destaques estratégicos, alinhamento visual e fluxo para contato",
      referenceMonthly: 550,
      referenceTotal12M: 6600,
      includedStatus: "Estruturação contínua",
    },
    {
      name: "Google Meu Negócio (GMN / SEO Local)",
      scope: "Perfil de Empresa otimizado, citações locais, relevância geográfica e reputação",
      referenceMonthly: 480,
      referenceTotal12M: 5760,
      includedStatus: "Estruturação contínua",
    },
    {
      name: "Site Institucional & Estrutura de Decisão",
      scope: "Página de alta velocidade (valor real de R$ 1.100,00 diluído nos meses)",
      referenceMonthly: 183.33, // R$ 1.100 / 6 meses = R$ 183,33/mês
      referenceTotal12M: 1100, // Investimento único de mercado de referência
      includedStatus: "Desenvolvimento e sustentação",
    },
    {
      name: "WhatsApp Business & Jornada de Atendimento",
      scope: "Catálogo, respostas ágeis, fluxos de qualificação e padronização",
      referenceMonthly: null,
      referenceTotal12M: 0,
      includedStatus: "Incluso no ecossistema",
    },
    {
      name: "LumiereOS (Camada de Gestão & Organização)",
      scope: "Ambiente centralizado de processos, acompanhamento e visão unificada",
      referenceMonthly: null,
      referenceTotal12M: 0,
      includedStatus: "Incluso no ecossistema",
    },
  ],

  // Soma mensal dos serviços avulsos: 550 (Instagram) + 480 (GMN) + 183,33 (Site diluído) = R$ 1.213,33/mês
  standaloneMonthlySum: 1213.33,

  // Total de referência de mercado para 12 meses: 480*12 (5.760) + 550*12 (6.600) + 1.100 = 13.460
  benchmarkReferenceTotal: 13460,

  // Planos da metodologia Pedra Angular
  plans: {
    sixMonths: {
      name: "Pedra Angular — 6 Meses",
      durationMonths: 6,
      badge: "Estruturação Essencial",
      description: "Ideal para empresas que precisam estabelecer a fundação dos canais digitais e padronizar o contato rapidamente.",
      pricing: {
        total: 7279.98,
        entryFee: 500.0,
        balance: 6779.98,
        highlightInstallment: "18x de R$ 376,67",
        installmentPeriod: "no cartão",
        cardDetails: "Em até 18x de aproximadamente R$ 376,67 + taxas da operadora no cartão (com entrada de R$ 500,00)",
        boletoText: "Ou no boleto: 6x de aproximadamente R$ 1.130,00",
        boletoDetails: "Boleto bancário: 5 parcelas de R$ 1.130,00 e 1 parcela final de R$ 1.129,98 para quitação exata do saldo.",
        standaloneRealValue: "R$ 1.213,33/mês",
      },
      deliverables: [
        "Auditoria e diagnóstico inicial de presença e canais",
        "Estruturação e otimização do Perfil da Empresa no Google (SEO Local)",
        "Desenvolvimento do Site Institucional focado em tomada de decisão",
        "Alinhamento de posicionamento e jornada no Instagram",
        "Padronização e organização do WhatsApp Business",
        "Acesso à camada de organização do LumiereOS",
        "Acompanhamento e suporte durante todo o período de 6 meses",
      ],
    },
    twelveMonths: {
      name: "Pedra Angular — 12 Meses",
      durationMonths: 12,
      badge: "RECOMENDADO · MELHOR CUSTO-BENEFÍCIO",
      isRecommended: true,
      description: "Para empresas que querem construir a estrutura com mais tempo para implantação, integração contínua e evolução sustentável.",
      pricing: {
        total: 10800.0,
        entryFee: 500.0,
        balance: 10300.0,
        highlightInstallment: "24x de R$ 429,17",
        installmentPeriod: "no cartão",
        cardDetails: "Em até 24x de aproximadamente R$ 429,17 (ou 18x de R$ 572,22) + taxas da operadora no cartão (com entrada de R$ 500,00)",
        boletoText: "Ou no boleto: 12x de aproximadamente R$ 858,33",
        boletoDetails: "Boleto bancário: 11 parcelas de R$ 858,33 e 1 parcela final de R$ 858,37 para quitação exata do saldo.",
        standaloneRealValue: "R$ 1.213,33/mês avulso",
      },
      savings: {
        benchmarkTotal: 13460.0,
        savedAmount: 2660.0,
        percentage: "19,76%",
      },
      deliverables: [
        "Toda a estruturação completa dos canais (Google, Site, Instagram, WhatsApp)",
        "Implantação e acompanhamento aprofundado no LumiereOS",
        "Tempo estendido para amadurecimento dos rankings locais no Google",
        "Refinamento contínuo dos pontos de contato e conversão",
        "Relatórios periódicos de saúde e integridade da estrutura digital",
        "Suporte consultivo contínuo e evolução estratégica da estrutura",
        "Economia real de R$ 2.660,00 em relação à contratação fragmentada",
      ],
    },
  },

  analytics: {
    enableConsoleLogging: true,
    gaMeasurementId: "", // Preencha quando configurado pelo cliente
    gtmContainerId: "", // Preencha quando configurado pelo cliente
    metaPixelId: "", // Preencha quando configurado pelo cliente
  },
};
