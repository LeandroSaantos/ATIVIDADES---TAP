const express = require('express');
const app = express();
const jwt = require ('jsonwebtoken');
const constantes = require('./Config/Constantes');     
const bodyParser = require('body-parser');
const seguranca = require('./Util/seguranca');

// Definir a route principal
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
  res.send('Tela de Login');
});

// Lista de Utilizadores
var users = [
  { id: 1, username: 'Manuel', email: 'manuel@examplo.com' },
  { id: 2, username: 'Maria', email: 'maria@examplo.com' }
];

// Definir um endpoint da API
app.get('/api/get_users', seguranca.autorizaJWT, (req, res, next) => {
  res.send(users);
});

app.post ('/login', function (req, res) {
        if (req.body.username === 'admin' && 
            req.body.password === 'admin'){
        
            let payload = {
                username:'admin',
                roles: ['ADMIN', 'USER'],
                email: 'admin@email.com'
            };

            var token = jwt.sign({payload}, constantes.JWT_SECRET, {
                expiresIn: 300
            });

            res.status(200).send({auth: true, token: token});
    } else {
        res.status(500).send('Login inválido!');
    }
});


// Aplicação disponível em http://127.0.0.1:9000/
app.listen(9000);

