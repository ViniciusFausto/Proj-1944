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
   <v-card class="cordeFundoL">
      <v-img
      :src="card.src"
      height="400px"
      @click="show = !show"
    ></v-img>


    <v-card-title style="height:60px"  class="black semSerif white--text align-self-center justify-center display-1">
      <div>{{card.title}}</div>
    </v-card-title>

    
    <v-card-actions class="justify-center vermelhao">
      <div class="ml-2 white--text negrito semSerif">
        {{card.text}}
      </div>

      <v-btn
        icon
        @click="card.show = !card.show"

      > 
        <v-icon class="white--text">{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>
 </v-card>
    <v-expand-transition>
      <div v-show="card.show">
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
      { show: false,title: 'Hiroshima', src: require('../assets/IMG LUGARES/2.png'), 
      text:'Hiroshima, Japão',subtext:"Atingida por uma bomba atômica em 6 de agosto de 1945.Foto da esquerda: 1945 Foto da direita: 2016", flex: 12, },
      { show: false,title: 'Dresden', src: require('../assets/IMG LUGARES/4.png'),
      text:'Dresden (Alemanha)',subtext:"Alvo de ataques aéreos dos Aliados entre 13 e 15 de 1945. Foto da esquerda: 1945 Foto da direita: 2011", flex: 12, },
      { show: false,title: 'Hamburgo', src: require('../assets/IMG LUGARES/antesDepois.png'),
      text:'Hamburgo (Alemanha)',subtext:"Alvo de grandes bombardeios dos aliados.Foto da esquerda: 1943 Foto da direita: 2013", flex: 12 },
      {show: false, title: 'Nagasaki', src: require('../assets/IMG LUGARES/7.jpg'),
      text:'Nagasaki (Alemanha)',subtext:"Alvo de um ataque de bomba atômica durante a guerra.Foto da esquerda: 1945 foto da direita: 2012", flex: 12, },
    ],
     
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
.cordeFundoL:hover{
  
  -webkit-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
}
.vermelhao{
  background-color: rgb(110, 7, 7);
}
</style>