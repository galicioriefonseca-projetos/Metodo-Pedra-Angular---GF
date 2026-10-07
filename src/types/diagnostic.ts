export type PillarKey = 'presenca' | 'estrutura' | 'conversao' | 'relacionamento' | 'gestao';

export type PillarStatus = 'ESTRUTURADO' | 'OPORTUNIDADE' | 'ATENÇÃO';

export interface QuestionOption {
  id: string;
  label: string;
  scores: Partial<Record<PillarKey, number>>;
  impactFlag?: 'low' | 'medium' | 'high';
}

export interface DiagnosticQuestion {
  id: number;
  category: PillarKey | 'integracao' | 'implicacao' | 'prioridade' | 'momento';
  categoryLabel: string;
  contextNote?: string;
  title: string;
  subtitle?: string;
  options: QuestionOption[];
}

export interface DiagnosticAnswer {
  questionId: number;
  optionId: string;
  optionLabel: string;
  category: string;
}

export interface DiagnosticLead {
  name: string;
  company: string;
  whatsapp: string;
  city: string;
  email?: string;
}

export interface PillarEvaluation {
  key: PillarKey;
  label: string;
  description: string;
  status: PillarStatus;
  score: number; // internal score
  analysis: string;
  recommendation: string;
}

export interface DiagnosticResultData {
  lead: DiagnosticLead;
  answers: DiagnosticAnswer[];
  pillarEvaluations: Record<PillarKey, PillarEvaluation>;
  primaryOpportunity: PillarKey;
  profileArchetype: 'madura' | 'intermediaria' | 'fragmentada';
  summaryNarrative: string;
  prioritizedNeed: string;
  urgencyLevel: string;
  completedAt: string;
}
