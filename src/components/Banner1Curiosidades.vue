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
      text:'www.google.com',subtext:"jadhskhkadhkas", flex: 6, },
      { title: 'A Era de Hiter', src: require('../assets/CARDS MENORES/governo2.jpg'),
      text:'www.google.com',subtext:"aaaaaaaaaaaaa", flex: 6, },
      { title: 'A Cobra vai fumar',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/CARDS MENORES/brasil.jpg'),
      text:'www.google.com',subtext:"sssssssssss", flex: 6 },
      { title: 'Curiosidades', src: require('../assets/CARDS MAIORES/guerraCURIOSIDADES.jpg'),
      text:'/Curiosidades',subtext:"uuuuuuuuuuuuuuuu", flex: 6 },
    ],
     show: false,
  }),
}
</script>

<style>

</style>