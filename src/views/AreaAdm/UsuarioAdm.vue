<template>
<div>
  <menu-adm/>
  <ListUserAdm/>
</div>
</template>

<script>
import MenuAdm from '../../components/MenuAdm.vue'
import ListUserAdm from '../../components/ListUserAdm.vue'
export default {
    components:{
        MenuAdm,ListUserAdm,
    },
     metaInfo: {
    title: "1944 - Lista de Usuários",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página lista de Usuários", content: "Página feita para listar os usuários cadastrados no site"},
    ]
  }
}
</script>

<style>

</style>