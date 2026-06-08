var app = new Vue({

    el: '#app',
    data:{
        titulo: 'Formulário Básico',
        nome: "",
        email:""
    },
    methods:{
        mensagem() {
            alert(`Dados enviados: <br> Nome: ${this.nome} <br> Nome: ${this.nome   } <br>`)
        }
    }



})