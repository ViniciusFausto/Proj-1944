<template>
<div>
  
  <v-card
    class="mx-auto"
    max-width="100%"
    style="border-radius:0px;"
  >
    <v-img
      alt="Maior tanque de guerra já criado"
      src="../assets/img/bannerCuri.png"
      height="400px"
      @click="show = !show"
    ></v-img>

    <v-card-title class=" white--text justify-center negritoTitle semSerif ">
      <div>Tanque Gigante da Segunda Guerra Mundial</div>
    </v-card-title>

    <v-card-actions class=" white--text corFundo justify-center">
      <div class="ml-2 semSerif negrito">
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
.serif{
  font-family: serif;
}
.semSerif{
  font-family: Arial, sans-serif;
}
.negritoTitle{
  font-weight: bolder;
  font-size: 35px;
  height: 70px;
  background-color:   rgb(65, 41, 5);
  
}
.negrito{
  font-weight: bold;
  font-size: 20px;
}
.fonte{
  font-size: 17px;
}
.corFundo{
  background-color: rgb(0, 0, 0);
}
</style>