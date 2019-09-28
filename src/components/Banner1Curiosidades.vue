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
            style="-webkit-box-shadow: 0px 7px 21px 0px rgba(0,0,0,0.75)
                  -moz-box-shadow: 0px 7px 21px 0px rgba(0,0,0,0.75)
                  box-shadow: 0px 7px 21px 0px rgba(0,0,0,0.75)" 
                         class="my-2"
                >
       
      <v-img
      :src="card.src"
      height="200px"
    ></v-img>

    <v-card-title style="font-family:calibri" class="black white--text justify-center display-1">
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
  </v-card>
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
      { title: 'Filmes', src: require('../assets/CARDS MENORES/menino.jpg'), 
      text:'www.google.com',subtext:"jadhskhkadhkas", flex: 12, },
      { title: 'A Era de Hiter', src: require('../assets/CARDS MENORES/governo2.jpg'),
      text:'www.google.com',subtext:"aaaaaaaaaaaaa", flex: 12 },
      { title: 'A Cobra vai fumar',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/CARDS MENORES/brasil.jpg'),
      text:'www.google.com',subtext:"sssssssssss", flex: 12 },
      { title: 'Curiosidades', src: require('../assets/CARDS MAIORES/guerraCURIOSIDADES.jpg'),
      text:'/Curiosidades',subtext:"uuuuuuuuuuuuuuuu", flex: 12 },
      { title: 'Governo', src: require('../assets/CARDS MAIORES/governo3.jpg'),
      text:'www.google.com',subtext:"xxxxxxxxxxxxxxxx", flex: 12,  },
    ],
     show: false,
  }),
}
</script>

<style>

</style>