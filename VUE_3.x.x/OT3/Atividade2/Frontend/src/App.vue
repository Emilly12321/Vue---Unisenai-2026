<template>
  <div>

      <h1>{{ mensagemMixin }}</h1>
      <button @click="mostrarMensagem">Mostrar Mensagem</button>


    <!-- slots -->
    <!-- <Filho>

        <h2>Conteudo Personalizado</h2>
        <p>Estem Conteudo foi inserido no slot</p>


    </Filho> -->


      <!-- Enventos e props -->
    <!-- <h1>Componente Pai</h1>
    <Filho @enviarMensagem="receberMensagem" />
    <Filho :mensagem="mensagemDoPai" /> -->
    <!-- <p>Mensagem recebida do filho: {{ mensagemFilho }}</p>  -->

  </div>

</template>


<script>

import testandoMixin from './testandoMixin';


// import Filho from './Components/Filho.vue';

export default {

  // components:{ Filho}

  // components: { Filho },
  // data() {
  //   return {
  //     // mensagemDoPai: 'Ola, sou do componente Pai',
  //     mensagemFilho: ''
  //   }
  // },
  // methods: {
  //   receberMensagem(mensagem) {
  //     this.mensagemFilho = mensagem;
  //   }
  // }

  mixins: [testandoMixin]
}

</script>


<style scoped></style>
