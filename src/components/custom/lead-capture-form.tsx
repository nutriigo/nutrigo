"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enviar para API de automação de email
      const response = await fetch("/api/send-recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setName("");
        
        // Reset após 5 segundos
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
          <Check className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Sucesso! 🎉
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6">
          Enviamos 5 receitas saudáveis e rápidas para seu e-mail!
        </p>
        <p className="text-base text-white/80">
          Verifique sua caixa de entrada (e spam, só por precaução)
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#8BC34A] to-[#7CB342] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl">
      <Mail className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6" />
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        Receba 5 receitas saudáveis grátis
      </h2>
      <p className="text-lg sm:text-xl mb-8 text-white/90">
        Cadastre seu e-mail e comece a transformar sua alimentação hoje mesmo
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          required
          className="w-full px-6 py-4 rounded-full text-gray-900 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="w-full px-6 py-4 rounded-full text-gray-900 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-[#FF9800] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#F57C00] transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Receber Receitas
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      <p className="text-sm text-white/70 mt-6">
        📧 Resposta automática • 🔒 Seus dados estão seguros • ❌ Sem spam
      </p>
    </div>
  );
}
