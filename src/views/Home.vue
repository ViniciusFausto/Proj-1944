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
  metaInfo: {
    title: "1944 - Inicial",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página Inicial", content: "Página de caminho para o resto dos conteúdos do site"},
    ]
  }
}
</script>


<style>
</style>