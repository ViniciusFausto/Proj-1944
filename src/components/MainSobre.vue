<template>
  <div data-app="true" class="about">
    <v-container>
      <v-row>
        <v-col
        cols="12"
        md="4"
        >
          <h1 align="center">Nossa História</h1> 
          <v-divider></v-divider>
          <p>
            Somos um grupo de entusiastas nos meio histórico e estudantes no meio front-end, assim decidimos juntar tudo isso num único trabalho, focando em transmitir parte importante do conhecimento histórico que foi os anos de 1914 à 1945, época marcada pelas duas maiores guerras que a humanidade já viveu. 
          </p>
        </v-col>
        <v-col 
        cols="12"
        md="8"
        class="d-flex">
        <!--O video ta responsivo, mas não sei se funciona pra videos fora do youtube-->
            <div class="iframe-container">
              <iframe width="" height="" src="https://www.youtube.com/embed/MfmoIHY7Z-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>  
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col 
        cols="12">
          <h2 align="center">_Nosso grupo_</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="row d-flex flex-column flex-md-row align-center justify-space-around">
          <!--Pensei em colocar aqui fotos nossas, do grupo-->
          <img width="14%" src="../assets/img/usuario.png" alt="">
          <img width="14%" src="../assets/img/usuario.png" alt="">
          <img width="14%" src="../assets/img/usuario.png" alt="">
          <img width="14%" src="../assets/img/usuario.png" alt="">
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
   data: () => ({
      justify: [
        'start',
        'center',
        'end',
        'space-around',
        'space-between',
      ],
    }),
}
</script>

<style>

.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 80%;
}
p{
  font-size: 22px;  
}
img{
  padding-bottom: 12px;
}
</style>
