require('dotenv').config() // carrega dados do .env

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var app = express();
app.use((req, res, next) => {
    //console.log("Acessou o Middelare")
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5173")
    app.use(cors());
    next();
})


// Conexão com o banco de dados remoto
const connectDb = require('./config/database')
connectDb()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


/* ROTAS DA APLICACAO */
const userRoute = require('./routes/user')
app.use('/user', userRoute)

const assessmentRoute = require('./routes/assessment')
app.use('/assessment', assessmentRoute)

const criterionRoute = require('./routes/criterion')
app.use('/criterion', criterionRoute)

const questionRoute = require('./routes/question')
app.use('/question', questionRoute)

const glossaryRoute = require('./routes/glossary')
app.use('/glossary', glossaryRoute)

module.exports = app;
