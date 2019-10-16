<template>
  <div id="app" >
  <v-container id="inspire">
    <v-container
        class="pa-2"
        fluid
      >
        <v-row>
          <v-col  
            v-for="card in cards"
            :key="card.title"
            cols="12"
            :sm="card.flex"
            class="my-2"
                >
 
      <v-img
      :src="card.src"
      height="400px"
      @click="show = !show"
    ></v-img>


    <v-card-title style="font-family:sans-serif; height:50px"  class="black white--text align-self-center justify-center display-1">
      <div>{{card.title}}</div>
    </v-card-title>

    
    <v-card-actions>
      <div class="ml-2">
        {{card.text}}
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
         {{card.subtext}}
        </v-card-text>
      </div>
    </v-expand-transition>

          </v-col>
        </v-row>
      </v-container>
  </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
    cards: [
      { title: 'Bastardos', src: require('../assets/IMG FILMES/bastardos.png'), 
      text:'www.google.com',subtext:"jadhskhkadhkas", flex: 6, },
      { title: 'Dunkirk', src: require('../assets/IMG FILMES/Dunkirk-banner.png'),
      text:'www.google.com',subtext:"aaaaaaaaaaaaa", flex: 6, },
      { title: 'O Menino do Pijama Listrado',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/IMG FILMES/o-menino-do-pijama-listrado1.png'),
      text:'www.google.com',subtext:"sssssssssss", flex: 6 },
      { title: 'Resgate', src: require('../assets/IMG FILMES/resgate.png'),
      text:'aaaaaaaaa',subtext:"uuuuuuuuuuuuuuuu", flex: 6, },
    ],
     show: false,
  }),
}
</script>

<style>

</style>