<script>

  import api from '../services/api';

  export default{
    data(){
      return {
        usuarios: [],
      };
    },
    async created () {
      const response = await api.get('/usuarios');
      this.usuarios = response.data
    }
  }

</script>

<template>

  <div>
    <h2>Lista de Usuários</h2>
    <ul>
      <li v-for="usuarios in usuarios" :key="usuarios.id">
        {{ usuarios.nome }} - {{ usuarios.email }}
      </li>
    </ul>
  </div>

</template>

<style scoped></style>
