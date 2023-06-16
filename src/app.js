const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {
  const descricao = req.body.descricao;

  if (!descricao) {
    return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
  }

  tarefas.adicionar(descricao);
  res.status(201).send('Tarefa adicionada com sucesso!');
});

app.delete('/tarefas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);

  if (isNaN(indice) || indice < 0 || indice >= tarefas.todas().length) {
    return res.status(400).json({ error: 'Índice inválido.' });
  }

  tarefas.remover(indice);
  res.send('Tarefa removida com sucesso!');
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas.todas());
});

app.patch('/tarefas/:indice', (req, res) => {
  const indice = parseInt(req.params.indice);

  tarefas.marcarConcluida(indice);
  res.send('Tarefa marcada como concluída!');
});

module.exports = app;