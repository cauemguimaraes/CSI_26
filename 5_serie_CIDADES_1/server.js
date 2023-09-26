const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const cidades = [
  {
    nome: "Nova York",
    estado: "Nova York",
    pais: "Estados Unidos",
    populacao: "8.4 milhões",
    imagem: "new_york.jpg"
  },
  {
    nome: "Londres",
    estado: "Inglaterra",
    pais: "Reino Unido",
    populacao: "8.8 milhões",
    imagem: "london.jpg"
  },
  {
    nome: "Paris",
    estado: "Île-de-France",
    pais: "França",
    populacao: "2.2 milhões",
    imagem: "paris.jpg"
  },
  {
    nome: "Los Angeles",
    estado: "Califórnia",
    pais: "Estados Unidos",
    populacao: "3.8 milhões",
    imagem: "los_angeles.jpg"
  }
];

app.get('/cidades', (req, res) => {
  res.json(cidades);
});

app.listen(port, () => {
  console.log(`Servidor Node rodando na porta ${port}`);
});
