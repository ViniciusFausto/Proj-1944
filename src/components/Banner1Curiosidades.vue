<template>
  <div id="app" >
  <v-container id="inspire">
    <v-container
        class="pa-2 mb-5"
        fluid
      >
        <v-row>
          <v-col  
            v-for="card in cards"
            :key="card.title"
            cols="12"
            :sm="card.flex"
            
          >
      <v-card class="destaquesCuri">
      <router-link :to="{path: card.to}">
      <v-img
      :alt="cards.alt" 
      :src="card.src"
      height="250px"
      @click="show = !show"
    >
    <v-card-title
      class="fill-height align-end caixa "
      v-text="card.title"
    ></v-card-title>
    </v-img>
    </router-link>
    
    <v-card-actions class="back justify-center">
      <div class="ml-2 white--text  negrito semSerif ">
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
        <v-card-text class="serif fonte">
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
      {show: false, title: 'Filmes', src: require('../assets/CARDS MENORES/menino.jpg'),alt:"capa filme menino do pijama listrado", 
      text:'Obras visuais que retratam períodos da guerra',subtext:"Clique na imagem para navegar até nossa página onde você conhecerá os melhores filmes referentes a esse período.", flex: 6, to:'/filmes' },
      {show: false, title: '#Hitler&Aliens', src: require('../assets/CARDS MENORES/governo2.jpg'),alt:"Hitler fazendo saudação nazista",
      text:'Ele tinha apoio de extraterrestres?',subtext:"Durante a Segunda Guerra Mundial surgiram informações fortes indicando que as tropas de Adolf Hitler, da Alemanha e de Benito Mussolini, da Itália, teriam abatido naves alienígenas e utilizado para fazer engenharia reversa. A intenção segundo alguns historiadores era montar uma tecnologia imbatível. Depois, Estados Unidos e Rússia passaram a ter o mesmo pensamento.Existe ainda uma teoria que aponta para uma parceria entre os nazistas e a sociedade reptiliana. Esse acordo teria mudado completamente o patamar da Alemanha e ajudado na recuperação após a Primeira Guerra Mundial. Teriam recebido máquinas de origem extraterrestre e livros para ensinar a operação destes equipamentos. Antes que a Alemanha recebe naves que chegariam a velocidade da luz os Estados Unidos descobriram o plano.", flex: 6, },
      {show: false, title: 'A Cobra vai fumar',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/CARDS MENORES/brasil.jpg'),alt:"Soldados brasileiros",
      text:'O Exercito Brasileiro na segunda guerra',subtext:"A cobra vai fumar é uma expressão popular que significa algo difícil de ser realizado, e se acontecer, sérios problemas podem surgir. Ex: Se saírem com meu carro a cobra vai fumar. A expressão A cobra vai fumar tem o mesmo significado da expressão, O bicho vai pegar, que é mais usada hoje em dia.", flex: 6 },
      {show: false, title: 'Lugares Afetados', src: require('../assets/IMG CARROSSEL/antesDepois.png'),alt:"Lugares afetados pela guerra",
      text:'Conheça os alvos de ataque durante a segunda guerra',subtext:"Muitas cidades sentiram o terror das batalhas duradouras da guerra. Clique na imagem acima e veja como algumas delas estão hoje em dia.", flex: 6, to:'/lugares' },
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
.back{
  background-color:  rgb(0, 0, 0);
}
.caixa{
  text-decoration: none;
 color: white;
}
.v-application a {
   text-decoration: none;
}
.destaquesCuri:hover{
  
  -webkit-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
}
.destaquesCuri .v-card__title:hover:hover{
  color: rgb(194, 104, 2);
  font-weight: bolder;
}
</style>