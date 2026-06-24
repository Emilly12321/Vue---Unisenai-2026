const { Sequelize } = require ('sequelize');

const banco = new Sequelize('TrilhaVue','root','', {
    host: 'localhost',
    dialect: 'mysql',           
});

banco.authenticate().then( () => console.log('Conexão com o MySQL estabelecida!')).catch( err => console.error('Erro ao conectar: ', err ));

module.exports = banco;