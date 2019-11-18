<template>
  <div id="app" >
  <v-container
    fluid
    class="text-center font-weight-light"
    style="font-size:40px"
  ><img width="40px" src="../assets/img/star.svg">Saiba mais sobre a 2º Guerra Mundial<img width="40px" src="../assets/img/star.svg">
  <hr class="linha">
  </v-container>
  <v-container
    fluid
    class="text-center font-weight-bold"
    style="font-size:20px"
  >Conheça nossos principais conteúdos abaixo
  </v-container>
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
            <v-card class="destaques">
              <v-img
                :alt="card.alt"
                :src="card.src"
                class="white--text"
                height="200px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title
                  class="fill-height align-end "
                  v-text="card.title"
                ></v-card-title>
              </v-img>
  
              <v-card-actions class="verde">
              <v-btn
                class="btn"
                text
                color="white"
                :href="card.href"
              >
                Conhecer
              </v-btn>
              </v-card-actions>
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
      href:'/filmes', flex: 4,alt:'filme menino do pijama listrado' },
      { title: 'A Era de Hiter', src: require('../assets/CARDS MENORES/governo2.jpg'),
      href:'/historia', flex: 4,alt:'hitler fazendo sinal' },
      { title: 'A Cobra vai fumar', src: require('../assets/CARDS MENORES/brasil.jpg'),
      href:'/Curiosidades', flex: 4,alt:'exercito brasileiro' },
      { title: 'Curiosidades', src: require('../assets/CARDS MAIORES/ovin.png'),
      href:'/historia', flex: 6,alt:'aeronave alienigena' },
      { title: 'Governo', src: require('../assets/CARDS MAIORES/governo3.jpg'),
      href:'/historia', flex: 6,alt:'hitler e seus seguidores'  },
    ],
  }),
}
</script>

<style>
.btn{
  background-color: black;
}
.btn:hover{
  background-color: grey;
}
.destaques:hover{
  -webkit-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
box-shadow: 0px 2px 7px 5px rgba(0,0,0,0.75);
}
.destaques .v-card__title:hover:hover{
  color: rgb(116, 184, 8);
  font-weight: bolder;
}
.linha{
  width: 50%;
  margin: 0 auto;
}
.verde{
  background-color: rgb(43, 66, 5);
}
</style>