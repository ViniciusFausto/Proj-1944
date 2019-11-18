<template>
  <div>
      <menu-adm/>
      <Form/>
  </div>
</template>

<script>
import Form from '../../components/Form.vue'
import MenuAdm from '../../components/MenuAdm.vue'
export default {
components:{
    Form,MenuAdm,
},
     metaInfo: {
    title: "1944 - Formulário",
    content:"width=device-width,initial-scale=1.0",
    name:'viewport',
    charset: "utf-8",
    author:"Vinicius, Jaime, joão, Vitor",
    meta: [
      { name: "Página de formulário", content: "Página de formulário para cadastro de usuários"},
    ]
  }
}
</script>

<style>

</style>