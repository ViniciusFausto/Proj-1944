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
      <v-card class="cordeFundo">
      <v-img
      :src="card.src"
      height="400px"
      @click="show = !show"
    ></v-img>


    <v-card-title style="height:60px"  class="titulofilmes semSerif  align-self-center justify-center display-1">
      <div>{{card.title}}</div>
    </v-card-title>

    
    <v-card-actions class=" justify-center">
      <div class="ml-2 negrito semSerif text--center">
        {{card.text}}
      </div>

      <!-- <div class="flex-grow-1"></div> -->

      <v-btn
        icon
        @click="show = !show"

      > 
        <v-icon class="black--text">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>
    </v-card>
    
    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="fonte serif">
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
      { title: 'Bastardos Inglórios', src: require('../assets/IMG FILMES/bastardos.png'), 
      text:'Veja Mais:',subtext:"Durante a Segunda Guerra Mundial, na França, um grupo de judeus americanos conhecidos como Bastardos espalha o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.", flex: 6, },
      { title: 'Dunkirk', src: require('../assets/IMG FILMES/Dunkirk-banner.png'),
      text:'Veja Mais:',subtext:"Durante a Segunda Guerra Mundial, a Alemanha avança rumo à França e cerca as tropas aliadas nas praias de Dunkirk. Sob cobertura aérea e terrestre das forças britânicas e francesas, as tropas são lentamente evacuadas da praia.", flex: 6, },
      { title: 'O Menino do Pijama Listrado',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/IMG FILMES/o-menino-do-pijama-listrado1.png'),
      text:'Veja Mais:',subtext:"Durante a Segunda Guerra Mundial, Bruno, um garoto de oito anos, e sua família saem de Berlim para residir próximo a um campo de concentração, onde seu pai acaba de se tornar comandante. Infeliz e solitário, ele vagueia fora de sua casa e certo dia encontra Shmuel, um menino judeu de sua idade. Embora a cerca de arame farpado do campo os separem, os meninos começam uma amizade proibida.", flex: 6 },
      { title: 'Resgate do soldado Ryan', src: require('../assets/IMG FILMES/resgate.png'),
      text:'Veja Mais:',subtext:"Ao desembarcar na Normandia, no dia 6 de junho de 1944, o Capitão Miller recebe a missão de comandar um grupo do Segundo Batalhão para o resgate do soldado James Ryan, o caçula de quatro irmãos, dentre os quais três morreram em combate. Por ordens do chefe George C. Marshall, eles precisam procurar o soldado e garantir o seu retorno, com vida, para casa.", flex: 6, },
    ],
     show: false,
  }),
}
</script>

<style>
.serif{
  font-family: serif;
}
.semSerif{
  font-family: sans-serif;
}
.negrito{
  font-weight: bold;
}
.fonte{
  font-size: 17px;
}
.cordeFundo:hover{
  
  -webkit-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
}
.titulofilmes{
  color:white;
  background-color:rgb(4, 4, 49);
}
</style>