<template>
  <v-carousel height="300px">
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
            href:'www.google.com'
          },
          {
            src: require('../assets/IMG CARROSSEL/dunkirk.jpg')
          },
          {
            src: require('../assets/IMG CARROSSEL/antes.jpg')
          },
          {
            src: require('../assets/img/slide4.jpg')
          },
        ],
      }
    },
  }
</script>
<style>
.banner{
  height: 400px;
}
</style>