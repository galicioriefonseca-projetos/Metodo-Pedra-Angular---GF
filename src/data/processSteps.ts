export interface ProcessStep {
  step: string;
  name: string;
  headline: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    name: 'DIAGNÓSTICO',
    headline: 'Mapeamento profundo da realidade atual',
    description: 'Analisamos como sua empresa se apresenta hoje no Google, site, redes sociais e processos de atendimento.',
  },
  {
    step: '02',
    name: 'PLANEJAMENTO',
    headline: 'Desenho da arquitetura estrutural',
    description: 'Definimos a estratégia de posicionamento, jornada do cliente e cronograma de integração dos cinco pilares.',
  },
  {
    step: '03',
    name: 'IMPLANTAÇÃO',
    headline: 'Construção da base técnica e visual',
    description: 'Estruturação do Perfil no Google, desenvolvimento do site e padronização dos canais de conversão.',
  },
  {
    step: '04',
    name: 'INTEGRAÇÃO',
    headline: 'Conexão dos fluxos e gestão LumiereOS',
    description: 'Unificamos os canais para que operem de modo cooperativo, sustentados pela camada de organização interna.',
  },
  {
    step: '05',
    name: 'EVOLUÇÃO',
    headline: 'Acompanhamento e consolidação de resultados',
    description: 'Monitoramento contínuo de autoridade local, refinamento de pontos de contato e suporte estratégico.',
  },
];
