<template >
  <v-container  
  style="max-width: 100% "
  class="menu black align-center">
        <div><img src="../assets/Menu.svg" alt="" width="100" @click.stop="drawer = !drawer"> </div>
         <div id="titulo">
           <img src="../assets/img/logosite.svg" alt="" srcset="">
         </div>
         <router-link to="/">
         <div class="logo">
           <img src="../assets/img/Icone44.png" id="logo" alt="titulo">
         </div>
         </router-link>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="grey lighten-5"
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="black  white--text"
          >
            <v-list-item>
              <v-list-item-action>
                <img src="../assets/MenuDentro.svg" alt="" width="100" @click.stop="drawer = !drawer">
              </v-list-item-action>
            </v-list-item>
              <router-link to="/">
            <v-list-item>
              <v-list-item-title class="tituloMenu">Página Inicial</v-list-item-title>
            </v-list-item>
            </router-link>
             <router-link to="/historia">
            <v-list-item>
              <v-list-item-title class="tituloMenu">História</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link to="/Curiosidades">
            <v-list-item>
              <v-list-item-title class="tituloMenu">Curiosidades</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link to="/Catalogos">
            <v-list-item>
              <v-list-item-title>Catálogos</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link to="/about">
            <v-list-item>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
            </router-link>
             <v-list-item>
              <v-list-item-title @click="navegarAreaAdm">Área Administrativa</v-list-item-title>
            </v-list-item>
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
    navegarAreaAdm(){
      this.$router.push('/AreaAdm/Login')
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
#logo{
  width: 70px;
}
a {  text-decoration: none;}
</style>