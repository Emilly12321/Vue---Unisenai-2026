<script>

import { useUsuarioStore } from './stores/usuarioStore';
import { ref } from 'vue';

export default {
  setup() {
    const usuario = useUsuarioStore();
    const novoNome = ref('');
    return { usuario, novoNome }
  }
}
</script>

<template>

  <div>
    <h2>{{ usuario.saudacao }}</h2>
    <input v-model="novoNome" placeholder="Novo Nome">
    <button @click="usuario.alterarNome(novoNome)">Alterar Nome</button>
  </div>

</template>

<style scoped></style>
