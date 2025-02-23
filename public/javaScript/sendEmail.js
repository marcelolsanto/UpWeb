const nodemailer = require('nodemailer');
require('dotenv').config();

// Configura o transporte de e-mail usando o serviço Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Usuário do e-mail (definido nas variáveis de ambiente)
    pass: process.env.EMAIL_PASS // Senha do e-mail (definido nas variáveis de ambiente)
  }
});

/**
 * Função para enviar um e-mail com os dados do formulário
 * @param {string} name - Nome do remetente
 * @param {string} email - E-mails dos destinatários, separados por vírgulas
 * @param {string} celular - CEP do remetente
 */
const sendEmail = async (name, email, celular) => {
  // Configura as opções do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER, // Remetente do e-mail
    to: email, // Destinatário do e-mail (definido nas variáveis de ambiente)
    subject: 'Solicitação de serviços para criação de sites', // Assunto do e-mail
    html: `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem-vindo à Sites-UpWeb</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #007BFF;
        }
        p {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
        }
        .info {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Bem-vindo à Sites-UpWeb!</h1>
        <p>Olá, espero que esta mensagem te encontre bem!</p>
        <p>Agradecemos por entrar em contato com a <strong>Sites-UpWeb</strong>, onde transformamos suas ideias em sites incríveis e funcionais!</p>
        <p>Estamos prontos para criar uma presença digital única para você ou seu negócio.</p>
        <div class="info">
            <p><strong>📌 Nome:</strong> ${name}</p>
            <p><strong>📌 E-mail:</strong> ${email}</p>
            <p><strong>📌 Contato:</strong> ${celular}</p>
        </div>
        <p>Em breve, retornaremos para entender melhor suas necessidades e garantir que seu site seja exatamente como você imagina (ou ainda melhor!).</p>
        <div class="footer">
            <p>Atenciosamente,</p>
            <p><strong>Marcelo Santos</strong><br>
            💻 Desenvolvedor de Sistemas - <strong>Sites-UpWeb</strong><br>
            📞 (11) 9 7298-0409</p>
            <p>🔗 <em>Sites modernos, funcionais e do jeito que você precisa!</em></p>
        </div>
    </div>
</body>
</html>
    ` // Corpo do e-mail com os dados do formulário em HTML
  };

  try {
    // Envia o e-mail usando o transporte configurado
    let info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info.response);
    return info.response;
  } catch (error) {
    console.log('Erro ao enviar e-mail:', error);
    throw error;
  }
};

// Exporta a função sendEmail para ser usada em outros módulos
module.exports = sendEmail;