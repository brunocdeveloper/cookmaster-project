const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
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

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = app;
