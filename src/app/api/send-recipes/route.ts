import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    // Validação básica
    if (!email || !name) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios" },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com serviços de email como:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - AWS SES
    // - Brevo (ex-Sendinblue)

    // Exemplo de estrutura para SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: 'contato@nutrigo.com',
      subject: '🍽️ Suas 5 Receitas Saudáveis do NutriGO',
      html: getEmailTemplate(name),
    };

    await sgMail.send(msg);
    */

    // Por enquanto, apenas log (substitua pela integração real)
    console.log("📧 Email capturado:", { name, email });

    // Simular envio de email
    const emailContent = generateRecipesEmail(name);
    console.log("Email que seria enviado:", emailContent);

    // Aqui você também pode salvar no banco de dados
    // await saveLeadToDatabase({ name, email, createdAt: new Date() });

    return NextResponse.json({
      success: true,
      message: "E-mail enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}

// Template de email com as 5 receitas
function generateRecipesEmail(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8BC34A, #7CB342); color: white; padding: 30px; text-align: center; border-radius: 10px; }
        .recipe { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 10px; border-left: 4px solid #8BC34A; }
        .recipe h3 { color: #8BC34A; margin-top: 0; }
        .nutrition { background: #fff; padding: 10px; border-radius: 5px; margin-top: 10px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        .cta-button { display: inline-block; background: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin: 20px 0; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍽️ Olá, ${name}!</h1>
          <p>Aqui estão suas 5 receitas saudáveis e rápidas do NutriGO</p>
        </div>

        <div class="recipe">
          <h3>1️⃣ Omelete Rápido de Micro-ondas</h3>
          <p><strong>⏱️ Tempo:</strong> 2 minutos</p>
          <p><strong>🥘 Ingredientes:</strong></p>
          <ul>
            <li>2 ovos</li>
            <li>1 colher de sopa de leite</li>
            <li>Sal e pimenta a gosto</li>
            <li>Queijo ralado (opcional)</li>
          </ul>
          <p><strong>📝 Modo de preparo:</strong></p>
          <ol>
            <li>Bata os ovos com o leite em uma tigela própria para micro-ondas</li>
            <li>Tempere com sal e pimenta</li>
            <li>Leve ao micro-ondas por 1 minuto e 30 segundos</li>
            <li>Adicione queijo e leve por mais 30 segundos</li>
          </ol>
          <div class="nutrition">
            <strong>💪 Informação Nutricional:</strong><br>
            180 kcal | 12g proteínas | 5g carboidratos | 10g gorduras
          </div>
        </div>

        <div class="recipe">
          <h3>2️⃣ Smoothie Proteico de Banana e Aveia</h3>
          <p><strong>⏱️ Tempo:</strong> 3 minutos</p>
          <p><strong>🥘 Ingredientes:</strong></p>
          <ul>
            <li>1 banana congelada</li>
            <li>2 colheres de sopa de aveia</li>
            <li>200ml de leite (ou vegetal)</li>
            <li>1 colher de sopa de pasta de amendoim</li>
            <li>Canela a gosto</li>
          </ul>
          <p><strong>📝 Modo de preparo:</strong></p>
          <ol>
            <li>Coloque todos os ingredientes no liquidificador</li>
            <li>Bata até ficar homogêneo</li>
            <li>Sirva imediatamente</li>
          </ol>
          <div class="nutrition">
            <strong>💪 Informação Nutricional:</strong><br>
            220 kcal | 8g proteínas | 35g carboidratos | 6g gorduras
          </div>
        </div>

        <div class="recipe">
          <h3>3️⃣ Frango Grelhado com Legumes</h3>
          <p><strong>⏱️ Tempo:</strong> 15 minutos</p>
          <p><strong>🥘 Ingredientes:</strong></p>
          <ul>
            <li>1 filé de frango</li>
            <li>1 abobrinha</li>
            <li>1 cenoura</li>
            <li>Temperos: alho, sal, pimenta, azeite</li>
          </ul>
          <p><strong>📝 Modo de preparo:</strong></p>
          <ol>
            <li>Tempere o frango e grelhe por 7 minutos de cada lado</li>
            <li>Corte os legumes em tiras</li>
            <li>Refogue os legumes com alho e azeite por 5 minutos</li>
            <li>Sirva o frango com os legumes</li>
          </ol>
          <div class="nutrition">
            <strong>💪 Informação Nutricional:</strong><br>
            320 kcal | 35g proteínas | 12g carboidratos | 8g gorduras
          </div>
        </div>

        <div class="recipe">
          <h3>4️⃣ Wrap de Atum Light</h3>
          <p><strong>⏱️ Tempo:</strong> 5 minutos</p>
          <p><strong>🥘 Ingredientes:</strong></p>
          <ul>
            <li>1 lata de atum em água</li>
            <li>1 tortilha integral</li>
            <li>Folhas de alface</li>
            <li>Tomate picado</li>
            <li>1 colher de iogurte natural</li>
          </ul>
          <p><strong>📝 Modo de preparo:</strong></p>
          <ol>
            <li>Escorra o atum e misture com o iogurte</li>
            <li>Espalhe na tortilha</li>
            <li>Adicione alface e tomate</li>
            <li>Enrole e sirva</li>
          </ol>
          <div class="nutrition">
            <strong>💪 Informação Nutricional:</strong><br>
            280 kcal | 25g proteínas | 28g carboidratos | 6g gorduras
          </div>
        </div>

        <div class="recipe">
          <h3>5️⃣ Panqueca de Banana Fit</h3>
          <p><strong>⏱️ Tempo:</strong> 8 minutos</p>
          <p><strong>🥘 Ingredientes:</strong></p>
          <ul>
            <li>1 banana madura</li>
            <li>2 ovos</li>
            <li>2 colheres de sopa de aveia</li>
            <li>Canela a gosto</li>
          </ul>
          <p><strong>📝 Modo de preparo:</strong></p>
          <ol>
            <li>Amasse a banana com um garfo</li>
            <li>Misture os ovos, aveia e canela</li>
            <li>Aqueça uma frigideira antiaderente</li>
            <li>Despeje a massa e cozinhe 3 minutos de cada lado</li>
          </ol>
          <div class="nutrition">
            <strong>💪 Informação Nutricional:</strong><br>
            250 kcal | 12g proteínas | 32g carboidratos | 8g gorduras
          </div>
        </div>

        <div style="text-align: center; margin: 40px 0;">
          <h2>🎉 Quer mais receitas como essas?</h2>
          <p>Acesse centenas de receitas saudáveis e rápidas no NutriGO!</p>
          <a href="https://nutrigo.com" class="cta-button">
            Começar Teste Grátis de 7 Dias
          </a>
        </div>

        <div class="footer">
          <p>💚 NutriGO - Receitas rápidas, saudáveis e sob medida para você</p>
          <p>Você recebeu este e-mail porque se cadastrou em nosso site</p>
          <p style="font-size: 12px; color: #999;">
            Se não quiser mais receber nossos e-mails, <a href="#">clique aqui</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
