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
 * @param {string} email - E-mail do remetente
 * @param {string} celular - CEP do remetente
 */
const sendEmail = async (name, email, celular) => {
  // Configura as opções do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER, // Remetente do e-mail
    to: process.env.EMAIL_RECEIVER, // Destinatário do e-mail (definido nas variáveis de ambiente)
    subject: 'Solicitação de serviços para criação de sites', // Assunto do e-mail
    text: `Olá gostaria de iniciar meu atendimento:\nNome: ${name}\nEmail: ${email}\nCEP: ${celular}` // Corpo do e-mail com os dados do formulário
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