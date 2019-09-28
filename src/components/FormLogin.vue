<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="grey darken-3"
                dark
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <router-link to="/">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon dark left>mdi-arrow-left</v-icon>
                    </v-btn>
                  </template>
                  <span>Página Inicial</span>
                </v-tooltip>
                </router-link>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    v-model="login"
                     @keypress.enter="navegarIndexAdm"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                    @keypress.enter="navegarIndexAdm"
                  ></v-text-field>
                    <v-alert transition="scale-transition" type="error" :value="!!alerta">{{ alerta}}</v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn @click="navegarIndexAdm" color="grey darken-3 white--text">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data(){
      return{
        login:'',
        password:'',
        alerta:''
      }
    },
    
  methods: {
    navegarIndexAdm(){
      if (this.login === 'master' && this.password === '123') {
                this.$ls.set('user', {
          login: this.login,
          nome: 'Master',
          email: 'master.gamer666@gmail.com'
        })
        this.$router.push('/AreaAdm/Index')
      }else{
        this.alerta = 'Usuário ou senha não correspondentes.'
      }
    }
  }
  }
</script>