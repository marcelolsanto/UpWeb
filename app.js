// Carregar variáveis de ambiente de um arquivo .env
require('dotenv').config();

process.env.NODE_ENV = 'production';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var helmet = require('helmet');
var rateLimit = require('express-rate-limit');
var xss = require('xss-clean');
var sendRouter = require('./routes/send');
var { body, validationResult } = require('express-validator');

var app = express();

// Use Helmet para configurar cabeçalhos HTTP de segurança
app.use(helmet());

// Limite o número de solicitações por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Limite de 100 solicitações por IP
});
app.use(limiter);

// Desabilite o cabeçalho X-Powered-By
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use xss-clean para proteger contra XSS
app.use(xss());

// Middleware para validar e sanitizar dados do formulário
app.post('/send', [
  body('name').trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('celular').trim().escape()
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, (req, res) => {
  sendRouter(req, res);
});

app.use('/send', sendRouter);

module.exports = app;
