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
}
</script>


<style>

</style>