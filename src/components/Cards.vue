<template>
  <div id="app">
  <v-container id="inspire">
    <v-card
      class=""
      
    > 
    <v-container
        class="pa-2"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
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
  
              <v-card-actions>
                <div class="flex-grow-1"></div>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: require('../assets/img/slide3.jpg'), flex: 4 },
      { title: 'Pre-fab homes', src: require('../assets/img/slide3.jpg'), flex: 4 },
      { title: 'Pre-fab homes', src: require('../assets/img/slide3.jpg'), flex: 4 },
      { title: 'Favorite road trips', src: require('../assets/img/slide3.jpg'), flex: 6 },
      { title: 'Best airlines', src: require('../assets/img/slide3.jpg'), flex: 6 },
    ],
  }),
}
</script>

<style>

</style>