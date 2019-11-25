<template>
  <v-carousel height="389px"  cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :href="item.href"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/IMG CARROSSEL/antesDepois.png'),
            href:'/lugares', alt:'Lugar destruido pela guerra', title:'Lugar destruido pela guerra',
          },
          {
            src: require('../assets/IMG CARROSSEL/dunkirk.jpg'),
            href:'/filmes', alt:'Filme sobre a segunda guerra',title:'Filme sobre a segunda guerra',
          },
          {
            src: require('../assets/IMG CARROSSEL/nave3.jpg'),
            href:'/Curiosidades', alt: 'aeronave da época',title:'aeronave da época',
          },
          {
            src: require('../assets/IMG CARROSSEL/slide4.png'),
            href:'/historia', alt: 'Hitler olhar 43',title:'Hitler olhar 43',
          },
        ],
      }
    },
  }
</script>
<style>
</style>