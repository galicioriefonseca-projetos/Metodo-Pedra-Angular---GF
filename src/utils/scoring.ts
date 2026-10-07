import {
  DiagnosticAnswer,
  DiagnosticLead,
  DiagnosticResultData,
  PillarEvaluation,
  PillarKey,
  PillarStatus,
} from '../types/diagnostic';
import { DIAGNOSTIC_QUESTIONS } from '../data/diagnosticQuestions';

const PILLAR_METADATA: Record<PillarKey, { label: string; description: string }> = {
  presenca: {
    label: 'PRESENÇA',
    description: 'Ser encontrado no momento em que potenciais clientes já buscam sua solução no Google e Maps.',
  },
  estrutura: {
    label: 'ESTRUTURA',
    description: 'Ser compreendido com clareza imediata por meio de um site e posicionamento profissional.',
  },
  conversao: {
    label: 'CONVERSÃO',
    description: 'Facilitar e direcionar o contato via WhatsApp com processos claros de fechamento.',
  },
  relacionamento: {
    label: 'RELACIONAMENTO',
    description: 'Criar conexão e transmitir credibilidade pelo Instagram integrado à jornada de contratação.',
  },
  gestao: {
    label: 'GESTÃO',
    description: 'Organizar os processos internos, informações e acompanhamento sem dispersão de ferramentas.',
  },
};

export function calculateDiagnosticResult(
  lead: DiagnosticLead,
  answers: DiagnosticAnswer[]
): DiagnosticResultData {
  // Inicialização dos acumuladores de pontuação
  const scores: Record<PillarKey, number> = {
    presenca: 0,
    estrutura: 0,
    conversao: 0,
    relacionamento: 0,
    gestao: 0,
  };

  // Pesos máximos teóricos para normalização
  const maxScores: Record<PillarKey, number> = {
    presenca: 7,
    estrutura: 9,
    conversao: 10,
    relacionamento: 7,
    gestao: 8,
  };

  // Mapear respostas e somar scores
  answers.forEach((ans) => {
    const question = DIAGNOSTIC_QUESTIONS.find((q) => q.id === ans.questionId);
    if (!question) return;

    const option = question.options.find((o) => o.id === ans.optionId);
    if (!option) return;

    Object.entries(option.scores).forEach(([key, val]) => {
      const pKey = key as PillarKey;
      if (scores[pKey] !== undefined && typeof val === 'number') {
        scores[pKey] += val;
      }
    });
  });

  // Determinar o status de cada pilar respeitando a regra ética
  const pillarEvaluations = {} as Record<PillarKey, PillarEvaluation>;
  const keys: PillarKey[] = ['presenca', 'estrutura', 'conversao', 'relacionamento', 'gestao'];

  keys.forEach((key) => {
    const rawScore = scores[key];
    const max = maxScores[key];
    const ratio = rawScore / max;

    let status: PillarStatus = 'OPORTUNIDADE';
    let analysis = '';
    let recommendation = '';

    if (ratio >= 0.7) {
      status = 'ESTRUTURADO';
      if (key === 'presenca') {
        analysis = 'Seu posicionamento de busca já possui boas diretrizes de localização e autoridade.';
        recommendation = 'Oportunidade para aprofundar a sincronização deste canal com o site e o atendimento.';
      } else if (key === 'estrutura') {
        analysis = 'A mensagem de apresentação e os canais digitais comunicam seus diferenciais.';
        recommendation = 'Foco em conectar a decisão do cliente a pontos rápidos de ação.';
      } else if (key === 'conversao') {
        analysis = 'Existe um caminho funcional para recepcionar interessados e conduzi-los.';
        recommendation = 'Manter a padronização e documentar os processos no LumiereOS.';
      } else if (key === 'relacionamento') {
        analysis = 'A presença social já transmite seriedade e atrai olhares para a marca.';
        recommendation = 'Garantir que os seguidores encontrem caminhos diretos para orçamento e contato.';
      } else {
        analysis = 'A operação possui bom grau de acompanhamento e controle das rotinas.';
        recommendation = 'Consolidar esses dados na visão integrada para economizar tempo de liderança.';
      }
    } else if (ratio >= 0.4) {
      status = 'OPORTUNIDADE';
      if (key === 'presenca') {
        analysis = 'Sua empresa já possui elementos no Google, mas ainda não domina as pesquisas locais prioritárias.';
        recommendation = 'Estruturar o Perfil de Empresa, categorias e avaliações de modo contínuo.';
      } else if (key === 'estrutura') {
        analysis = 'O cliente consegue conhecer a empresa, porém pode hesitar antes de entender o valor completo.';
        recommendation = 'Construir um site institucional orientado a decisão e arquitetura de argumentos.';
      } else if (key === 'conversao') {
        analysis = 'Há contatos acontecendo, mas parte das oportunidades se dispersa pela falta de processo uniforme.';
        recommendation = 'Organizar mensagens de acolhimento, catálogo e rotina comercial no WhatsApp.';
      } else if (key === 'relacionamento') {
        analysis = 'Você já produz ou mantém o Instagram, mas o canal ainda não gera leads com previsibilidade.';
        recommendation = 'Integrar os links e destaques à estrutura central para transformar audiência em clientes.';
      } else {
        analysis = 'A gestão utiliza ferramentas isoladas ou controles manuais que demandam tempo excessivo.';
        recommendation = 'Unificar informações centrais da empresa na camada de organização do LumiereOS.';
      }
    } else {
      status = 'ATENÇÃO';
      if (key === 'presenca') {
        analysis = 'Quando potenciais clientes pesquisam seus serviços na sua região, sua empresa pode ser invisível.';
        recommendation = 'Implementar com urgência a fundação do Google Meu Negócio e relevância geográfica.';
      } else if (key === 'estrutura') {
        analysis = 'Falta um ponto central onde o visitante encontre respostas seguras e tome a decisão de entrar em contato.';
        recommendation = 'Estruturar o site profissional como base de autoridade da marca.';
      } else if (key === 'conversao') {
        analysis = 'O atendimento depende de respostas improvisadas ou de você fazer tudo sozinho.';
        recommendation = 'Padronizar o canal comercial com scripts, catálogo e direcionamento claro.';
      } else if (key === 'relacionamento') {
        analysis = 'O Instagram está inativo ou isolado do restante das iniciativas da empresa.';
        recommendation = 'Conectar o canal ao restante da jornada sem necessidade de sobrecarga diária.';
      } else {
        analysis = 'Informações dispersas dificultam o acompanhamento de clientes e o controle da operação.';
        recommendation = 'Adotar a metodologia de organização para sustentar o crescimento comercial.';
      }
    }

    pillarEvaluations[key] = {
      key,
      label: PILLAR_METADATA[key].label,
      description: PILLAR_METADATA[key].description,
      status,
      score: rawScore,
      analysis,
      recommendation,
    };
  });

  // Encontrar o principal ponto de atenção/oportunidade
  const sortedPillars = [...keys].sort((a, b) => {
    const ratioA = scores[a] / maxScores[a];
    const ratioB = scores[b] / maxScores[b];
    return ratioA - ratioB;
  });
  const primaryOpportunity = sortedPillars[0];

  // Determinar o arquétipo
  const attentionCount = Object.values(pillarEvaluations).filter((p) => p.status === 'ATENÇÃO').length;
  const estruturadoCount = Object.values(pillarEvaluations).filter((p) => p.status === 'ESTRUTURADO').length;

  let profileArchetype: 'madura' | 'intermediaria' | 'fragmentada' = 'intermediaria';
  let summaryNarrative = '';

  if (estruturadoCount >= 3) {
    profileArchetype = 'madura';
    summaryNarrative =
      'Sua empresa já possui bases importantes consolidadas. O próximo salto está em sincronizar a jornada: garantir que quem encontra seu Google avance para um site veloz, passe pelo Instagram e chegue ao WhatsApp com processos integrados no LumiereOS.';
  } else if (attentionCount >= 3) {
    profileArchetype = 'fragmentada';
    summaryNarrative =
      'Pelas suas respostas, sua empresa possui iniciativas no digital, mas elas operam de maneira isolada. Ter canais desconectados gera dispersão de energia e perda de potenciais clientes. A prioridade é implantar a base estrutural para sustentar o crescimento.';
  } else {
    profileArchetype = 'intermediaria';
    summaryNarrative =
      'Pelas suas respostas, sua principal oportunidade reside na integração entre os canais. Sua empresa já possui presença no digital, mas presença não significa necessariamente estrutura. Quando seus canais trabalham juntos, o retorno de cada esforço se multiplica.';
  }

  // Identificar prioridade respondida na pergunta 9
  const q9Ans = answers.find((a) => a.questionId === 9)?.optionLabel || 'Integrar tudo isso';
  const q10Ans = answers.find((a) => a.questionId === 10)?.optionLabel || 'É uma prioridade agora';

  return {
    lead,
    answers,
    pillarEvaluations,
    primaryOpportunity,
    profileArchetype,
    summaryNarrative,
    prioritizedNeed: q9Ans,
    urgencyLevel: q10Ans,
    completedAt: new Date().toISOString(),
  };
}
