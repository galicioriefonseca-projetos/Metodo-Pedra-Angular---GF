import React, { useState } from 'react';
import { DiagnosticLead } from '../../types/diagnostic';
import { trackEvent } from '../../utils/analytics';
import { ShieldCheck, ArrowRight, Building, User, Phone, MapPin, Mail } from 'lucide-react';

interface DiagnosticLeadCaptureProps {
  onSubmitLead: (lead: DiagnosticLead) => void;
  onBackToQuestions: () => void;
}

export const DiagnosticLeadCapture: React.FC<DiagnosticLeadCaptureProps> = ({
  onSubmitLead,
  onBackToQuestions,
}) => {
  const [formData, setFormData] = useState<DiagnosticLead>({
    name: '',
    company: '',
    whatsapp: '',
    city: '',
    email: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formatador suave para telefone WhatsApp brasileiro: (XX) XXXXX-XXXX
  const handlePhoneChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    let formatted = raw;
    if (raw.length > 2 && raw.length <= 7) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    } else if (raw.length > 7) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    }
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: '' }));
  };

  const handleChange = (field: keyof DiagnosticLead, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Por favor, informe o nome da sua empresa.';
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.whatsapp = 'Informe um WhatsApp com DDD válido (ex: 11 99999-9999).';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Por favor, informe sua cidade e estado.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent('diagnostic_lead_submit', {
      company: formData.company,
      city: formData.city,
    });

    // Submissão imediata fluida
    setTimeout(() => {
      onSubmitLead(formData);
    }, 300);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Header do Formulário de Entrega */}
      <div className="text-center mb-8">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-2">
          Seu diagnóstico está pronto.
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Com base nas suas respostas, identificamos os principais pontos de atenção e oportunidades de estruturação da sua empresa.
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Seu Nome <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Ex: Carlos Mendes"
              className={`w-full pl-10 pr-4 py-3 bg-[#101728] rounded-lg border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.name ? 'border-rose-500/70' : 'border-white/10 focus:border-cyan-400'
              }`}
            />
          </div>
          {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
        </div>

        {/* Empresa */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Nome da Empresa <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Building className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Ex: Mendes Soluções"
              className={`w-full pl-10 pr-4 py-3 bg-[#101728] rounded-lg border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                errors.company ? 'border-rose-500/70' : 'border-white/10 focus:border-cyan-400'
              }`}
            />
          </div>
          {errors.company && <p className="text-xs text-rose-400 mt-1">{errors.company}</p>}
        </div>

        {/* Linha dupla: WhatsApp + Cidade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* WhatsApp */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              WhatsApp com DDD <span className="text-cyan-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="(11) 98765-4321"
                className={`w-full pl-10 pr-4 py-3 bg-[#101728] rounded-lg border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.whatsapp ? 'border-rose-500/70' : 'border-white/10 focus:border-cyan-400'
                }`}
              />
            </div>
            {errors.whatsapp && <p className="text-xs text-rose-400 mt-1">{errors.whatsapp}</p>}
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Cidade / Estado <span className="text-cyan-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                placeholder="Ex: Curitiba, PR"
                className={`w-full pl-10 pr-4 py-3 bg-[#101728] rounded-lg border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                  errors.city ? 'border-rose-500/70' : 'border-white/10 focus:border-cyan-400'
                }`}
              />
            </div>
            {errors.city && <p className="text-xs text-rose-400 mt-1">{errors.city}</p>}
          </div>
        </div>

        {/* E-mail (Opcional) */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            E-mail Corporativo <span className="text-slate-500 text-[10px] font-normal">(Opcional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contato@suaempresa.com.br"
              className="w-full pl-10 pr-4 py-3 bg-[#101728] rounded-lg border border-white/10 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Botão de Envio Principal */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] transition-all rounded shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{isSubmitting ? 'Gerando Análise...' : 'Ver Meu Diagnóstico'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Microcopy de privacidade */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 px-1">
          <button
            type="button"
            onClick={onBackToQuestions}
            className="hover:text-slate-300 underline cursor-pointer"
          >
            Revisar perguntas
          </button>
          <span>Seus dados não são compartilhados com terceiros.</span>
        </div>
      </form>
    </div>
  );
};
