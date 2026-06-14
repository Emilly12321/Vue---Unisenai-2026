Vue.component('button-component', {
    props:['text'], // lendo a propriedade texto que será passado para o componente
    template: '<button @click="emitClick">{{text}}</button>',// templete que será renderizado no HTML
    methods:{
        emitClick(){
            this.$emit('clicked');
        }
    }

});

Vue.component('component-a',{

    template: '<div>Este é o componente A</div>'

});


Vue.component('component-b',{

    template: '<div>Este é o componente B</div>'

});

Vue.component('card-component',{

    template: `<div class="card">
    
    <slot></slot>

    </div>`


});

const app = new Vue({

    el: '#app',
    data:{

        currentContent: 'component-a',


    },
    methods:{
        handleClick(){
            alert('O botão foi clicado!');
        }
    }
    
});