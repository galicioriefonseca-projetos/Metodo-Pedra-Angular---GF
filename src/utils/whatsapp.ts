import { SITE_CONFIG } from '../config/siteConfig';
import { DiagnosticResultData } from '../types/diagnostic';

export type WhatsAppContext =
  | 'hero'
  | 'diagnostic_result'
  | 'methodology'
  | 'pricing_6_months'
  | 'pricing_12_months'
  | 'final_cta';

export function generateWhatsAppLink(
  context: WhatsAppContext,
  resultData?: DiagnosticResultData | null
): string {
  const number = SITE_CONFIG.whatsapp.number.replace(/\D/g, '');

  let message = SITE_CONFIG.whatsapp.defaultGreeting;

  switch (context) {
    case 'hero':
      message = 'Olá! Conheci a metodologia Pedra Angular e gostaria de entender como estruturar os canais e a gestão da minha empresa.';
      break;

    case 'diagnostic_result':
      if (resultData) {
        const primaryPillar = resultData.pillarEvaluations[resultData.primaryOpportunity]?.label || 'ESTRUTURA';
        const companyName = resultData.lead.company || 'minha empresa';
        const leadName = resultData.lead.name ? `Sou ${resultData.lead.name}, da empresa ${companyName}` : `Empresa: ${companyName}`;
        const city = resultData.lead.city ? ` em ${resultData.lead.city}` : '';
        const priority = resultData.prioritizedNeed ? ` Prioridade: ${resultData.prioritizedNeed}.` : '';

        message = `Olá! Realizei o diagnóstico de estrutura da Pedra Angular.\n${leadName}${city}.\nNosso principal ponto identificado de oportunidade/atenção foi em [${primaryPillar}].${priority}\nGostaria de entender como a Galiciori & Fonseca pode nos ajudar a estruturar essa base.`;
      } else {
        message = 'Olá! Concluí o diagnóstico da Pedra Angular e gostaria de conversar sobre a estrutura da minha empresa.';
      }
      break;

    case 'methodology':
      message = 'Olá! Gostaria de entender detalhadamente como funciona a implantação dos 5 pilares da Pedra Angular e do LumiereOS na minha empresa.';
      break;

    case 'pricing_6_months':
      message = 'Olá! Analisei a proposta do Plano de 6 Meses da Pedra Angular (investimento em até 18x de R$ 376,67 no cartão ou 6x no boleto) e gostaria de tirar algumas dúvidas sobre o início da implantação.';
      break;

    case 'pricing_12_months':
      message = 'Olá! Analisei o Plano Recomendado de 12 Meses da Pedra Angular (investimento em até 24x de R$ 429,17 no cartão ou 12x no boleto) e gostaria de agendar uma conversa para estruturar a base da minha empresa com a metodologia completa.';
      break;

    case 'final_cta':
      message = 'Olá! Gostaria de agendar uma conversa estratégica com a Galiciori & Fonseca para avaliar o momento da minha empresa e a implantação da Pedra Angular.';
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}
