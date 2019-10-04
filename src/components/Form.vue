<template>
  <v-container class="mt-12">
    <h1 class="text-center">Formulário de Usuário</h1>
      <form class="mt-5">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="30"
          label="Nome"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :error-messages="phoneErrors"
          label="Telefone"
          required
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        ></v-text-field>
        <v-row>
          <v-col>
        <v-text-field
          v-model="city"
          :error-messages="cityErrors"
          label="Cidade"
          required
          @input="$v.city.$touch()"
          @blur="$v.city.$touch()"
        ></v-text-field>
          </v-col>
            <v-col>
            <v-select
              v-model="select"
              :items="estados"
              :error-messages="selectErrors"
              label="Estado"
              required
              @change="$v.select.$touch()"
              @blur="$v.select.$touch()"
            ></v-select>
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
  import { required, maxLength, email, ipAddress } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(30) },
      email: { required, email },
      select: { required },
      city: { required },
      phone: { required, ipAddress },
        },

    data: () => ({
      name: '',
      email: '',
      city: '',
      phone: '',
      select: null,
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
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Escolha um estado')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Nome possui um maximo de 30 caracteres')
        !this.$v.name.required && errors.push('Nome obrigatório!')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Email Invalido!')
        !this.$v.email.required && errors.push('E-mail obrigatório!')
        return errors
      },
      cityErrors (){
        const errors = []
        if (!this.$v.city.$dirty) return errors
        !this.$v.city.required && errors.push('Informe uma cidade!')
        return errors
      },
      phoneErrors (){
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.ipAddress && errors.push('Telefone deve ser um numero')
        !this.$v.phone.required && errors.push('Informe um numero de telefone!')
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.city = ''
        this.phone = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
