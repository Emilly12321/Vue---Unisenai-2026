const express = require ('express');
const Usuario = require('./Models/Users');

const app = express();
app.use(express.json());

app.post('/usuarios', async(req, res) => {

    const usuario = await Usuario.create(req.body);
    res.json(usuario);

});


app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

app.put('/usuarios/:id', async (req, res) => {

    await Usuario.update(req.body, {where: {id: req.params.id}});
    res.status(200).send('Usuário atualizado');

});

app.delete('/usuarios/:id', async (req, res) =>{
    await Usuario.destroy({where: { id: req.params.id }});
    res.status(200).send('Usuário deletado com sucesso!!');
})


app.listen(3000, () => {

    console.log(`Servidor rodando em http://localhost:3000`)

});
