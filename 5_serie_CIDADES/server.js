// const express = require('express');
// const app = express();
// const port = 3001; // Pode ser qualquer porta que você preferir

// // Endpoint para fornecer dados da cidade (vamos definir isso mais tarde)
// app.get('/cidade/:id', (req, res) => {
//   // Implementar a lógica para retornar os dados da cidade
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });

// const citiesData = {
//     1: { name: 'Nova York', image: 'new_york.jpg', info: 'Informações sobre Nova York' },
//     2: { name: 'Los Angeles', image: 'los_angeles.jpg', info: 'Informações sobre Los Angeles' },
//     3: { name: 'Paris', image: 'paris.jpg', info: 'Informações sobre Paris' },
//     4: { name: 'Londres', image: 'london.jpg', info: 'Informações sobre Londres' },
//     // Adicione mais cidades e dados conforme necessário
//   };
  
//   app.get('/cidade/:id', (req, res) => {
//     const cityId = req.params.id;
//     const cityData = citiesData[cityId];
  
//     if (cityData) {
//       res.json(cityData);
//     } else {
//       res.status(404).json({ error: 'Cidade não encontrada' });
//     }
//   });

// const express = require('express');
// const app = express();
// const port = 3001;

// const citiesData = require('./data/cidades.json'); // Carregando os dados das cidades a partir do arquivo JSON

// app.use(express.json());

// app.get('/cidade/:id', (req, res) => {
//   const cityId = req.params.id;
//   const cityData = citiesData.cidades.find(city => city.id.toString() === cityId);

//   if (cityData) {
//     res.json(cityData);
//   } else {
//     res.status(404).json({ error: 'Cidade não encontrada' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });


const express = require('express');
const fs = require('fs'); // Módulo File System para leitura de arquivos
const app = express();
const port = 3001;

app.use(express.json());

app.get('/cidade/:id', (req, res) => {
  const cityId = req.params.id;

  // Lê os dados do arquivo cidades.json
  fs.readFile('cidades.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao ler o arquivo de cidades.' });
      return;
    }

    const citiesData = JSON.parse(data);
    const city = citiesData.cidades.find(city => city.id.toString() === cityId);

    if (city) {
      res.json(city);
    } else {
      res.status(404).json({ error: 'Cidade não encontrada' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
