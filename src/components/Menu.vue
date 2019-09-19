<template >
<Burguer/>
</template> 

<script>
import Burguer from '../components/burguer.vue';
export default {
   components: {
    Burguer,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
<style>
#fonte{
  font-size: 90px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow';
  color: black;
}
.menu{
  display: flex;
}
.menu .titulo{
  margin: 0 auto;
  align-self: center;
}
.burguer{
  background-color: brown;
}
</style>