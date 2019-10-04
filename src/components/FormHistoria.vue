<template>
  <v-container class="mt-12">
    <h1 class="text-center">Formulário de História</h1>
      <form class="mt-5">
        <v-text-field
          v-model="titulo"
          :error-messages="tituloErrors"
          :counter="60"
          label="Título"
          required
          @input="$v.titulo.$touch()"
          @blur="$v.titulo.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="autor"
          :counter="255"
          label="Autor"
          required
          @input="$v.autor.$touch()"
          @blur="$v.autor.$touch()"
        ></v-text-field>
        
        <v-text-field
          v-model="texto"
          :counter="255"
          label="Texto"
          required
          @input="$v.texto.$touch()"
          @blur="$v.texto.$touch()"
        ></v-text-field>

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
      titulo: { required, maxLength: maxLength(60) },
        autor: { required, maxLength: maxLength(60) },
          texto: { required, maxLength: maxLength(300) },
        },

    data: () => ({
      titulo: '',
      autor: '',
      texto: '',
    }),
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.titulo = ''
        this.texto = ''
        this.autor = ''
      },
    },
  }
</script>
