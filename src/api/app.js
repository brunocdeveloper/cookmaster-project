const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../router/userRouter');
const loginRouter = require('../router/loginRouter');
const recipesRouter = require('../router/recipesRouter');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/recipes', recipesRouter);

module.exports = app;
