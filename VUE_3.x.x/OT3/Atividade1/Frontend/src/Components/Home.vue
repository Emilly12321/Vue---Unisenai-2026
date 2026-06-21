<template>

    <div>


        <h1>{{ titulo }}</h1>
        <p>Componente Vue.js basico</p>

    </div>


</template>


<script>
export default {

    data(){
        return{

            titulo:'Ola, Vue Compente'

        }
    }


}
</script>


<style scoped>

    h1{
        color: crimson;
    }



</style>