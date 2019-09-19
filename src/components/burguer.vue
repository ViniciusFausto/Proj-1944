<template >
  <v-container class="menu">
        <div id="icon"><v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon></div>
         <div id="titulo">
           <h1>1944</h1>
         </div>
         <div class="logo">
           <img src="../assets/img/Icone44.png" id="logo" alt="">
         </div>
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
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>História</v-list-item-title>
            </v-list-item>
 
            <v-list-item>
              <v-list-item-title>Catálogo</v-list-item-title>
            </v-list-item>
 
            <v-list-item>
              <v-list-item-title>Loja</v-list-item-title>
            </v-list-item>
 
            <v-list-item>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </v-container>

</template> 

<script>
import Burguer from '../components/burguer.vue';
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
#titulo{
    align-content: center;
    margin-bottom: 10px;
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace
}
#icon{
  width: 100px;
}
#logo{
  width: 70px;
}
</style>