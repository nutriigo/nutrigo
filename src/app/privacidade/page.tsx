import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacidadePage() {
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
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12 text-[#8BC34A]" />
            <h1 className="text-4xl font-bold text-gray-900">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                1. Informações que Coletamos
              </h2>
              <p className="mb-3">Coletamos as seguintes informações:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados de cadastro:</strong> nome, e-mail, senha</li>
                <li><strong>Dados de uso:</strong> receitas favoritas, histórico de acesso</li>
                <li><strong>Dados de pagamento:</strong> processados via Kiwify (não armazenamos)</li>
                <li><strong>Preferências alimentares:</strong> restrições, objetivos nutricionais</li>
                <li><strong>Dados de dispositivo:</strong> tipo, sistema operacional, IP</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                2. Como Usamos suas Informações
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar recomendações de receitas</li>
                <li>Processar pagamentos e gerenciar assinaturas</li>
                <li>Enviar notificações sobre o serviço</li>
                <li>Calcular e gerenciar o programa NutriPoints</li>
                <li>Análise de uso e estatísticas agregadas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                3. Compartilhamento de Dados
              </h2>
              <p className="mb-3">
                Não vendemos seus dados pessoais. Compartilhamos apenas com:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Kiwify:</strong> processamento de pagamentos</li>
                <li><strong>Serviços de e-mail:</strong> envio de comunicações</li>
                <li><strong>Hospedagem:</strong> armazenamento seguro de dados</li>
                <li><strong>Autoridades:</strong> quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                4. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para 
                proteger seus dados contra acesso não autorizado, alteração, divulgação 
                ou destruição. Isso inclui criptografia SSL/TLS e armazenamento seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                5. Seus Direitos (LGPD)
              </h2>
              <p className="mb-3">Você tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar exclusão de dados</li>
                <li>Revogar consentimento</li>
                <li>Portabilidade de dados</li>
                <li>Informações sobre compartilhamento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                6. Cookies e Tecnologias Similares
              </h2>
              <p>
                Usamos cookies para melhorar sua experiência, lembrar preferências 
                e analisar o uso do serviço. Você pode gerenciar cookies nas 
                configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos seus dados enquanto sua conta estiver ativa ou conforme 
                necessário para fornecer serviços. Após exclusão da conta, 
                dados são removidos em até 90 dias, exceto quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                8. Menores de Idade
              </h2>
              <p>
                Nosso serviço não é destinado a menores de 18 anos. Não coletamos 
                intencionalmente dados de menores sem consentimento dos responsáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                9. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre 
                mudanças significativas por e-mail ou notificação no app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                10. Contato
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
              </p>
              <div className="mt-3 space-y-1">
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:privacidade@nutrigo.com.br" className="text-[#8BC34A] hover:underline">
                    privacidade@nutrigo.com.br
                  </a>
                </p>
                <p>
                  <strong>DPO (Encarregado de Dados):</strong>{" "}
                  <a href="mailto:dpo@nutrigo.com.br" className="text-[#8BC34A] hover:underline">
                    dpo@nutrigo.com.br
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
            <p className="text-sm text-green-900">
              <strong>🔒 Seu compromisso com a privacidade:</strong> Levamos a proteção 
              dos seus dados muito a sério e estamos em conformidade com a LGPD 
              (Lei Geral de Proteção de Dados).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
