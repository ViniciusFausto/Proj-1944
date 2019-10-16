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
}
</script>


<style>

</style>