
const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const {engine} = require('express-handlebars')

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')


// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/config.html');
// });

// app.post('/enviodados', function(req, res) {
//     console.log(req.body)
//     res.sendFile(__dirname + '/config.html', req.body)
// })

app.get('/', (req, res)=> {

    res.render('cadastro')

})

app.get('/teste', (req, res)=> {

    res.render('teste')
})


app.listen(8080, ()=>console.log('Servidor rodando na porta 8080'));
