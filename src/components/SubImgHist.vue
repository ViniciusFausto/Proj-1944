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
                  class="fill-height align-end"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
  
              
    <v-card-text
      class="black--text"
       v-text="card.texto" >
    </v-card-text>
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
      { title: 'Hitler', src: require('../assets/CARDS MAIORES/guerraCURIOSIDADES.jpg'), flex: 6,
      texto:"sahdklhkshkjahsdjkhjadkhadshjkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"},
      { title: 'Guerraaa', src: require('../assets/CARDS MAIORES/governo3.jpg'), flex: 6,
        texto:"texto card 2"  },
    ],
  }),
}
</script>

<style>

</style>