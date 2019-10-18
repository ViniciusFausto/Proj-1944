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
      <router-link :to="{path: card.to}">
      <v-img
      :src="card.src"
      height="200px"
      @click="show = !show"
    ></v-img>
    </router-link>

    <v-card-title style="font-family:sans-serif" class="black white--text justify-center display-1">
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
      { title: 'Filmes', src: require('../assets/CARDS MENORES/menino.jpg'), 
      text:'Obras visuais que retratam períodos da guerra',subtext:"Clique na imagem para navegar até nossa página onde você conhecerá os melhores filmes referentes a esse período.", flex: 6, to:'/filmes' },
      { title: '#Hitler&Aliens', src: require('../assets/CARDS MENORES/governo2.jpg'),
      text:'Ele tinha apoio de extraterrestres?',subtext:"Durante a Segunda Guerra Mundial surgiram informações fortes indicando que as tropas de Adolf Hitler, da Alemanha e de Benito Mussolini, da Itália, teriam abatido naves alienígenas e utilizado para fazer engenharia reversa. A intenção segundo alguns historiadores era montar uma tecnologia imbatível. Depois, Estados Unidos e Rússia passaram a ter o mesmo pensamento.Existe ainda uma teoria que aponta para uma parceria entre os nazistas e a sociedade reptiliana. Esse acordo teria mudado completamente o patamar da Alemanha e ajudado na recuperação após a Primeira Guerra Mundial. Teriam recebido máquinas de origem extraterrestre e livros para ensinar a operação destes equipamentos. Antes que a Alemanha recebe naves que chegariam a velocidade da luz os Estados Unidos descobriram o plano.", flex: 6, },
      { title: 'A Cobra vai fumar',subtext:"bbbbbbbbbbbbbbbbbbbb", src: require('../assets/CARDS MENORES/brasil.jpg'),
      text:'O Exercito Brasileiro na segunda guerra',subtext:"A cobra vai fumar é uma expressão popular que significa algo difícil de ser realizado, e se acontecer, sérios problemas podem surgir. Ex: Se saírem com meu carro a cobra vai fumar. A expressão A cobra vai fumar tem o mesmo significado da expressão, O bicho vai pegar, que é mais usada hoje em dia.", flex: 6 },
      { title: 'Lugares Afetados', src: require('../assets/IMG CARROSSEL/antesDepois.png'),
      text:'Conheça os alvos de ataque durante a segunda guerra',subtext:"Muitas cidades sentiram o terror das batalhas duradouras da guerra. Clique na imagem acima e veja como algumas delas estão hoje em dia.", flex: 6, to:'/lugares' },
    ],
     show: false,
  }),
}
</script>

<style>

</style>