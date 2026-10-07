import { DiagnosticQuestion } from '../types/diagnostic';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    category: 'presenca',
    categoryLabel: '01 · Presença Digital',
    title: 'Quando alguém procura sua empresa no Google, o que essa pessoa encontra?',
    subtitle: 'A busca no Google é frequentemente o primeiro ponto de contato quando alguém já tem a intenção de contratar ou comprar.',
    options: [
      {
        id: 'q1_opt1',
        label: 'Meu perfil está muito bem estruturado.',
        scores: { presenca: 4, estrutura: 3 },
      },
      {
        id: 'q1_opt2',
        label: 'Está razoável, mas poderia melhorar.',
        scores: { presenca: 2, estrutura: 2 },
      },
      {
        id: 'q1_opt3',
        label: 'Não sei exatamente.',
        scores: { presenca: 1, estrutura: 1 },
      },
      {
        id: 'q1_opt4',
        label: 'Meu Google praticamente não é trabalhado.',
        scores: { presenca: 0, estrutura: 0 },
      },
    ],
  },
  {
    id: 2,
    category: 'estrutura',
    categoryLabel: '02 · Estrutura e Clareza',
    title: 'Quando um potencial cliente encontra sua empresa, ele consegue entender rapidamente o que você oferece?',
    subtitle: 'Clareza de posicionamento reduz a hesitação e permite que o visitante avance com segurança.',
    options: [
      {
        id: 'q2_opt1',
        label: 'Sim, está muito claro.',
        scores: { estrutura: 4, conversao: 3 },
      },
      {
        id: 'q2_opt2',
        label: 'Mais ou menos.',
        scores: { estrutura: 2, conversao: 2 },
      },
      {
        id: 'q2_opt3',
        label: 'Acho que não.',
        scores: { estrutura: 1, conversao: 1 },
      },
      {
        id: 'q2_opt4',
        label: 'Nunca parei para analisar isso.',
        scores: { estrutura: 1, conversao: 0 },
      },
    ],
  },
  {
    id: 3,
    category: 'estrutura',
    categoryLabel: '03 · Estrutura & Conversão',
    title: 'Sua empresa possui um site que realmente ajuda o cliente a tomar uma decisão?',
    subtitle: 'Um site não deve ser um mero panfleto digital, mas um instrumento ativo de argumentação e direcionamento.',
    options: [
      {
        id: 'q3_opt1',
        label: 'Sim, e ele gera contatos.',
        scores: { estrutura: 4, conversao: 4 },
      },
      {
        id: 'q3_opt2',
        label: 'Tenho, mas quase não mexo nele.',
        scores: { estrutura: 2, conversao: 1 },
      },
      {
        id: 'q3_opt3',
        label: 'Tenho, mas não sei se converte.',
        scores: { estrutura: 2, conversao: 1 },
      },
      {
        id: 'q3_opt4',
        label: 'Não tenho.',
        scores: { estrutura: 0, conversao: 1 },
      },
      {
        id: 'q3_opt5',
        label: 'Nunca considerei importante.',
        scores: { estrutura: 0, conversao: 0 },
      },
    ],
  },
  {
    id: 4,
    category: 'relacionamento',
    categoryLabel: '04 · Relacionamento & Conversão',
    title: 'Seu Instagram ajuda um novo visitante a entender quem você é, o que oferece e como contratar?',
    subtitle: 'O canal social ganha força quando possui caminhos definidos para transformar seguidores em oportunidades reais.',
    options: [
      {
        id: 'q4_opt1',
        label: 'Sim, está muito bem estruturado.',
        scores: { relacionamento: 4, conversao: 3 },
      },
      {
        id: 'q4_opt2',
        label: 'Mais ou menos.',
        scores: { relacionamento: 2, conversao: 2 },
      },
      {
        id: 'q4_opt3',
        label: 'Tenho conteúdo, mas não sei se ele ajuda na conversão.',
        scores: { relacionamento: 3, conversao: 1 },
      },
      {
        id: 'q4_opt4',
        label: 'Eu mesmo cuido dele e nunca pensei nessa integração.',
        scores: { relacionamento: 2, conversao: 1 },
      },
      {
        id: 'q4_opt5',
        label: 'Meu Instagram praticamente não é trabalhado.',
        scores: { relacionamento: 0, conversao: 0 },
      },
    ],
  },
  {
    id: 5,
    category: 'conversao',
    categoryLabel: '05 · Conversão & Atendimento',
    title: 'Quando um cliente entra em contato pelo WhatsApp, existe uma estrutura organizada para transformar esse contato em oportunidade?',
    subtitle: 'A agilidade e o método no primeiro atendimento definem a taxa de fechamento e a percepção de profissionalismo.',
    options: [
      {
        id: 'q5_opt1',
        label: 'Sim, temos um processo definido.',
        scores: { conversao: 4, gestao: 3 },
      },
      {
        id: 'q5_opt2',
        label: 'Mais ou menos.',
        scores: { conversao: 2, gestao: 2 },
      },
      {
        id: 'q5_opt3',
        label: 'Cada pessoa atende de um jeito.',
        scores: { conversao: 1, gestao: 1 },
      },
      {
        id: 'q5_opt4',
        label: 'Eu mesmo faço praticamente tudo.',
        scores: { conversao: 2, gestao: 1 },
      },
      {
        id: 'q5_opt5',
        label: 'Nunca pensei nisso dessa forma.',
        scores: { conversao: 1, gestao: 0 },
      },
    ],
  },
  {
    id: 6,
    category: 'integracao',
    categoryLabel: '06 · Integração dos Canais',
    title: 'Hoje, Google, site, Instagram e WhatsApp trabalham juntos ou cada canal funciona de uma forma?',
    subtitle: 'A fragmentação entre canais faz com que o cliente se sinta confuso entre diferentes versões da mesma empresa.',
    contextNote: 'Ter vários canais não significa necessariamente ter uma estrutura digital.',
    options: [
      {
        id: 'q6_opt1',
        label: 'Eles estão bem integrados.',
        scores: { presenca: 3, estrutura: 3, conversao: 3, relacionamento: 3 },
      },
      {
        id: 'q6_opt2',
        label: 'Alguns estão conectados.',
        scores: { presenca: 2, estrutura: 2, conversao: 2, relacionamento: 2 },
      },
      {
        id: 'q6_opt3',
        label: 'Cada canal funciona praticamente separado.',
        scores: { presenca: 1, estrutura: 1, conversao: 1, relacionamento: 1 },
      },
      {
        id: 'q6_opt4',
        label: 'Não sei dizer.',
        scores: { presenca: 1, estrutura: 1, conversao: 1, relacionamento: 1 },
      },
    ],
  },
  {
    id: 7,
    category: 'gestao',
    categoryLabel: '07 · Gestão & Organização',
    title: 'E a organização da própria empresa? Você consegue acompanhar informações, processos e gestão sem depender de várias ferramentas espalhadas?',
    subtitle: 'Sem uma gestão integrada, o crescimento comercial sobrecarrega a operação interna.',
    options: [
      {
        id: 'q7_opt1',
        label: 'Sim.',
        scores: { gestao: 4 },
      },
      {
        id: 'q7_opt2',
        label: 'Parcialmente.',
        scores: { gestao: 2 },
      },
      {
        id: 'q7_opt3',
        label: 'Tenho informações espalhadas em vários lugares.',
        scores: { gestao: 1 },
      },
      {
        id: 'q7_opt4',
        label: 'Muito do controle ainda é manual.',
        scores: { gestao: 1 },
      },
      {
        id: 'q7_opt5',
        label: 'Hoje isso é uma dificuldade para mim.',
        scores: { gestao: 0 },
      },
    ],
  },
  {
    id: 8,
    category: 'implicacao',
    categoryLabel: '08 · Implicação de Negócio',
    title: 'Se um potencial cliente encontrar sua empresa, mas tiver dificuldade para entender seus serviços, confiar na empresa ou entrar em contato, o que pode acontecer?',
    subtitle: 'Pondere o que ocorre no momento exato em que um cliente interessado encontra uma barreira de compreensão ou contato.',
    options: [
      {
        id: 'q8_opt1',
        label: 'Ele procura outra empresa.',
        scores: { conversao: 0, estrutura: 0 },
        impactFlag: 'high',
      },
      {
        id: 'q8_opt2',
        label: 'Ele demora mais para decidir.',
        scores: { conversao: 1, estrutura: 1 },
        impactFlag: 'medium',
      },
      {
        id: 'q8_opt3',
        label: 'Ele pode desistir.',
        scores: { conversao: 0, estrutura: 0 },
        impactFlag: 'high',
      },
      {
        id: 'q8_opt4',
        label: 'Não sei quanto isso acontece comigo.',
        scores: { conversao: 1, estrutura: 1 },
        impactFlag: 'medium',
      },
      {
        id: 'q8_opt5',
        label: 'Acredito que isso já aconteça.',
        scores: { conversao: 0, estrutura: 0 },
        impactFlag: 'high',
      },
    ],
  },
  {
    id: 9,
    category: 'prioridade',
    categoryLabel: '09 · Visão de Prioridade',
    title: 'Se você pudesse melhorar apenas uma área da sua empresa hoje, qual escolheria?',
    subtitle: 'Entender seu foco principal nos ajuda a calibrar a prioridade inicial de estruturação.',
    options: [
      {
        id: 'q9_opt1',
        label: 'Ser encontrado no Google.',
        scores: { presenca: 1 },
      },
      {
        id: 'q9_opt2',
        label: 'Ter uma presença digital mais profissional.',
        scores: { estrutura: 1 },
      },
      {
        id: 'q9_opt3',
        label: 'Gerar mais contatos.',
        scores: { conversao: 1 },
      },
      {
        id: 'q9_opt4',
        label: 'Organizar o atendimento.',
        scores: { conversao: 1, gestao: 1 },
      },
      {
        id: 'q9_opt5',
        label: 'Organizar a gestão.',
        scores: { gestao: 1 },
      },
      {
        id: 'q9_opt6',
        label: 'Integrar tudo isso.',
        scores: { presenca: 2, estrutura: 2, conversao: 2, relacionamento: 2, gestao: 2 },
      },
    ],
  },
  {
    id: 10,
    category: 'momento',
    categoryLabel: '10 · Momento da Empresa',
    title: 'E quanto você considera importante resolver isso nos próximos meses?',
    subtitle: 'Cada momento da empresa requer um ritmo de implantação adequado para sua equipe e realidade.',
    options: [
      {
        id: 'q10_opt1',
        label: 'É uma prioridade agora.',
        scores: {},
      },
      {
        id: 'q10_opt2',
        label: 'É importante, mas posso esperar.',
        scores: {},
      },
      {
        id: 'q10_opt3',
        label: 'Estou apenas pesquisando.',
        scores: {},
      },
      {
        id: 'q10_opt4',
        label: 'Ainda não sei se preciso disso.',
        scores: {},
      },
    ],
  },
];
