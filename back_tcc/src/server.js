require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const authRoutes = require('./auth.js'); // Rota de autenticação

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api', routes);
server.use('/api/auth', authRoutes); // Usando '/api/auth' como prefixo

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});