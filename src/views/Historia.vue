<template>
<div>
  <Menu/>
  <paralaxe/>
  <!-- <banner-historia/> -->
  <SubImgHist/>
</div>
</template>

<script>
import Menu from '../components/Menu.vue';
import paralaxe from '../components/paralaxeHist.vue'
// import BannerHistoria from '../components/BannerHistoria.vue'
import SubImgHist from '../components/SubImgHist.vue'

export default {
      components: {
   Menu,SubImgHist,paralaxe,
  },
  metaInfo: {
    title: "1944 - História",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página História", content: "Página com conteúdos sobre a segunda guerra mundial" },
    ]
  }
}
</script>


<style>

</style>