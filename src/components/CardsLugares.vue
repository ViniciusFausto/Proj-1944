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
      height="300px"
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
      { title: 'Filmes', src: require('../assets/IMG LUGARES/2.png'), 
      text:'www.google.com',subtext:"jadhskhkadhkas", flex: 12, },
      { title: 'A Era de Hiter', src: require('../assets/IMG LUGARES/4.png'),
      text:'www.google.com',subtext:"aaaaaaaaaaaaa", flex: 12, },
      { title: 'A Cobra vai fumar',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/IMG LUGARES/antesDepois.png'),
      text:'www.google.com',subtext:"sssssssssss", flex: 12 },
      { title: 'Lugares Afetados', src: require('../assets/IMG LUGARES/7.jpg'),
      text:'aaaaaaaaa',subtext:"uuuuuuuuuuuuuuuu", flex: 12, },
    ],
     show: false,
  }),
}
</script>

<style>

</style>