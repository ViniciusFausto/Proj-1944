<template>
  <v-carousel height="300px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
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
            src: require('../assets/img/slide1.jpeg')
          },
          {
            src: require('../assets/img/slide2.png')
          },
          {
            src: require('../assets/img/slide3.jpg')
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