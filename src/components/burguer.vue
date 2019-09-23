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
        bottom
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="amber accent-2 text--accent-4 white--text"
          >
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
            <v-list-item>
              <v-list-item-title>Catálogos</v-list-item-title>
            </v-list-item>
 
            <v-list-item>
              <v-list-item-title>Loja</v-list-item-title>
            </v-list-item>
 
            <v-list-item>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
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
.icon{
  width: 50px;
}
a {  text-decoration: none;}
</style>