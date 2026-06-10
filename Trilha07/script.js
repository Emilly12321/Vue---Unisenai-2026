const app = new Vue({

    el: '#app',
    data:{
       usuario:{
            nome: 'Teste',
            bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta animi odit illum alias dolore nobis suscipit nam unde quo, officia, a, repellendus cum ea eveniet? Molestiae, illo minima? Possimus, quos?'
       }
    },
    filters: {
        capitalize(valor){
            if(!valor) return '';
            valor = valor.toString();

            return valor.chartAt(0).toUpperCase() + valor.slice(1);
        },
        truncate(valor,limite){
            if(!valor) return '';

            valor = valor.toString();

            return valor.lenght > limite ? valor.substring(0,limite) + '...' : valor;

        }
    }




});