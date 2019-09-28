<template>
<div class="grey lighten-5" >
  <Menu/>
  <Carousel/>
  <Cards/>
  <BannerLoja/>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Cards from '../components/Cards.vue';
import BannerLoja from '../components/BannerLoja.vue';
import Menu from '../components/Menu.vue';

export default {
      components: {
   Menu,Carousel,Cards,BannerLoja,
  },
}
</script>


<style>
</style>