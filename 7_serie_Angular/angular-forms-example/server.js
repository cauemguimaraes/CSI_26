// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let formData = [];

app.post('/api/data', (req, res) => {
  const data = req.body;
  formData.push(data);
  res.json({ message: 'Data received successfully.' });
});

app.get('/api/data', (req, res) => {
  res.json(formData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
