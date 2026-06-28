<template>
    <v-container class="d-flex align-center justify-center register">
        <v-card width="420" class="pa-6 cards texto">
            <v-card-title class="text-center text-h5 mb-4">
                Registrar-se
            </v-card-title>

            <v-alert v-if="erro" type="error" class="mb-4">
                {{ erro }}
            </v-alert>

            <v-form @submit.prevent="register">
                <v-text-field v-model="nome"  variant="outlined"  label="Nome" type="text" prepend-inner-icon="mdi-account" required />
                <v-text-field v-model="email" variant="outlined"  label="E-mail" type="email" prepend-inner-icon="mdi-email" required />

                <v-text-field v-model="senha" variant="outlined" label="Senha" type="password" prepend-inner-icon="mdi-lock" required />

                <v-btn type="submit" class="mt-2 button w-100 rounded">
                    Entrar
                </v-btn>

                <v-btn variant="text" block class="mt-2" @click="$router.push('/login')">
                    Voltar 
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import api from '../service/api';

export default {
    data() {
        return {
            nome:'',
            email: '',
            senha: '',
            erro: ''
        };
    },

    methods: {
        async register() {
            try {
                this.erro = '';

                const resposta = await api.post('/auth/register', {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha
                });

                localStorage.setItem('token', resposta.data.token);

                this.$router.push('/login');
            } catch (error) {
                this.erro = 'E-mail ou senha inválidos.';
            }
        }
    }
};
</script>


<style scoped>
.register {
    min-width: 100vw;
    min-height: 100vh;
    background-color: #fdf7f7;
}

  .cards{
    background-color: #ffffff;
    
  }

  .texto{
    color:#b283d6 ;
  }
  
  .titulo{
    color:#8035b9 ;
  }

  .button{
    background-color: #a967db;
  }

</style>