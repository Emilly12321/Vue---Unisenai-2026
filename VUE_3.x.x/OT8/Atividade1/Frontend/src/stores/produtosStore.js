import { createPinia, defineStore } from "pinia";
import axios from "axios";

const pinia = createPinia();

pinia.use(({store}) => {
    console.log(`Store ${store.id} foi inicializada`)
})

export const useProdutoStore = defineStore('produto', {
    state: () => ({
        produtos: [],
    }),
    actions:{
        async carregarProdutos(){
            try{
                const response = await axios.get('https://fakestoreapi.com/products')
                this.produtos = response.data;   
            
            } catch (error){
                console.error('Erro ao carregar produtos', error);
            }
        }
    }
})