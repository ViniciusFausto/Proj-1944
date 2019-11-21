<template>
  
  <div class="footer">
  {{ new Date().getFullYear() }} — <strong>Todos os direitos reservados</strong>
</div>
  
</template>
<script>
export default {

}
</script>

<style>
.footer {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
}
</style>