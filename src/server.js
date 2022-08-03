const express = require('express')
const dotenv = require('dotenv')
const mustache = require('mustache-express')
const path = require('path')


//criando a variavel server que vai armazenar o express

const server = express()
dotenv.config()

//importando mainRoutes que será o arquivo da nossa rota
const mainRoutes = require('./routes/index')


//configurando o mustache

server.set('view engine', 'mustache');
//junção da raiz com a pasta views
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

//diretorio onde colocamos arquivos e imagens
server.use(express.static(path.join(__dirname,'../public')));

//usando a rota importada do maiRoutes
server.use(mainRoutes);

//escutando a porta que colocamos no .env
server.listen(process.env.PORT);