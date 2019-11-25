<template>
<div>
  <v-parallax
    dark
    :src="require('../assets/img/1.jpg')"
    alt='Foto de documentos da época da segunda guerra mundial'
    title="Documentos da época"
    class="paralaxe"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class=" tituloHist display-4 font-weight-black mb-4">História</h1>
    
      </v-col>
    </v-row>
  </v-parallax>
   <v-card>
        <v-card-actions class=" white--text corFundoTitleH justify-center">
      <div class="ml-2 fonttitulo semSerif negrito">
          O começo...
      </div>
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
          Podemos considerar que a principal causa que originou a Segunda Guerra Mundial (1939-1945) foi a ideia de Hitler de expandir os domínios territoriais da Alemanha e ampliar, dessa forma, a obtenção de poder e recursos materiais (principalmente matérias-primas). Estes objetivos seriam conquistados, de acordo com as intenções nazistas, através da guerra. Estes objetivos militaristas e expansionistas também se faziam presentes, no final da década de 1930, na Itália fascista de Mussolini e no Japão. Como sabemos somente ideias de governos não são suficientes para causar uma guerra, ainda mais uma de grandes proporções como foi a Segunda Guerra Mundial. Em 1 de setembro de 1939, Hitler coloca em prática seu plano e invade a Polônia. Inglaterra e França declaram guerra contra Alemanha, dando início ao maior conflito bélico de todos os tempos. Forte militarização da Alemanha e da Itália durante a década de 1930. O forte investimento na indústria bélica tinha como objetivo diminuir o alto nível de desemprego, mas também colocar em prática os ideais expansionistas nazifascistas. O Japão também investiu na área militar, pois pretendia conquistar território na Ásia, através da guerra. O sentimento revanchista na Alemanha nazista com relação à derrota na Primeira Guerra Mundial. Hitler pretendia desrespeitar o Tratado de Versalhes e reconquistar territórios perdidos na Primeira Guerra.
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
.paralaxe{background-size: cover}

.fonttitulo{
  font-size: 25px;
}
.corFundoTitleH{
  background-color:  rgb(66, 104, 5);
}
.tituloHist{
  color:  rgb(66, 104, 5);
}
</style>