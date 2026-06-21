export default{
    data(){
        return{
            mensagemMixin: 'Ola, sou do mixin!'
        }
    },

    methods:{
        mostrarMensagem(){
            console.log(this.mensagemMixin)
        }
    }
}