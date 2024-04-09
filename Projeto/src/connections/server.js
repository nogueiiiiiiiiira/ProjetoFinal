const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

const db = new sqlite3.Database('');

// Rota para lidar com a inserção de dados
app.post('/inserir-dados', (req, res) => {
  const { nome, sobrenome, cpf, email } = req.body;

  // Executar a inserção no banco de dados
  const query = `INSERT INTO sua_tabela (nome, sobrenome, cpf, email) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, sobrenome, cpf, email], (err) => {
    if (err) {
      console.error('Erro ao inserir dados:', err.message);
      return res.status(500).json({ error: 'Erro ao inserir dados' });
    }
    console.log('Dados inseridos com sucesso!');
    res.status(200).json({ message: 'Dados inseridos com sucesso' });
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});