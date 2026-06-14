const app = new Vue({

    el: '#app',
    data: {
        mensagem: 'Hello VueJs',
    },

    methods: {
        mudarMensagem(){
            this.mensagem = 'Mensagem alterada!';
        },
        destruirComponente(){
            this.$destroy(); //Destrói o componente manualmente.
        },
        fetchData() {
            setTimeout(() => {
                this.mensagem = 'Dados carregados da API';
            }, 1000);
        }
    },


    created() {
        this.fetchData();
    },
    mounted() {
        console.log(`Componente montado, DOM pronto`);
    },

    beforeDestroy() {
        console.log(`Limpando listeners ou times`);
    },



    // beforeCreate(){
    //     console.log(`beforeCreate: Dados ainda não estão disponíveis`);
    // },

    // created(){
    //     console.log(`created: Dados já foram inicializados`);
    // },

    // beforeMount(){
    //     console.log(`beforeMount: Componente prestes a ser montado no DOM`);
    // },

    // mounted(){
    //     console.log(`mounted: Componente montado no DOM`);
    // },
    // beforeUpdate(){
    //     console.log(`beforeUpdate: Dados foram alterados, prestes a atualizar o DOM`);
    // },
    // updated(){
    //     console.log(`uptaded: DOM foi atualizado`);
    // },
    // beforeDestroy(){
    //     console.log(`beforeDestroy: Componente prestes a ser destruído`);
    // },
    // destroyed(){
    //     console.log(`destroyed: Componente foi destruído`);
    // }


});