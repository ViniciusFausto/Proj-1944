<template>
<div>
  <Menu/>
  <banner-historia/>
  <SubImgHist/>
  <ImgTextoHist/>
</div>
</template>

<script>
import Menu from '../components/Menu.vue';
import BannerHistoria from '../components/BannerHistoria.vue'
import SubImgHist from '../components/SubImgHist.vue'
import ImgTextoHist from '../components/imgTextoHist.vue'

export default {
      components: {
   Menu,BannerHistoria,SubImgHist,ImgTextoHist,
  },
}
</script>


<style>

</style>