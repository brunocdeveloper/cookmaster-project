const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../router/userRouter');
const loginRouter = require('../router/loginRouter');

const app = express();
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', userRouter);

app.use('/login', loginRouter);

module.exports = app;
