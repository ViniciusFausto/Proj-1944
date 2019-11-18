<template>
    <div>
        <Menu/>
        <CardsLugares/>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import CardsLugares from '../components/CardsLugares.vue'
export default {
    components:{
        Menu,CardsLugares,
    },
    metaInfo: {
    title: "1944 - Lugares Históricos",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página Lugares Afetados", content: "Página para mostrar os lugares afetados pela guerra"},
    ]
  }
}
</script>

<style>

</style>