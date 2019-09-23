<template>
<div>
  <Menu/>
  <img-text-curiosidades/>
  <sub-img-curiosidades/>
</div>
</template>

<script>
import Menu from '../components/Menu.vue';
import ImgTextCuriosidades from '../components/ImgTextCuriosidades.vue'
import SubImgCuriosidades from '../components/SubImgCuriosidades.vue'

export default {
      components: {
   Menu,ImgTextCuriosidades,SubImgCuriosidades,
  },
}
</script>


<style>

</style>