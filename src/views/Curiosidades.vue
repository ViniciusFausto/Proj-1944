<template>
<div>
  <Menu/>
  <img-text-curiosidades/>
  <banner1/>
</div>
</template>

<script>
import Menu from '../components/Menu.vue';
import ImgTextCuriosidades from '../components/ImgTextCuriosidades.vue'
import Banner1 from '../components/Banner1Curiosidades.vue'

export default {
      components: {
   Menu,ImgTextCuriosidades,Banner1,
  },
   metaInfo: {
    title: "1944 - Curiosidades",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página Curiosidades", content: "Página para mostrar curiosidades sobre acontecimentos durante a segunda guerra mundial "},
    ]
  }
}
</script>


<style>

</style>