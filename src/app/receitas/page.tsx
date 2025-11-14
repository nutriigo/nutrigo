"use client";

import { useState } from "react";
import { conteudoPlanos, Receita } from "@/lib/receitas-planos";
import { Clock, Flame, ChefHat, ArrowLeft, Check, Users } from "lucide-react";
import Link from "next/link";

export default function ReceitasPage() {
  const [planoSelecionado, setPlanoSelecionado] = useState("mensal");
  const [receitaSelecionada, setReceitaSelecionada] = useState<Receita | null>(null);

  const conteudoAtual = conteudoPlanos.find(p => p.planoId === planoSelecionado);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Home
          </Link>
          <div className="flex items-center gap-4">
            <ChefHat className="w-12 h-12" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Receitas Exclusivas</h1>
              <p className="text-white/90">Receitas rápidas, saudáveis e deliciosas para cada plano</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seletor de Planos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Escolha um plano para ver as receitas exclusivas
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {conteudoPlanos.map((plano) => (
              <button
                key={plano.planoId}
                onClick={() => {
                  setPlanoSelecionado(plano.planoId);
                  setReceitaSelecionada(null);
                }}
                className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                  planoSelecionado === plano.planoId
                    ? "bg-gradient-to-br from-[#8BC34A] to-[#7CB342] text-white border-[#8BC34A] shadow-xl"
                    : "bg-white text-gray-900 border-gray-200 hover:border-[#8BC34A]"
                }`}
              >
                <div className="text-5xl mb-3">{plano.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{plano.planoNome}</h3>
                <p className={`text-sm mb-3 ${
                  planoSelecionado === plano.planoId ? "text-white/90" : "text-gray-600"
                }`}>
                  {plano.descricao}
                </p>
                <div className={`text-2xl font-bold ${
                  planoSelecionado === plano.planoId ? "text-white" : "text-[#8BC34A]"
                }`}>
                  {plano.receitas.length} receitas
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Receitas */}
        {conteudoAtual && !receitaSelecionada && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {conteudoAtual.emoji} Receitas do Plano {conteudoAtual.planoNome}
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{conteudoAtual.receitas.length} receitas</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {conteudoAtual.receitas.map((receita) => (
                <div
                  key={receita.id}
                  onClick={() => setReceitaSelecionada(receita)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={receita.imagemUrl}
                      alt={receita.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {receita.dificuldade}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                      {receita.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {receita.descricao}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{receita.tempoPreparo}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#FF9800] font-semibold">
                        <Flame className="w-4 h-4" />
                        <span>{receita.calorias} kcal</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-xs text-center">
                      <div>
                        <p className="text-gray-500">Proteínas</p>
                        <p className="font-bold text-gray-900">{receita.proteinas}g</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Carboidratos</p>
                        <p className="font-bold text-gray-900">{receita.carboidratos}g</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Gorduras</p>
                        <p className="font-bold text-gray-900">{receita.gorduras}g</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA para assinar */}
            <div className="bg-gradient-to-r from-[#8BC34A] to-[#7CB342] rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Acesse todas essas receitas agora!
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Teste grátis por 7 dias e transforme sua alimentação
              </p>
              <Link
                href="/#planos"
                className="inline-block bg-white text-[#8BC34A] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Ver Planos e Assinar
              </Link>
            </div>
          </div>
        )}

        {/* Detalhes da Receita Selecionada */}
        {receitaSelecionada && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <button
              onClick={() => setReceitaSelecionada(null)}
              className="m-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para receitas
            </button>

            <div className="relative h-64 sm:h-96">
              <img
                src={receitaSelecionada.imagemUrl}
                alt={receitaSelecionada.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {receitaSelecionada.titulo}
                </h2>
                <p className="text-white/90 text-lg">{receitaSelecionada.descricao}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Informações Nutricionais */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#FF9800]/10 to-[#F57C00]/10 p-4 rounded-xl text-center border-2 border-[#FF9800]/30">
                  <Flame className="w-6 h-6 text-[#FF9800] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{receitaSelecionada.calorias}</p>
                  <p className="text-sm text-gray-600">Calorias</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center border-2 border-blue-200">
                  <p className="text-2xl font-bold text-gray-900">{receitaSelecionada.proteinas}g</p>
                  <p className="text-sm text-gray-600">Proteínas</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center border-2 border-green-200">
                  <p className="text-2xl font-bold text-gray-900">{receitaSelecionada.carboidratos}g</p>
                  <p className="text-sm text-gray-600">Carboidratos</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl text-center border-2 border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">{receitaSelecionada.gorduras}g</p>
                  <p className="text-sm text-gray-600">Gorduras</p>
                </div>
              </div>

              {/* Tempo e Dificuldade */}
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8BC34A]" />
                  <span className="font-semibold text-gray-900">{receitaSelecionada.tempoPreparo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-[#8BC34A]" />
                  <span className="font-semibold text-gray-900">{receitaSelecionada.dificuldade}</span>
                </div>
                <div className="bg-[#8BC34A]/20 text-[#8BC34A] px-4 py-1 rounded-full font-semibold text-sm">
                  {receitaSelecionada.categoria}
                </div>
              </div>

              {/* Ingredientes */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingredientes</h3>
                <ul className="space-y-3">
                  {receitaSelecionada.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8BC34A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{ingrediente}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modo de Preparo</h3>
                <ol className="space-y-4">
                  {receitaSelecionada.modoPreparo.map((passo, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#8BC34A] to-[#7CB342] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{passo}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Gostou desta receita? Acesse centenas de outras!
                </p>
                <Link
                  href="/#planos"
                  className="inline-block bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
                >
                  Assinar Agora
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
