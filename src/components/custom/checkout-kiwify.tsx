"use client";

import { useState } from "react";
import { Check, Zap, Shield, CreditCard, X, ChefHat, Clock, Flame } from "lucide-react";
import { getConteudoPorPlano } from "@/lib/receitas-planos";

interface CheckoutKiwifyProps {
  planId: string;
  planName: string;
  price: string;
  onClose?: () => void;
}

export default function CheckoutKiwify({ planId, planName, price, onClose }: CheckoutKiwifyProps) {
  const [loading, setLoading] = useState(false);
  const [showReceitas, setShowReceitas] = useState(false);

  // Obter conteúdo de receitas do plano
  const conteudoPlano = getConteudoPorPlano(planId);

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
      <div className="bg-white rounded-3xl max-w-4xl w-full my-8 p-6 sm:p-8 lg:p-10 shadow-2xl relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
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

        {/* NOVO: Preview de Receitas Exclusivas */}
        {conteudoPlano && (
          <div className="mb-8 bg-gradient-to-br from-[#8BC34A]/10 to-[#7CB342]/10 rounded-2xl p-6 border-2 border-[#8BC34A]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <ChefHat className="w-8 h-8 text-[#8BC34A]" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">
                    {conteudoPlano.emoji} Receitas Exclusivas do Plano {planName}
                  </h3>
                  <p className="text-sm text-gray-600">{conteudoPlano.descricao}</p>
                </div>
              </div>
              <button
                onClick={() => setShowReceitas(!showReceitas)}
                className="text-[#8BC34A] hover:text-[#7CB342] font-semibold text-sm underline"
              >
                {showReceitas ? "Ocultar" : "Ver todas"}
              </button>
            </div>

            {/* Preview das primeiras 2 receitas */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {conteudoPlano.receitas.slice(0, 2).map((receita) => (
                <div key={receita.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={receita.imagemUrl} 
                      alt={receita.titulo}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{receita.titulo}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>{receita.tempoPreparo}</span>
                        <Flame className="w-3 h-3 ml-2" />
                        <span>{receita.calorias} kcal</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{receita.descricao}</p>
                </div>
              ))}
            </div>

            {/* Lista completa de receitas (expansível) */}
            {showReceitas && conteudoPlano.receitas.length > 2 && (
              <div className="space-y-3 pt-4 border-t border-[#8BC34A]/20">
                {conteudoPlano.receitas.slice(2).map((receita) => (
                  <div key={receita.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <img 
                        src={receita.imagemUrl} 
                        alt={receita.titulo}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{receita.titulo}</h4>
                        <p className="text-xs text-gray-600 mb-2">{receita.descricao}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{receita.tempoPreparo}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            <span>{receita.calorias} kcal</span>
                          </div>
                          <span className="bg-[#8BC34A]/20 text-[#8BC34A] px-2 py-0.5 rounded-full font-semibold">
                            {receita.dificuldade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-[#8BC34A]">
                + {conteudoPlano.receitas.length} receitas exclusivas neste plano
              </p>
            </div>
          </div>
        )}

        {/* Benefícios */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4 text-gray-900">O que está incluído:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {conteudoPlano?.beneficiosExtras.map((beneficio, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl">
                <Check className="w-5 h-5 text-[#8BC34A] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{beneficio}</span>
              </div>
            ))}
          </div>
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
