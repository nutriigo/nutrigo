"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Send, Check } from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula envio (em produção, conecte com sua API)
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#8BC34A] hover:text-[#7CB342] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-600 mb-8">
              Tem dúvidas ou sugestões? Estamos aqui para ajudar!
            </p>

            {success ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-green-700">
                  Obrigado pelo contato. Responderemos em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8BC34A] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8BC34A] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8BC34A] focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre o serviço</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="assinatura">Assinatura e pagamentos</option>
                    <option value="sugestao">Sugestão ou feedback</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8BC34A] focus:outline-none transition-colors resize-none"
                    placeholder="Descreva sua dúvida ou sugestão..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* Contato Direto */}
            <div className="bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-3xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                Outras formas de contato
              </h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:contatonutrigo@outlook.com"
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all"
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-sm text-white/80">contatonutrigo@outlook.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Perguntas Frequentes
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#8BC34A] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Como funciona o teste grátis?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Você tem 7 dias de acesso completo. Cancele quando quiser sem custo.
                  </p>
                </div>

                <div className="border-l-4 border-[#8BC34A] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Posso cancelar a qualquer momento?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sim! Cancele direto no app ou entre em contato conosco.
                  </p>
                </div>

                <div className="border-l-4 border-[#8BC34A] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Como funcionam os NutriPoints?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ganhe pontos usando o app e troque por descontos e benefícios.
                  </p>
                </div>

                <div className="border-l-4 border-[#8BC34A] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">
                    Quais formas de pagamento aceitam?
                  </h3>
                  <p className="text-sm text-gray-600">
                    PIX, cartão de crédito e boleto via Kiwify.
                  </p>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">
                ⏰ Horário de Atendimento
              </h3>
              <p className="text-sm text-blue-800">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo: Fechado
              </p>
              <p className="text-xs text-blue-700 mt-3">
                Respondemos em até 24 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
