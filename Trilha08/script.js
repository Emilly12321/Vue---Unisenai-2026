const app = new Vue({

    el: '#app',
    data: {
        
        message: 'Hello Vue.js',
    
    },
    computed: {

        reversedMessage(){
            return this.message.split('').reverse().join('');
        }


    }



});