import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../../data/diagnosticQuestions';
import {
  DiagnosticAnswer,
  DiagnosticLead,
  DiagnosticResultData,
  QuestionOption,
} from '../../types/diagnostic';
import { calculateDiagnosticResult } from '../../utils/scoring';
import { trackEvent } from '../../utils/analytics';
import { DiagnosticProgress } from './DiagnosticProgress';
import { DiagnosticQuestionCard } from './DiagnosticQuestionCard';
import { DiagnosticLeadCapture } from './DiagnosticLeadCapture';
import { DiagnosticResultView } from './DiagnosticResultView';

interface DiagnosticContainerProps {
  onExploreMethod: () => void;
}

export const DiagnosticContainer: React.FC<DiagnosticContainerProps> = ({ onExploreMethod }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, DiagnosticAnswer>>({});
  const [stepState, setStepState] = useState<'questions' | 'lead_capture' | 'result'>('questions');
  const [calculatedResult, setCalculatedResult] = useState<DiagnosticResultData | null>(null);

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentQuestionIndex];
  const selectedOptionId = answers[currentQuestion?.id]?.optionId;

  // Selecionar uma opção de resposta
  const handleSelectOption = (option: QuestionOption) => {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        optionId: option.id,
        optionLabel: option.label,
        category: currentQuestion.category,
      },
    };
    setAnswers(updatedAnswers);

    trackEvent('diagnostic_question_answer', {
      questionId: currentQuestion.id,
      questionNumber: currentQuestionIndex + 1,
      category: currentQuestion.category,
      optionId: option.id,
    });

    // Avanço automático sutil (260ms) para ritmo de conversa fluido
    setTimeout(() => {
      if (currentQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        trackEvent('diagnostic_lead_start', {});
        setStepState('lead_capture');
      }
    }, 260);
  };

  const handleNext = () => {
    if (currentQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      trackEvent('diagnostic_lead_start', {});
      setStepState('lead_capture');
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Submissão do Lead
  const handleLeadSubmit = (lead: DiagnosticLead) => {
    const answersList = Object.values(answers);
    const result = calculateDiagnosticResult(lead, answersList);
    setCalculatedResult(result);
    setStepState('result');
    trackEvent('diagnostic_complete', {
      primaryOpportunity: result.primaryOpportunity,
      archetype: result.profileArchetype,
      company: lead.company,
    });
  };

  // Reiniciar diagnóstico
  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setCalculatedResult(null);
    setStepState('questions');
    trackEvent('diagnostic_start', { restarted: true });
  };

  return (
    <section id="diagnostico" className="relative py-20 bg-[#090D16] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contêiner principal com borda sutil e fundo estrutural */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0E1422] p-6 sm:p-10 shadow-2xl shadow-black/50">
          
          {stepState === 'questions' && currentQuestion && (
            <div>
              <DiagnosticProgress
                currentStep={currentQuestionIndex + 1}
                totalSteps={DIAGNOSTIC_QUESTIONS.length}
                categoryLabel={currentQuestion.categoryLabel}
              />
              <DiagnosticQuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                onSelectOption={handleSelectOption}
                onNext={handleNext}
                onPrev={handlePrev}
                canGoBack={currentQuestionIndex > 0}
              />
            </div>
          )}

          {stepState === 'lead_capture' && (
            <DiagnosticLeadCapture
              onSubmitLead={handleLeadSubmit}
              onBackToQuestions={() => {
                setCurrentQuestionIndex(DIAGNOSTIC_QUESTIONS.length - 1);
                setStepState('questions');
              }}
            />
          )}

          {stepState === 'result' && calculatedResult && (
            <DiagnosticResultView
              result={calculatedResult}
              onReset={handleReset}
              onExploreMethod={onExploreMethod}
            />
          )}

        </div>
      </div>
    </section>
  );
};
