
const express = require('express');
const bodyParser = require('body-parser');

const {engine} = require('express-handlebars')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// app.set('views', './views')


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/config.html');
// });

app.post('/enviodados', function(req, res) {
    console.log(req.body)
    res.render('resposta', req.body)
})

app.get('/', (req, res)=> {

    res.render('cadastro')

})

app.post('/teste', function(req, res) {

    res.send('teste')
})


app.listen(8080, ()=>console.log('Servidor rodando na porta 8080'));
