const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar o middleware para servir arquivos estáticos
app.use(express.static('public'));

// Configurar o middleware para analisar dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o middleware para processar JSON
app.use(express.json());

// Configurar o multer para processar uploads de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Rota para processar dados de um formulário via GET
app.get('/process-form', (req, res) => {
  const data = req.query.data;
  res.send(`Você enviou: ${data}`);
});

// Rota para processar upload de arquivo via POST
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});

// Rota para suportar uma aplicação AJAX
app.get('/data.json', (req, res) => {
  const jsonData = {
    message: 'Dados vindos do servidor via AJAX.',
  };
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
