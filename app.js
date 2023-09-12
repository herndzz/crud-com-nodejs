const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar-se ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
    console.error('Erro ao conectar-se ao MongoDB: ', err);
});

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas do CRUD
const crudRoutes = require('./routes/crudRoutes');
app.use('/api/crud', crudRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
