import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#8BC34A] hover:text-[#7CB342] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Termos de Uso
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar o NutriGO, você concorda com estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não utilize nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. Descrição do Serviço
              </h2>
              <p>
                O NutriGO é uma plataforma digital que oferece receitas saudáveis, 
                cálculo nutricional automático, cardápios personalizados e dicas de nutrição. 
                Oferecemos planos de assinatura com teste grátis de 7 dias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. Assinaturas e Pagamentos
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Todos os planos incluem 7 dias de teste grátis</li>
                <li>Após o período de teste, a cobrança será automática</li>
                <li>Você pode cancelar a qualquer momento</li>
                <li>Não oferecemos reembolso proporcional</li>
                <li>Pagamentos processados via Kiwify (PIX, cartão ou boleto)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Programa NutriPoints
              </h2>
              <p>
                Os pontos acumulados no programa NutriPoints podem ser trocados por 
                recompensas conforme disponibilidade. Os pontos não têm valor monetário 
                e não podem ser transferidos entre usuários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo do NutriGO (receitas, textos, imagens, logotipos) 
                é protegido por direitos autorais. Você não pode reproduzir, distribuir 
                ou criar obras derivadas sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                6. Limitação de Responsabilidade
              </h2>
              <p>
                As informações nutricionais são fornecidas apenas para fins informativos. 
                Consulte sempre um profissional de saúde antes de fazer mudanças 
                significativas na sua dieta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                7. Modificações dos Termos
              </h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. 
                Notificaremos os usuários sobre mudanças significativas por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                8. Contato
              </h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato: 
                <a href="mailto:contato@nutrigo.com.br" className="text-[#8BC34A] hover:underline ml-1">
                  contato@nutrigo.com.br
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
