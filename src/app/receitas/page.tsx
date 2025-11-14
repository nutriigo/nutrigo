"use client";

import { useState } from "react";
import { 
  Clock, 
  Heart, 
  Star, 
  ChefHat, 
  Flame,
  ArrowLeft,
  Lock,
  Check
} from "lucide-react";
import Link from "next/link";

// Simulação de autenticação (substitua por autenticação real)
const isAuthenticated = false; // Mude para true para testar área de membros

export default function ReceitasPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  // Receitas premium exclusivas para assinantes
  const premiumRecipes = [
    {
      id: 1,
      title: "Bowl de Açaí Proteico",
      time: "5 min",
      calories: 350,
      protein: 15,
      carbs: 45,
      fat: 12,
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
      difficulty: "Fácil",
      ingredients: [
        "200g de polpa de açaí",
        "1 banana congelada",
        "2 colheres de whey protein",
        "Granola",
        "Frutas variadas"
      ],
      instructions: [
        "Bata o açaí com a banana e whey no liquidificador",
        "Despeje em uma tigela",
        "Decore com granola e frutas",
        "Sirva imediatamente"
      ]
    },
    {
      id: 2,
      title: "Salada Caesar com Frango",
      time: "12 min",
      calories: 380,
      protein: 32,
      carbs: 18,
      fat: 15,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
      difficulty: "Médio",
      ingredients: [
        "1 filé de frango grelhado",
        "Alface romana",
        "Molho caesar light",
        "Croutons integrais",
        "Parmesão ralado"
      ],
      instructions: [
        "Grelhe o frango temperado",
        "Corte a alface em tiras",
        "Misture com o molho caesar",
        "Adicione frango, croutons e parmesão"
      ]
    },
    {
      id: 3,
      title: "Tacos de Peixe Light",
      time: "15 min",
      calories: 320,
      protein: 28,
      carbs: 30,
      fat: 10,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      difficulty: "Médio",
      ingredients: [
        "200g de peixe branco",
        "Tortilhas integrais",
        "Repolho roxo ralado",
        "Molho de iogurte",
        "Limão e coentro"
      ],
      instructions: [
        "Tempere e grelhe o peixe",
        "Aqueça as tortilhas",
        "Monte com repolho e peixe",
        "Finalize com molho e limão"
      ]
    },
    {
      id: 4,
      title: "Risoto de Quinoa com Cogumelos",
      time: "20 min",
      calories: 340,
      protein: 12,
      carbs: 48,
      fat: 8,
      image: "https://images.unsplash.com/photo-1476124369491-c4f9c6c6c8a2?w=400&h=300&fit=crop",
      difficulty: "Médio",
      ingredients: [
        "1 xícara de quinoa",
        "200g de cogumelos variados",
        "Caldo de legumes",
        "Alho e cebola",
        "Parmesão light"
      ],
      instructions: [
        "Refogue alho e cebola",
        "Adicione quinoa e caldo aos poucos",
        "Acrescente cogumelos salteados",
        "Finalize com parmesão"
      ]
    },
    {
      id: 5,
      title: "Hambúrguer de Grão-de-Bico",
      time: "18 min",
      calories: 290,
      protein: 14,
      carbs: 38,
      fat: 9,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      difficulty: "Médio",
      ingredients: [
        "1 lata de grão-de-bico",
        "Aveia em flocos",
        "Temperos variados",
        "Pão integral",
        "Vegetais para acompanhar"
      ],
      instructions: [
        "Amasse o grão-de-bico",
        "Misture com aveia e temperos",
        "Modele os hambúrgueres",
        "Grelhe por 4 minutos de cada lado"
      ]
    },
    {
      id: 6,
      title: "Sopa Detox de Legumes",
      time: "25 min",
      calories: 180,
      protein: 6,
      carbs: 28,
      fat: 4,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      difficulty: "Fácil",
      ingredients: [
        "Abóbora",
        "Cenoura",
        "Abobrinha",
        "Caldo de legumes",
        "Gengibre e cúrcuma"
      ],
      instructions: [
        "Corte todos os legumes",
        "Refogue com gengibre",
        "Adicione caldo e cozinhe",
        "Bata no liquidificador"
      ]
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="flex items-center gap-2 text-[#8BC34A] hover:text-[#7CB342] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar para Home</span>
            </Link>
          </div>
        </header>

        {/* Conteúdo Bloqueado */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-full mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Conteúdo Exclusivo para Assinantes
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Acesse centenas de receitas premium, cálculo nutricional automático e muito mais!
            </p>

            {/* Preview das receitas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {premiumRecipes.slice(0, 6).map((recipe) => (
                <div key={recipe.id} className="relative group">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover filter blur-sm group-hover:blur-md transition-all"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>
              ))}
            </div>

            {/* Benefícios */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-xl mb-4 text-gray-900">O que você ganha:</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                {[
                  "Acesso a 500+ receitas saudáveis",
                  "Cálculo nutricional automático",
                  "Cardápio semanal personalizado",
                  "Dicas exclusivas de nutrição",
                  "Programa de fidelidade NutriPoints"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#8BC34A] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link 
              href="/#planos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#7CB342] hover:to-[#689F38] transition-all hover:scale-105 shadow-lg"
            >
              <Star className="w-5 h-5" />
              Começar Teste Grátis de 7 Dias
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              Cancele quando quiser • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Área de membros (quando autenticado)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-[#8BC34A] hover:text-[#7CB342] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#FF9800]" />
              <span className="font-semibold text-gray-900">1,250 NutriPoints</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Receitas Premium
          </h1>
          <p className="text-xl text-gray-600">
            Acesso exclusivo para assinantes NutriGO
          </p>
        </div>

        {/* Grid de Receitas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#8BC34A] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {recipe.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8BC34A] transition-colors">
                  {recipe.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-[#FF9800]" />
                    <span className="font-semibold">{recipe.calories} kcal</span>
                  </div>
                  <div>
                    <span className="font-semibold">{recipe.protein}g</span> proteína
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-3 rounded-full font-semibold hover:from-[#7CB342] hover:to-[#689F38] transition-all flex items-center justify-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Ver Receita Completa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Receita (se selecionada) */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            {/* Conteúdo do modal aqui */}
            <button
              onClick={() => setSelectedRecipe(null)}
              className="float-right text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4">
              {premiumRecipes.find(r => r.id === selectedRecipe)?.title}
            </h2>
            {/* Adicione mais detalhes da receita aqui */}
          </div>
        </div>
      )}
    </div>
  );
}
