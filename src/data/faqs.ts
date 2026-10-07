export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'metodologia' | 'canais' | 'planos_pagamento' | 'rotina';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'metodologia',
    question: 'O que é a Pedra Angular?',
    answer:
      'A Pedra Angular é uma metodologia de estruturação digital e organização de processos desenvolvida pela Galiciori & Fonseca. Em vez de tratar Google, site, redes sociais e atendimento como peças desconexas, nós construímos uma fundação única onde todos esses elementos operam integrados com uma camada de gestão (LumiereOS), permitindo que a empresa sustente seu crescimento.',
  },
  {
    id: 'faq-2',
    category: 'metodologia',
    question: 'A Pedra Angular é uma agência de marketing tradicional?',
    answer:
      'Não. Uma agência tradicional frequentemente vende pacotes de posts, artes e anúncios isolados sem olhar para a infraestrutura do negócio. A Pedra Angular atua como consultoria e engenharia de presença digital: nós construímos e organizamos a base estrutural — desde como seu cliente o encontra no Google até o momento em que a oportunidade é atendida e organizada internamente.',
  },
  {
    id: 'faq-3',
    category: 'metodologia',
    question: 'Preciso contratar todos os componentes ou posso escolher partes separadas?',
    answer:
      'Você não contrata partes soltas da Pedra Angular. Você contrata a estrutura. O que muda é o nível de execução que fica sob nossa coordenação técnica ou permanece sob a rotina da sua própria empresa. Se um canal essencial for deixado de fora, a jornada do cliente se quebra e o resultado é comprometido.',
  },
  {
    id: 'faq-4',
    category: 'canais',
    question: 'Já cuido do meu Instagram. Posso continuar cuidando dele?',
    answer:
      'Com certeza. Você não precisa substituir aquilo que já funciona. A empresa pode perfeitamente continuar produzindo seus posts e conteúdos diários. O papel da Pedra Angular é estruturar o posicionamento, os destaques, a biografia e a conexão desse canal com o Google, o site, o WhatsApp e a estratégia de conversão, transformando seguidores em oportunidades comerciais.',
  },
  {
    id: 'faq-5',
    category: 'canais',
    question: 'Já tenho um site. Preciso construir outro?',
    answer:
      'Realizamos uma auditoria técnica no seu site atual. Se ele for rápido, responsivo, seguro e estruturado para orientar a tomada de decisão do visitante, nós o integramos ao ecossistema. Caso o site atual apresente fricções que afastam potenciais clientes, nós o reestruturamos dentro dos padrões da metodologia.',
  },
  {
    id: 'faq-6',
    category: 'canais',
    question: 'Já tenho uma agência ou faço meu marketing sozinho. Como a metodologia se encaixa?',
    answer:
      'A Pedra Angular não concorre com a produção de conteúdo ou mídias que sua equipe já executa. Ela fornece o alicerce onde esses esforços pousam. Muitas vezes, empresas investem tempo e verba em anúncios ou redes, mas perdem oportunidades porque o Google Maps está desatualizado, o site demora a carregar ou o atendimento no WhatsApp não tem processo definido.',
  },
  {
    id: 'faq-7',
    category: 'metodologia',
    question: 'O que é o LumiereOS e ele já está incluso?',
    answer:
      'O LumiereOS representa a camada de organização, acompanhamento e gestão dentro do ecossistema Pedra Angular. Enquanto seus canais externos atraem e informam o cliente, o LumiereOS organiza as informações, processos e registros para que a liderança da empresa tenha clareza sem dispersão de ferramentas. O acesso está plenamente incluso na metodologia sem investimento adicional de licença.',
  },
  {
    id: 'faq-8',
    category: 'metodologia',
    question: 'A Pedra Angular garante clientes, faturamento ou 1º lugar no Google?',
    answer:
      'Não oferecemos promessas irreais de faturamento ou de posições cravadas em mecanismos de busca, pois nenhum profissional sério tem controle sobre os algoritmos do Google ou as decisões individuais de compra. O que garantimos é a aplicação técnica rigorosa de melhores práticas de SEO Local, arquitetura de conversão, velocidade e integração profissional comprovada para maximizar as probabilidades reais de sucesso da sua empresa.',
  },
  {
    id: 'faq-9',
    category: 'planos_pagamento',
    question: 'Qual a diferença prática entre os planos Mensal, Trimestral, Semestral e Anual?',
    answer:
      'O preço-base de referência da Pedra Angular é de R$ 1.500,00 por mês. Quanto maior o compromisso, maior o desconto: o Plano Mensal oferece máxima flexibilidade sem desconto (R$ 1.500); o Trimestral oferece 15% de economia (de R$ 4.500 por R$ 3.825, economizando R$ 675); o Semestral oferece 20% de economia (de R$ 9.000 por R$ 7.200, economizando R$ 1.800 — Mais Escolhido); e o Anual oferece 25% de economia (de R$ 18.000 por R$ 13.500, economizando R$ 4.500 — Melhor Custo-Benefício). Em todos eles, a entrada de R$ 500 abate o valor total.',
  },
  {
    id: 'faq-10',
    category: 'planos_pagamento',
    question: 'Como funciona a entrada de R$ 500,00?',
    answer:
      'A entrada de R$ 500,00 é formalizada no início para cobrir a abertura dos projetos e auditorias iniciais. Ela NÃO é um custo adicional: esse valor é integralmente abatido do valor total contratado. Após a entrada, você quita apenas o saldo restante conforme as condições de parcelamento no cartão.',
  },
  {
    id: 'faq-11',
    category: 'planos_pagamento',
    question: 'Como funciona o parcelamento no cartão de crédito?',
    answer:
      'O saldo restante (após abater a entrada de R$ 500) é parcelado no cartão: o Mensal em 4x de R$ 250,00; o Trimestral em 9x de aproximadamente R$ 369,44; o Semestral em 18x de aproximadamente R$ 372,22; e o Anual em 18x de aproximadamente R$ 722,22. O sistema faz pequenos ajustes de centavos na última parcela para fechar com exatidão o saldo contratado.',
  },
  {
    id: 'faq-12',
    category: 'rotina',
    question: 'Preciso entender de tecnologia para implantar a Pedra Angular?',
    answer:
      'Não. A complexidade técnica, desenvolvimento de código, configurações de DNS, diretrizes de SEO e parametrização do ecossistema são conduzidas pela equipe técnica da Galiciori & Fonseca. Sua empresa participa alinhando os diferenciais do negócio e validando as etapas estratégicas.',
  },
  {
    id: 'faq-13',
    category: 'rotina',
    question: 'O que acontece após o término do período do plano?',
    answer:
      'Toda a estrutura digital implantada (perfis, site, códigos, documentação e processos) pertence integralmente à sua empresa. Você não fica refém. Ao término, a empresa pode optar por renovar o acompanhamento contínuo e evolução com a Galiciori & Fonseca ou manter a estrutura com sua própria equipe interna.',
  },
  {
    id: 'faq-14',
    category: 'rotina',
    question: 'Como começo agora?',
    answer:
      'O primeiro passo é realizar o Diagnóstico Interativo nesta página. Em poucos minutos você responderá perguntas sobre sua presença e gestão. Ao final, analisaremos seus dados e você poderá conversar diretamente conosco pelo WhatsApp com o diagnóstico em mãos.',
  },
];
