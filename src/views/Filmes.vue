<template>
    <div>
        <Menu/>
        <CardsFilmes/>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import CardsFilmes from '../components/CardsFilmes.vue'
export default {
    components:{
        Menu,CardsFilmes,
    },
     metaInfo: {
    title: "1944 - Filmes",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página Filmes", content: "Página para mostrar os filme que relatam momentos da segunda guerra mundial"},
    ]
  }
}
</script>

<style>

</style>