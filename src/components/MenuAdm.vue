<template >
  <v-container 
  class="menu grey darken-4 align-center"
   style="max-width: 100%;">
          <div><img src="../assets/Menu.svg" alt="" width="40" @click.stop="drawer = !drawer"> </div>
         <div id="titulo">
           <img src="../assets/img/logosite.svg" alt="" srcset="">
         </div>
         <router-link to="/">
         <div class="logo">
           <img src="../assets/img/Icone44.png" id="logo" alt="">
         </div>
         </router-link>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        height="100%"
        temporary
    
      >  <v-list-item>
              <v-list-item-action>
                <img src="../assets/MenuDentro.svg" alt="" width="40" @click.stop="drawer = !drawer">
              </v-list-item-action>
            </v-list-item>
              <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">{{user.nome}}</v-list-item-title>
              <v-list-item-subtitle><a :href="`mailto:${user.email}`">{{ user.email }}</a></v-list-item-subtitle>
            </v-list-item-content>
          
          </v-list-item>
        </v-list>
      

      <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="white--text black"
          >
            <router-link to="/AreaAdm/UsuarioAdm">
            <v-list-item>
              <v-list-item-title>Usuários</v-list-item-title>
            </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
              
        <v-btn class="ml-2" icon @click="sair">
         <v-span>Sair</v-span>
        </v-btn>
      
      </v-navigation-drawer>
  </v-container>

</template> 

<script>
export default {
  computed:{
    user(){
      return this.$ls.get('user')
    }
  },
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
    },
    sair () {
      this.$ls.remove('user')
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
/* #titulo img{
  width: 100px;
} */
#logo{
  width: 70px;
}
</style>