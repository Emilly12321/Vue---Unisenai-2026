<script>

import axios from 'axios';

export default {
  data() {
    return {
      cep: '',
      endereco: null
    };
  },
  methods: {
    async buscarEndereco() {
      
      if (this.cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
          this.endereco = response.data
        } catch (error) {
          console.error("Erro ao buscar CEP: ", error)

        }
      }else{
        alert("CEP inválido! Digite 8 números.");
      }
    }
  }
}

</script>

<template>

  <div>
    <h2>Consulta de Endereço</h2>
    <input v-model="cep" placeholder="Digite o CEP">
    <button @click="buscarEndereco">Buscar</button>
    
      <div v-if="endereco">
        <p><strong>Rua:</strong> {{ endereco.logradouro }}</p>
        <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
        <p><strong>Cidade:</strong> {{ endereco.localidade }} - {{ endereco.uf }}</p>
    
      </div>

  </div>

</template>

<style scoped></style>
