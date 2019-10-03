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
          >
            <v-card>
              <v-img
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
  
              <v-card-actions class="black">
              <v-btn
                text
                color="white"
                :href="card.href"
              >
                Gerenciar
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
      href:'/AreaAdm/FormularioFilmes', flex: 4, },
      { title: 'Curiosidades', src: require('../assets/CARDS MENORES/governo2.jpg'),
      href:'/AreaAdm/FormularioCuri', flex: 4 },
      { title: 'Usuários', src: require('../assets/CARDS MENORES/brasil.jpg'),
      href:'/AreaAdm/Formulario', flex: 4 },
    ],
  }),
}
</script>

<style>

</style>