<script setup>
export default {

data: {
  return: {
    usuario: [],
    novoUsuario: { nome: '', email: '' }
  },

},
methods: {
  async carregarUsuarios(){
    const resposta = await axios.get('http://localhost:3000/api/users');
    this.usuario = resposta.data;
  },
  async adicionarUsuario(){
    await axios.post('http://localhost:3000/api/users', this.novoUsuario);
    this.carregarUsuarios();
  }
},
mounted(){
  this.carregarUsuarios();
}

</script>

<template>
  <h1>You did it!</h1>
</template>

<style scoped></style>
