const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// tornando disponiveis requisições http e também websocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

// conexão com o banco de dados
mongoose.connect(process.env.URL_MONGODB, {
  useNewUrlParser: true,
});

// tornando utilizavel o websocket para toda a aplicação
app.use((req, res, next) => {
  req.io = io;

  next();
});

// liberado acesso a api
app.use(cors());

// caminho para arquivos estáticos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// chamada as rotas
app.use(require('./routes.js'));

// declarando que o server deve ouvir a porta 3333
server.listen(3333);
