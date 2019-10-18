<template>
<div class="grey lighten-5" >
  <Menu/>
  <Carousel/>
  <Cards/>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Cards from '../components/Cards.vue';
import Menu from '../components/Menu.vue';

export default {
      components: {
   Menu,Carousel,Cards,
  },
}
</script>


<style>
</style>