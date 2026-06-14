const app = new Vue({

    el: '#app',
    data: {

        novoContato: {
            nome: '',
            telefone: '',
            email: ''
        },
        contatos: [],
        editIndex: -1,
        mensagemVisivel: false,
        mensagemAlerta: '',

    },
    computed:{
        contadorContatos(){
            return this.contatos.length;
        }
    },
    methods: {
        adicionarContato() {

            if (this.novoContato.nome && this.novoContato.telefone && this.novoContato.email) {

                this.contatos.push({ ...this.novoContato });
                this.novoContato = { nome: '', telefone: '', email: '' };
                this.mostrarMensagem('Contato adicionado com sucesso!');
                this.resetarForm();

            }

        },
        pegarIndex(index) {
            this.novoContato = { ...this.contatos[index] };
            this.editIndex = index;
        },

        atualizarContato() {
            this.$set(this.contatos, this.editIndex, { ...this.novoContato });
            this.mostrarMensagem('Contato atualizado com sucesso!');
            this.resetarForm();
            this.editIndex = -1;
        },

        deletarContato(index) {

            this.contatos.splice(index, 1);
            this.mostrarMensagem('Contato delado com sucesso!');

        },
        resetarForm() {
            this.novoContato = { nome: '', telefone: '', email: '' };
        },

        mostrarMensagem(text) {
            this.mensagemAlerta = text;
            this.mensagemVisivel = true;
            setTimeout(() => {
                this.mensagemVisivel = false;
            }, 1000)
        }

    }

});