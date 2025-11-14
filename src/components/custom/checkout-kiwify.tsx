"use client";

import { useState } from "react";
import { Check, Zap, Shield, CreditCard, X } from "lucide-react";

interface CheckoutKiwifyProps {
  planId: string;
  planName: string;
  price: string;
  onClose?: () => void;
}

export default function CheckoutKiwify({ planId, planName, price, onClose }: CheckoutKiwifyProps) {
  const [loading, setLoading] = useState(false);

  // URLs dos produtos Kiwify - ATUALIZADAS
  const kiwifyLinks = {
    mensal: "https://pay.kiwify.com.br/6nvkhR8",
    trimestral: "https://pay.kiwify.com.br/L40Eu1N",
    anual: "https://pay.kiwify.com.br/0Y66Hic"
  };

  const handleCheckout = () => {
    setLoading(true);
    
    // Redireciona para o checkout do Kiwify
    const checkoutUrl = kiwifyLinks[planId as keyof typeof kiwifyLinks];
    
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      alert("Link de checkout não configurado. Configure seus produtos no Kiwify.");
      setLoading(false);
    }
  };

  // Fechar ao clicar no backdrop (fundo escuro)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full my-8 p-6 sm:p-8 lg:p-10 shadow-2xl relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        {/* Botão Fechar - FIXO e sempre visível */}
        {onClose && (
          <button
            onClick={onClose}
            className="sticky top-0 float-right z-20 bg-gray-200 hover:bg-gray-300 rounded-full p-2.5 text-gray-700 hover:text-gray-900 transition-all shadow-md hover:shadow-lg"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8 clear-both">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-full mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Plano {planName}
          </h2>
          <p className="text-gray-600 text-lg">
            Teste grátis por 7 dias • Cancele quando quiser
          </p>
        </div>

        {/* Preço */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 text-center">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-2xl text-gray-600">R$</span>
            <span className="text-5xl font-bold text-gray-900">{price}</span>
            <span className="text-xl text-gray-600">
              {planId === "mensal" ? "/mês" : planId === "trimestral" ? "/3 meses" : "/ano"}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Primeiro pagamento após 7 dias de teste grátis
          </p>
        </div>

        {/* Benefícios */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">O que está incluído:</h3>
          <ul className="space-y-3">
            {[
              "Acesso ilimitado a todas as receitas",
              "Cálculo nutricional automático",
              "Cardápio semanal personalizado",
              "Dicas de nutrição exclusivas",
              "Suporte prioritário",
              "Acesso ao programa NutriPoints"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#8BC34A] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Formas de Pagamento */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-blue-900">Formas de pagamento aceitas:</span>
          </div>
          <p className="text-sm text-blue-800">
            💳 Cartão de Crédito • 🔐 PIX • 📄 Boleto Bancário
          </p>
        </div>

        {/* Segurança */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-6">
          <Shield className="w-4 h-4 text-green-600" />
          <span>Pagamento 100% seguro via Kiwify</span>
        </div>

        {/* Botão de Checkout */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-4 rounded-full font-bold text-lg hover:from-[#7CB342] hover:to-[#689F38] transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Redirecionando...
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              Iniciar Teste Grátis de 7 Dias
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}
