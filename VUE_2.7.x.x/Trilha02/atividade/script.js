const app = new Vue({

    el: '#app',

    data: {

        titulo: 'Aplicação de Login',
        autenticado: false,
        usuario: {
            nome: 'Emilly'
        },
        dados: '',
        username: '',
        password: '',
        erro: false
    },

    methods: {

        cadastro() {

            const dados = [

                { nome: this.username, password: this.password }

            ]


        },

        login() {

            for (item of this.dados) {

                if (this.username === item.nome && this.password === item.password) {
                   
                    this.autenticado = true;
                    this.erro = false;

                }

            }

            
        },

        logout() {
            this.autenticado = false;
            this.username = '';
            this.password = '';

        }


    }



});