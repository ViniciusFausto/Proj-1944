<template>
  <v-container class="mt-12">
    <h1 class="text-center">Formulário de Usuário</h1>
      <form class="mt-5">
        <v-text-field
          v-model="nome"
          :error-messages="nomeErrors"
          :counter="30"
          label="Nome"
          required
          @input="$v.nome.$touch()"
          @blur="$v.nome.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-row>
          <v-col>
        <v-text-field
          v-model="cidade"
          :error-messages="cidadeErrors"
          label="Cidade"
          required
          @input="$v.cidade.$touch()"
          @blur="$v.cidade.$touch()"
        ></v-text-field>
          </v-col>
            <v-col>
            <v-estado
              v-model="estado"
              :items="estados"
              :error-messages="estadoErrors"
              label="Estado"
              required
              @change="$v.estado.$touch()"
              @blur="$v.estado.$touch()"
            ></v-estado>
          </v-col>
        </v-row>
        <v-checkbox
          v-model="checkbox"
          label="Gostaria de receber nossos e-mails?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
    
        <v-btn class="mr-4" @click="submit">Cadastrar</v-btn>
        <v-btn @click="clear">Limpar</v-btn>
      </form>
  </v-container>
</template>

 <script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      nome: { required, maxLength: maxLength(30) },
      email: { required, email },
      estado: { required },
      cidade: { required },
        },

    data: () => ({
      nome: '',
      email: '',
      cidade: '',
      estado: null,
      estados: [
        'Acre (AC)',
        'Alagoas (AL)',
        'Amapá (AP)',
        'Amazonas (AM)',
        'Bahia (BA)',
        'Ceará (CE)',
        'Distrito Federal (DF)',
        'Espírito Santo (ES)',
        'Goiás (GO)',
        'Maranhão (MA)',
        'Mato Grosso (MT)',
        'Mato Grosso do Sul (MS)',
        'Minas Gerais (MG)',
        'Pará (PA)',
        'Paraíba (PB)',
        'Paraná (PR)',
        'Pernambuco (PE)',
        'Piauí (PI)',
        'Rio de Janeiro (RJ)',
        'Rio Grande do Norte (RN)',
        'Rio Grande do Sul (RS)',
        'Rondônia (RO)',
        'Roraima (RR)',
        'Santa Catarina (SC)',
        'São Paulo (SP)',
        'Sergipe (SE)',
        'Tocantins (TO)',
      ],
      checkbox: false,

    }),
    
    computed: {
      estadoErrors () {
        const errors = []
        if (!this.$v.estado.$dirty) return errors
        !this.$v.estado.required && errors.push('Escolha um estado')
        return errors
      },
      nomeErrors () {
        const errors = []
        if (!this.$v.nome.$dirty) return errors
        !this.$v.nome.maxLength && errors.push('Nome possui um maximo de 30 caracteres')
        !this.$v.nome.required && errors.push('Nome obrigatório!')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Email Invalido!')
        !this.$v.email.required && errors.push('E-mail obrigatório!')
        return errors
      },
      cidadeErrors (){
        const errors = []
        if (!this.$v.cidade.$dirty) return errors
        !this.$v.cidade.required && errors.push('Informe uma cidade!')
        return errors
      }
    },
         id: this.$route.params.id,
    methods: {
    clear () {
        this.$v.$reset()
        this.nome = ''
        this.email = ''
        this.cidade = ''
        this.estado = null
        this.checkbox = false
      },
    },
    created () {
    const usuarios = this.$ls.get('usuarios')
    
    if (usuarios) {
      const item = usuarios.find(u => u.id == this.id)
      
      if (item) {
        this.nome = item.nome
        this.email = item.email
        this.cidade = item.cidade
        this.estado = item.estado
      }
    }
  }
}
  
</script>