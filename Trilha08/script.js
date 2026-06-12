const app = new Vue({

    el: '#app',
    data: {

        message: 'Hello Vue.js',
        mensagem: '',
        status: 'Esperando..',
        primeiroNome:'Joe',
        sobrenome:'Dany',
        respostaAplicacao:''

    },

    computed: {

        reversedMessage() {
            return this.message.split('').reverse().join('');
        },

        nomeCompleto(){
            return `${this.primeiroNome} ${this.sobrenome}`;
        },


    },

    watch: {
        mensagem(novoValor, velhoValor) {

            this.status = `Mensagem mudou de ${velhoValor} para ${novoValor}`;

        },

        nomeCompleto(novoNome){
            this.fakeAplicacao(novoNome);
        }   
    },
    methods: {
        fakeAplicacao(nome){
            this.respostaAplicacao = `Aplicação retorna o nome: ${nome}`;
        }
    }
});