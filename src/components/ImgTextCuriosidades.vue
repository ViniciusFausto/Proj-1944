<template>
<div>
  <v-parallax
    dark
    :src="require('../assets/img/nazi2.jpg')"
    class="paralaxe"
    
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class=" tituloCuri font-weight-black mb-4">Curiosidades</h1>
    
      </v-col>
    </v-row>
  </v-parallax>
   <v-card>
        <v-card-actions class=" white--text corFundoTitleC justify-center">
      <div class="ml-2 fonttitulo semSerif negrito">
          Veja mais sobre uma das armas mais mortíferas já criadas pelo homem
      </div>

      <!-- <div class="flex-grow-1"></div> -->

      <v-btn
        icon
        @click="show = !show"
      > 
        <v-icon class="white--text">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="serif fonte">
         A Alemanha nazista desenvolveu vários projetos de tanques durante a Segunda Guerra Mundial, além, é claro, dos tanques capturados e outros importados de que fez uso. As forças de tanques alemãs obtiveram bastante sucesso, sucesso esse mais relacionado às inovações táticas desenvolvidas pelos seus estrategistas do quê pela qualidade dos tanques. De fato, muitos desses tanques tinham uma estrutura ultrapassada, se comparada às dos tanques aliados, mas mesmo assim, correspondiam produzindo mais baixas do que sofriam na maioria dos confrontos, devido ao impressionante treinamento por qual os soldados alemães passaram, além das excelentes táticas usadas pelas forças alemãs, mas quando se tratava de um duelo de tanque contra tanque, raramente os alemães venciam.
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
 
  </div>
</template>
<script>
export default {
        data: () => ({
      show: false,
    }),
  
}
</script>

<style>
.paralaxe{background-size: cover}

.fonttitulo{
  font-size: 25px;
}
.corFundoTitleC{
  background-color:   rgb(194, 104, 2);
}
.tituloCuri{
  color:   rgb(194, 104, 2);;
  font-size: 110px;
}
@media(max-width: 700px){
  .tituloCuri{
    font-size: 70px!important;
  }
}
@media(max-width: 500px){
  .tituloCuri{
    font-size: 50px!important;
  }
}
</style>