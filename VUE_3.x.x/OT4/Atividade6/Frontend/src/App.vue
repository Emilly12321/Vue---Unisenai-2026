<script>
import axios from 'axios';


export default {
  data() {
    return {
      cabecalhos: [{ text: 'Nome', value: 'nome' }],
      usuarios: []
    }
  },
  mouted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
      this.usuarios = response.data.map(user => ({nome: user.nome}))
    })

  }

}

</script>

<template>

  <v-data-table :items="usuarios" :headers="cabecalhos" class="elevation-1"></v-data-table>


</template>

<style scoped></style>
