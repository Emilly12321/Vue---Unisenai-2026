<script>

export default {

    methods: {
        alertar() {
            alert('Botão clicado');
        }
    }


}


</script>

<template>
    <div class="bg-white">
        
        <v-btn color="primary" @click="alertar">Clique Aqui</v-btn>
        
    </div>

</template>

<style scoped></style>
