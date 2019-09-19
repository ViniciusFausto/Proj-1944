<template>
<div>
  <Carousel/>
  <Cards/>
  <BannerLoja/>
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Cards from '../components/Cards.vue';
import BannerLoja from '../components/BannerLoja.vue'

export default {
      components: {
    Carousel,Cards,BannerLoja,
  },
}
</script>


<style>

</style>