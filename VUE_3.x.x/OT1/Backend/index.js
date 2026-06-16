const express = require('express');

const app = express();

app.use(express.json());

let usuarios = [
    {id: 1 , nome: 'Maria', email:'mariaAparecida@gmail.com'},
    {id: 2 , nome: 'João', email:'joaoGomes@gmail.com'}
];

app.listen(3000, ()=>{
    console.log("Serviço rodando em http://localhost:3000");
})

app.get('/api/users', (req,res) => {

    res.json(usuarios).status(200);

});


app.get('/api/users/:id', (req,res) => {

    const user = usuarios.find(users => users.id === parseInt(req.params.id));
    if(!user) return res.status(404).send('usuário não encontrado');
    res.json(user);

});

app.post('/api/users', (req,res) => {

    const novoUser = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    }

    usuarios.push(novoUser);

    res.status(201).json(usuarios);

});

app.delete('/api/users/:id', (req,res) => {

    const usuarioIndex = usuarios.findIndex(user => user.id === parseInt(req.params.id));
    if(usuarioIndex === -1) return res.status(404).send('Usuário não encontrado');
    usuarios.splice(usuarioIndex, 1);

    res.status(200).json(usuarios); 

});