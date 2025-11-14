"use client";

import { useState } from "react";
import { 
  Zap, 
  Heart, 
  Clock, 
  Star, 
  Check, 
  Users, 
  Mail, 
  MessageCircle, 
  Play, 
  ArrowRight, 
  Calendar
} from "lucide-react";

export default function NutriGOLandingPage() {
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("anual");

  const handleLeadCapture = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! Enviaremos 5 receitas saudáveis para ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8BC34A] via-[#7CB342] to-[#689F38] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          {/* Logo */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-8 sm:mb-12">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1ac82cf8-667c-4b35-80de-5468cf24c09f.webp" 
              alt="NutriGO Logo" 
              className="h-12 w-auto sm:h-16"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">NutriGO</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Receitas rápidas, nutritivas e prontas em poucos minutos.
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90">
                Acesse receitas exclusivas, calcule nutrientes e monte cardápios com ajuda da IA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-[#8BC34A] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Baixar App
                </button>
                <button className="bg-[#FF9800] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#F57C00] transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Teste grátis por 7 dias
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl border-2 border-white/30">
                  <Clock className="w-16 h-16 text-[#FF9800] mb-4" />
                  <p className="text-2xl font-bold">Receitas em 15 min</p>
                  <p className="text-white/80">Rápido, saudável e delicioso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            Como Funciona
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16">
            Três passos simples para transformar sua alimentação
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-[#8BC34A]" />,
                emoji: "🥕",
                title: "Escolha uma receita rápida",
                description: "Navegue por centenas de receitas saudáveis e rápidas"
              },
              {
                icon: <Zap className="w-16 h-16 sm:w-20 sm:h-20 text-[#FF9800]" />,
                emoji: "⚡",
                title: "Prepare em minutos",
                description: "Receitas práticas com até 15 minutos de preparo"
              },
              {
                icon: <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" />,
                emoji: "❤️",
                title: "Veja o valor nutricional",
                description: "Cálculo automático de calorias, proteínas e nutrientes"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex justify-center mb-4 relative">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 text-4xl sm:text-5xl">{step.emoji}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            Por que escolher o NutriGO?
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16">
            Benefícios que transformam sua rotina alimentar
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-[#8BC34A]" />,
                title: "Receitas rápidas",
                description: "Todas as receitas prontas em até 15 minutos"
              },
              {
                icon: <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />,
                title: "Valor nutricional completo",
                description: "Calorias, proteínas, carboidratos e mais"
              },
              {
                icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF9800]" />,
                title: "IA personalizada",
                description: "Recomendações baseadas no seu perfil e objetivos"
              },
              {
                icon: <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500" />,
                title: "Cardápio semanal",
                description: "Planejamento automático das suas refeições"
              },
              {
                icon: <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500" />,
                title: "Dicas de nutrição",
                description: "Conteúdo exclusivo para sua saúde"
              },
              {
                icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />,
                title: "Comunidade ativa",
                description: "Compartilhe receitas e conquiste pontos"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#8BC34A] transition-all hover:shadow-xl group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
            Escolha seu plano
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16">
            Teste grátis por 7 dias em qualquer plano
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                id: "mensal",
                emoji: "🥗",
                name: "Mensal",
                price: "19,90",
                period: "/mês",
                features: [
                  "Acesso ilimitado a todas as receitas",
                  "Cálculo nutricional completo",
                  "Dicas de nutrição",
                  "Suporte por e-mail"
                ],
                popular: false
              },
              {
                id: "trimestral",
                emoji: "🍳",
                name: "Trimestral",
                price: "49,90",
                period: "/3 meses",
                savings: "15% de economia",
                features: [
                  "Tudo do plano Mensal",
                  "Receitas antecipadas",
                  "Cardápio semanal personalizado",
                  "Prioridade no suporte"
                ],
                popular: false
              },
              {
                id: "anual",
                emoji: "🍱",
                name: "Anual",
                price: "149,90",
                period: "/ano",
                savings: "2 meses grátis",
                features: [
                  "Tudo do plano Trimestral",
                  "Suporte VIP prioritário",
                  "Acesso antecipado a novidades",
                  "Consultoria nutricional mensal"
                ],
                popular: true
              }
            ].map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all ${
                  plan.popular ? "ring-4 ring-[#8BC34A] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF9800] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <span className="text-5xl sm:text-6xl mb-4 block">{plan.emoji}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  {plan.savings && (
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {plan.savings}
                    </span>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-600 text-xl">R$</span>
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#8BC34A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-[#8BC34A] text-white hover:bg-[#7CB342] shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Começar teste grátis
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 sm:mt-12 text-sm sm:text-base">
            💳 Aceitamos PIX, cartão de crédito e boleto • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* NutriPoints */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FF9800] to-[#F57C00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-3xl">
                <Star className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Programa NutriPoints
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Ganhe pontos por usar o app e troque por recompensas incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Como ganhar pontos */}
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-white/30">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8" />
                Ganhe Pontos
              </h3>
              <ul className="space-y-4">
                {[
                  { action: "Login diário", points: "+10 pts" },
                  { action: "Favoritar receita", points: "+5 pts" },
                  { action: "Compartilhar receita", points: "+15 pts" },
                  { action: "Completar teste grátis", points: "+50 pts" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                    <span className="text-base sm:text-lg">{item.action}</span>
                    <span className="font-bold text-lg sm:text-xl bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      {item.points}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recompensas */}
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-white/30">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                <Star className="w-8 h-8" />
                Recompensas
              </h3>
              <ul className="space-y-4">
                {[
                  { reward: "10% de desconto", points: "200 pts" },
                  { reward: "Receita exclusiva premium", points: "500 pts" },
                  { reward: "1 mês de assinatura grátis", points: "1000 pts" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-between bg-white/10 p-4 rounded-xl">
                    <span className="text-base sm:text-lg">{item.reward}</span>
                    <span className="font-bold text-lg sm:text-xl bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                      {item.points}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl mb-6">🏆 Top Nutricionistas da Semana</p>
            <button className="bg-white text-[#FF9800] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
              Ver Ranking Completo
            </button>
          </div>
        </div>
      </section>

      {/* Captura de Leads */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl">
            <Mail className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Receba 5 receitas saudáveis grátis
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Cadastre seu e-mail e comece a transformar sua alimentação hoje mesmo
            </p>
            
            <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-[#FF9800] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#F57C00] transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                Receber Receitas
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo e descrição */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/1ac82cf8-667c-4b35-80de-5468cf24c09f.webp" 
                  alt="NutriGO Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold">NutriGO</span>
              </div>
              <p className="text-gray-400 mb-4">
                Receitas rápidas, saudáveis e sob medida para você.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Redes sociais */}
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Download */}
            <div>
              <h3 className="font-bold text-lg mb-4">Baixe o App</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Disponível na</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-all flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Disponível no</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NutriGO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
