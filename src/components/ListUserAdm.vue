<template>
  <v-data-table 
    :headers="headers"
    :items="usuarios"
    sort-by="nome"
    hide-default-footer
    items-per-page="15"
    class="elevation-1 my-6"
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
            <v-btn color="#FB8C00" dark class="mb-2" >Novo Usuário</v-btn>
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
        { text: 'Email', value: 'email' },
        { text: 'Cidade', value: 'cidade' },
        { text: 'Estado', value: 'estado' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      usuarios: [],
    }),
     created () {
      const usuarios = this.$ls.get('usuarios')
    if (usuarios) this.usuarios = usuarios
  },


    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Usuario' : 'Editar Usuario'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
     
    methods: {
      editItem (item) {
        this.$router.push('../AreaAdm/FormularioEdi')
      },

      deleteItem (item) {
        let usuarios = this.$ls.get('usuarios')
        usuarios = usuarios.filter(u => u.id != item.id)
        this.$ls.set('usuarios', usuarios)
        const index = this.usuarios.indexOf(item)
        confirm('Deseja mesmo Deletar esse Usuario?') && this.usuarios.splice(index, 1)
      },

      close () {
        this.dialog = false 
      },
    },
  }
</script>
<style>
.v-application a {
  text-decoration: none;
}
</style>