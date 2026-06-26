import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

pinia.use(({store}) => {
    console.log(`Store ${store.id} foi inicializada`)
})


export const useUsuarioStore  = defineStore('usuario',{
    state: () => ({
        nome: 'Emilly',
        idade: 25
    }), 
    getters: {
        saudacao: (state) => `Olá, ${state.nome}!`,
    },
    actions: {
        alterarNome(novoNome){
            this.nome = novoNome;

        }
    }
})