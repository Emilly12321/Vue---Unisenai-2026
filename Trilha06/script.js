const app = new Vue({

    el: '#app',
    data:{
        contador: 0,
        nome:'',
    },
    methods: {
        mostrarAlerta(){
            alert('Botão clicado!');
        },
        console(){
            console.log(`O mouse passou sobre o elemento`);
        },
        mostrarTecla(evento){

            console.log('Tecla pressionada', evento.key);
        },
        cumprimentar(mensagem){

            alert(mensagem);
        },

        mostrarCoordenada(){

            console.log('Posição do clique:', event.clientX, event.clientY);

        },

        contar(){
            this.contador++;
        },

        enviarFormulario(){

            alert(`Formulario enviado com o nome: ${this.nome}`);

        },
        enviar(){
            alert('Enviando!');
        }
    }




});