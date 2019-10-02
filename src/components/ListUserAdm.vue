<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="telefone"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Cadastro de Usuários</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <div class="flex-grow-1"></div>
          <template>
            <router-link to="/AreaAdm/Formulario">
            <v-btn color="primary" dark class="mb-2" >Novo Usuário</v-btn>
            </router-link>
          </template>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Resetar</v-btn>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'Telefone', value: 'telefone' },
        { text: 'Email', value: 'email' },
        { text: 'Cidade', value: 'cidade' },
        { text: 'Estado', value: 'estado' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        telefone: '0',
        email: '',
        cidade: '',
        estado: '',
      },
      defaultItem: {
        nome: '',
        telefone: '0,00',
        email: '',
        cidade: '',
        estado: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Produto' : 'Editar Produto'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
          {
            nome: 'Daphne',
            telefone: '997065280',
            email: 'vinicius@gmail.com',
            cidade: 'Araraquara',
            estado: 'São Paulo',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Deseja mesmo Deletar esse Usuario?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style>

</style>