<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="idade"
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
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Novo Usuário</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.nome" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.idade" label="Idade"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.tamanho" label="Tamanho Roupa"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.cpf" label="CPF"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.data" label="Data de Nascimento"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        { text: 'Idade', value: 'idade' },
        { text: 'Tamanho Roupa', value: 'tamanho' },
        { text: 'CPF', value: 'cpf' },
        { text: 'Data Nascimento', value: 'data' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        idade: '0',
        tamanho: '',
        cpf: '',
        data: '',
      },
      defaultItem: {
        nome: '',
        idade: '0,00',
        tamanho: '',
        cpf: '',
        data: '',
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
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
          },
          {
            nome: 'Daphne',
            idade: '26',
            tamanho: 'G',
            cpf: '000.000.000-00',
            data: '17/10/1992',
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
        confirm('Deseja mesmo Deletar esse Produto?') && this.desserts.splice(index, 1)
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