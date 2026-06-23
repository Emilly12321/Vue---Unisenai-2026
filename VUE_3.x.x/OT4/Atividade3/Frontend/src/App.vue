<script >


export default{
    data(){
      return{
        modalAberto: false
      }
    }
}

</script>

<template>
  <v-dialog v-model="modalAberto" max-width="500">
    <template #activator="{ on }">
      <v-btn color="primary" v-on="on" @click="modalAberto = true">Abrir modal</v-btn>
    </template>

    <v-card>
      <v-card-title>Card Título</v-card-title>
      <v-card-text>Este é um card simples.</v-card-text>

      <v-card-actions>
        <v-btn color="secondary" @click="modalAberto = false">Fechar</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>




</template>

<style scoped></style>
