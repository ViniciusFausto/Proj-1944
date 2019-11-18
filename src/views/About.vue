<template>
  <div>
    <Menu/>
    <main-sobre/>
  </div>
</template>

<script>
import MainSobre from '../components/MainSobre.vue'
import Menu from '../components/Menu.vue';
export default {
  components:{
    MainSobre,Menu,
  },
   metaInfo: {
    title: "1944 - Sobre",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página Sobre", content: "Página para falar mais profissionalmente sobre o site"},
    ]
  }
}
</script>

<style>

</style>