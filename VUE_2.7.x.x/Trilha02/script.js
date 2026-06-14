
const app = new Vue({

    el: '#app',
    data: {
        comeco: "Olá",
        nomes: [

            {id: 1 , text: "Emilly", status: true},
            {id: 2 , text: "Ana",status: true},
            {id: 3 , text: "Julia",status: true}

        ],
        url: "teste.com",
        texto:"",
        vendo: false,
        status: true,
        titulo: "Apareceu o v-show",
        mensagem: "Testando",
        pesquisa_id: '',

        user:{

            id: 1,
            nome: 'Emilly',
            email: 'emilly@teste.com',
            profissao:'Programador'

        }
    }


});