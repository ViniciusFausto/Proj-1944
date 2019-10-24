<template>
  <v-carousel height="389px" >
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
            href:'/Curiosidades', alt:'Lugar destruido pela guerra'
          },
          {
            src: require('../assets/IMG CARROSSEL/dunkirk.jpg'),
            href:'/Curiosidades', alt:'Filme sobre a segunda guerra'
          },
          {
            src: require('../assets/IMG CARROSSEL/nave3.jpg'),
            href:'/Curiosidades', alt: 'aeronave da época'
          },
          {
            src: require('../assets/IMG CARROSSEL/slide4.png'),
            href:'/historia', alt: 'Hitler'
          },
        ],
      }
    },
  }
</script>
<style>
</style>