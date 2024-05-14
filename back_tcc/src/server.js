require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

const server = express();
server.use(express.json());
server.use(cors());
server.use('/api', routes);

const PORT = process.env.PORT || 3000; // Defina a porta padrão como 3000 se não estiver definida no .env

server.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
