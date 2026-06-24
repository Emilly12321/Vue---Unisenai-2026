<script>
  import { createVuetify } from 'vuetify';


  export default createVuetify({
  
    theme: {
      themes: {
        light:{
          primary: '#4CAF50',
          secondary: '#FFC107',
        }
      }
    }
  
  
  })

</script>

<template>

  <v-btn>Botao</v-btn>

</template>

<style scoped>

  .v-btn{
    background-color: #ff5722 !important;
  }


</style>
