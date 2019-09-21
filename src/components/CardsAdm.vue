<template>
  
  <v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-large  @click="produtos" color="primary" dark>Produto</v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-large   @click="usuarios" color="primary" dark>Usuário</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <total-user-prod/>
  </v-container>
</template>


<script>
import TotalUserProd from './TotalUserProd.vue'
export default {
  components:{
    TotalUserProd,
  },
  methods:{
    produtos(){
      this.$router.push('/AreaAdm/ProdutoAdm')
    },
     usuarios(){
      this.$router.push('/AreaAdm/UsuarioAdm')
    }
  }
}
</script>

<style>

</style>