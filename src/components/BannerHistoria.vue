<template>
<div>
  
  <v-card
    class="mx-auto mt-5"
    max-width="1220"
    style="border-radius:0px;"
  >
    <v-img
      alt="Hitler sério"
      src="../assets/img/hitler.png"
      height="300px"
      @click="show = !show"
    ></v-img>


    <v-card-actions>
      <div class=" serif negrito">
       Motivos do início da Segunda Guerra Mundial
      </div>

      

      <v-btn
        icon
        @click="show = !show"
      > 
        <v-icon class="black--text">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text class="serifada fonte">
         Podemos considerar que a principal causa que originou a Segunda Guerra Mundial (1939-1945) foi a ideia de Hitler de expandir os domínios territoriais da Alemanha e ampliar, dessa forma, a obtenção de poder e recursos materiais (principalmente matérias-primas). Estes objetivos seriam conquistados, de acordo com as intenções nazistas, através da guerra. Estes objetivos militaristas e expansionistas também se faziam presentes, no final da década de 1930, na Itália fascista de Mussolini e no Japão. 

 Como sabemos somente ideias de governos não são suficientes para causar uma guerra, ainda mais uma de grandes proporções como foi a Segunda Guerra Mundial. Em 1 de setembro de 1939, Hitler coloca em prática seu plano e invade a Polônia. Inglaterra e França declaram guerra contra Alemanha, dando início ao maior conflito bélico de todos os tempos.

 Forte militarização da Alemanha e da Itália durante a década de 1930. O forte investimento na indústria bélica tinha como objetivo diminuir o alto nível de desemprego, mas também colocar em prática os ideais expansionistas nazifascistas. O Japão também investiu na área militar, pois pretendia conquistar território na Ásia, através da guerra.

 O sentimento revanchista na Alemanha nazista com relação à derrota na Primeira Guerra Mundial. Hitler pretendia desrespeitar o Tratado de Versalhes e reconquistar territórios perdidos na Primeira Guerra.

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
  .serif{
    font-family: sans-serif;
  }
  .serifada{
    font-family: serif;
  }
  .negrito{
    font-weight: bold;
    font-size: 20px;
  }
  .fonte{
  font-size: 17px;
}
.negritoTitleCard{
  font-weight: bolder;
  font-size: 35px;
  height: 70px;
  background-color:  rgb(43, 29, 8);
  
}
</style>