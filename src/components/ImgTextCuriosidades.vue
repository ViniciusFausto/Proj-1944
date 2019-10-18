<template>
<div>
  
  <v-card
    class="mx-auto"
    max-width="100%"
    style="border-radius:0px;"
  >
    <v-img
      src="../assets/img/bannerCuri.png"
      height="300px"
      @click="show = !show"
    ></v-img>

    <v-card-title style="font-family:calibri" class="black white--text justify-center display-1">
      <div>Tanque Gigante da Segunda Guerra Mundial</div>
    </v-card-title>

    <v-card-actions>
      <div class="ml-2">
          Veja uma das armas mais mortíferas já criadas pelo homem.
      </div>

      <div class="flex-grow-1"></div>

      <v-btn
        icon
        @click="show = !show"
      > 
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
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

</style>