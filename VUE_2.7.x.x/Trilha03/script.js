var app = new Vue({

    el: '#app',
    data:{
        titulo: 'Aprendendo Vue JS',
        nome: "",
        telefone: "",
        novidades:"",
        interesses: [],
        conheceu:""
    },
    methods:{
        mensagem() {
            alert('Okay')
        }
    }



})