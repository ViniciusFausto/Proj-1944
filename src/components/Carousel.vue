<template>
  <v-carousel height="386px" >
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
            src: require('../assets/IMG CARROSSEL/nave3.jpg'),
            href:'/Catalogos'
          },
          {
            src: require('../assets/IMG CARROSSEL/dunkirk.jpg'),
            href:'/Curiosidades'
          },
          {
            src: require('../assets/IMG CARROSSEL/antes.jpg'),
            href:'/Curiosidades'
          },
          {
            src: require('../assets/IMG CARROSSEL/slide4.png'),
            href:'/historia'
          },
        ],
      }
    },
  }
</script>
<style>
</style>