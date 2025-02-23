var express = require('express');
var router = express.Router();
const sendEmail = require('../public/javaScript/sendEmail');

/* GET home page. */
router.get('/', (_req, res) => {
    res.render('index', { title: 'Express' });
});

/* Enviar e-mail com dados do formulário */
router.post('/email', async (req, res) => {
    
    console.log('Recuperando usuário por email e celular');
    const { nome, email, celular } = req.body;
    console.log('Enviando e-mail com os dados do formulário:', { nome, email, celular });

    try {
        await sendEmail(nome, email, celular);
        res.status(200).send(`E-mail enviado com sucesso com os dados do formulário: ${JSON.stringify({ nome, email, celular })}`);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).send('Erro ao enviar e-mail.');
    }
});

module.exports = router;
