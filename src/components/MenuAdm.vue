<template >
  <v-container class="menu">
          <div><img src="../assets/menu.svg" alt="" class="icon" @click.stop="drawer = !drawer"> </div>
         <div id="titulo">
           <img src="../assets/img/titulo.png" alt="" srcset="">
         </div>
         <router-link to="/">
         <div class="logo">
           <img src="../assets/img/Icone44.png" id="logo" alt="">
         </div>
         </router-link>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        
        temporary
        height="auto"
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-action>
                <img src="../assets/menu.svg" alt="" width="30" @click.stop="drawer = !drawer">
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="navegarHome">Página Inicial</v-list-item-title>
            </v-list-item>
            <router-link to="/AreaAdm/UsuarioAdm">
            <v-list-item>
              <v-list-item-title>Usuários</v-list-item-title>
            </v-list-item>
            </router-link>

            <router-link to="/AreaAdm/ProdutoAdm">
            <v-list-item>
              <v-list-item-title>Produtos</v-list-item-title>
            </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </v-container>

</template> 

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false;
    },
  },
  methods: {
    navegarHome(){
      this.$router.push('/')
    }
  },
}
</script>
<style>
.menu{
    display: flex; 
    justify-content: space-between;
}
.logo{
  width: 110px;
  align-content: flex-end;
  height: 90px;
}
/* #titulo{
    align-content: center;
    margin-bottom: 10px;
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace
} */
#titulo img{
  width: 200px;
}
.icon{
  width: 50px;
}
#logo{
  width: 70px;
}
</style>