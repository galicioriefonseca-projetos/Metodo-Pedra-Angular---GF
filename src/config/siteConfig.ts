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

  // Preço-base oficial mensal da Pedra Angular e lógica de descontos progressivos
  baseMonthlyPrice: 1500.0,

  // Comparativo de referência baseado na contratação mensal avulsa (R$ 1.500/mês)
  benchmarkReferenceTotal: 18000.0, // 12 meses x R$ 1.500,00

  // Planos definitivos da metodologia Pedra Angular
  plans: {
    monthly: {
      id: "monthly",
      name: "Pedra Angular — Mensal",
      periodLabel: "Mensal",
      durationMonths: 1,
      badge: "Flexibilidade",
      positioning: "Máxima flexibilidade para começar.",
      basePrice: 1500.0,
      discountPercent: 0,
      savedAmount: 0,
      contractedPrice: 1500.0,
      entryFee: 500.0,
      balance: 1000.0,
      installmentsCount: 4,
      installmentValue: 250.0,
      installmentText: "4x de R$ 250,00 no cartão",
      installmentsDetail: "4 parcelas fixas de R$ 250,00 no cartão para quitação do saldo de R$ 1.000,00.",
      deliverables: [
        "Auditoria e diagnóstico inicial de presença e canais",
        "Configuração emergencial e alinhamento do Perfil da Empresa no Google",
        "Revisão técnica do posicionamento de conversão",
        "Diretrizes iniciais para o WhatsApp Business",
        "Acesso à camada de organização do LumiereOS durante o período",
      ],
    },
    quarterly: {
      id: "quarterly",
      name: "Pedra Angular — Trimestral",
      periodLabel: "Trimestral",
      durationMonths: 3,
      badge: "15% OFF",
      positioning: "Para quem quer implementar a estrutura e acompanhar os primeiros resultados.",
      basePrice: 4500.0, // 3 x 1500
      discountPercent: 15,
      savedAmount: 675.0,
      contractedPrice: 3825.0,
      entryFee: 500.0,
      balance: 3325.0,
      installmentsCount: 9,
      installmentValue: 369.44,
      installmentText: "9x de aproximadamente R$ 369,44 no cartão",
      installmentsDetail: "8 parcelas de R$ 369,44 e 1 parcela final de R$ 369,48 no cartão para quitação exata do saldo de R$ 3.325,00.",
      deliverables: [
        "Auditoria profunda e reestruturação do Google Meu Negócio",
        "Estruturação da jornada e arquitetura de decisão do site",
        "Alinhamento dos pontos de contato e bio estratégica no Instagram",
        "Padronização e catálogo comercial no WhatsApp Business",
        "Implantação dos processos e repositório de diretrizes no LumiereOS",
        "Acompanhamento consultivo durante os 3 meses de validação",
      ],
    },
    semester: {
      id: "semester",
      name: "Pedra Angular — Semestral",
      periodLabel: "Semestral",
      durationMonths: 6,
      badge: "MAIS ESCOLHIDO",
      isPopular: true,
      positioning: "Para quem quer estruturar, acompanhar e otimizar sua presença digital.",
      basePrice: 9000.0, // 6 x 1500
      discountPercent: 20,
      savedAmount: 1800.0,
      contractedPrice: 7200.0,
      entryFee: 500.0,
      balance: 6700.0,
      installmentsCount: 18,
      installmentValue: 372.22,
      installmentText: "18x de aproximadamente R$ 372,22 no cartão",
      installmentsDetail: "17 parcelas de R$ 372,22 e 1 parcela final de R$ 372,26 no cartão para quitação exata do saldo de R$ 6.700,00.",
      deliverables: [
        "Toda a estruturação completa dos 5 pilares da metodologia",
        "Otimização contínua de SEO Local e citações geográficas no Google",
        "Desenvolvimento e sustentação de site institucional veloz e responsivo",
        "Conexão do Instagram à estratégia de geração de contatos comerciais",
        "Padronização e suporte operacional no WhatsApp Business",
        "Camada ativa de gestão e acompanhamento no LumiereOS",
        "Suporte estratégico e acompanhamento durante todo o período de 6 meses",
      ],
    },
    annual: {
      id: "annual",
      name: "Pedra Angular — Anual",
      periodLabel: "Anual",
      durationMonths: 12,
      badge: "MELHOR CUSTO-BENEFÍCIO",
      discountBadge: "25% DE ECONOMIA",
      isRecommended: true,
      positioning: "Para quem quer construir a estrutura, acompanhar sua maturação e obter a maior economia.",
      basePrice: 18000.0, // 12 x 1500
      discountPercent: 25,
      savedAmount: 4500.0,
      contractedPrice: 13500.0,
      entryFee: 500.0,
      balance: 13000.0,
      installmentsCount: 24,
      installmentValue: 541.67,
      installmentText: "24x de aproximadamente R$ 541,67 no cartão",
      installmentsDetail: "23 parcelas de R$ 541,67 e 1 parcela final de R$ 541,59 no cartão para quitação exata do saldo de R$ 13.000,00.",
      deliverables: [
        "Metodologia completa implantada com tempo amplo para maturação dos canais",
        "Tempo estendido para consolidação dos rankings locais prioritários no Google",
        "Refinamentos e testes contínuos dos pontos de conversão da empresa",
        "Acompanhamento aprofundado e documentação de processos no LumiereOS",
        "Relatórios periódicos de saúde e integridade da estrutura digital",
        "Suporte consultivo contínuo e evolução estratégica da estrutura",
        "A maior economia em reais: R$ 4.500,00 de desconto pelo compromisso anual",
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
