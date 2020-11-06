const express = require('express');
const app = express();

const cors = require('cors');

const database = require('./models/repository')
database.connect()

const jogos = require('./routes/games-routes')

app.use(cors());
app.use(express.json());
app.use('/', jogos);

module.exports = app;
