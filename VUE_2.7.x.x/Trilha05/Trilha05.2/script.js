const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Vue JS',
        btnClassLimpar: {
            'btn-danger': true,
            'btn-sm': false
        },
        btnClassEnviar: [
            'btn-primary', { 'btn-lg': true }
        ],

        btnStyleLimpar: 'margin: 5px; font-size: 50px',
        btnStyleEnviar: [
            { 'font-size': '30px' },
            { 'text-transform': 'lowercase' }
        ],
    },
})