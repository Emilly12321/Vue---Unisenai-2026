<script>

  export default{

    data(){
      return{
        nome: '',
        formValido: false,
        requerido: value => !!value || 'Este campo é obrigatório'
      }
    },
    methods:{
      submeter(){
        alert(`Nome enviado: ${this.nome}`)
      }
    }

  }



</script>

<template>

  <v-form ref="form" v-model="formValido">

    <v-text-field v-model="nome" label="Nome" :rules="[requerido]"></v-text-field>
    <v-btn :disabled="!formValido" @click="submeter">Enviar</v-btn>
  </v-form>

</template>

<style scoped></style>
