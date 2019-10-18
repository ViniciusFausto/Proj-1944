<template>
<div>
  <Menu/>
  <banner-historia/>
  <SubImgHist/>
</div>
</template>

<script>
import Menu from '../components/Menu.vue';
import BannerHistoria from '../components/BannerHistoria.vue'
import SubImgHist from '../components/SubImgHist.vue'

export default {
      components: {
   Menu,BannerHistoria,SubImgHist,
  },
}
</script>


<style>

</style>