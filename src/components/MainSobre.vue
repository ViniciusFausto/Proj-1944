<template>
  <div data-app="true" class="about">
    <v-container>
      <v-row>
        <v-col
        cols="12"
        md="4"
        >
          <h1 align="center" class="semSerif negrito">Nossa História</h1> 
          <v-divider></v-divider>
          <p class="serif">
            Somos um grupo de entusiastas nos meio histórico e estudantes no meio front-end, assim decidimos juntar tudo isso em um único trabalho, focando em transmitir parte importante do conhecimento histórico que foram os anos de 1914 à 1945, época marcada pelas duas maiores guerras que a humanidade já viveu. 
          </p>
        </v-col>
        <v-col 
        cols="12"
        md="8"
        class="d-flex">
        <!--O video ta responsivo, mas não sei se funciona pra videos fora do youtube-->
            <div class="iframe-container">
              <video controls src="../assets/video.mp4" width="800px" height="400px"></video>
            </div>  
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
.serif{
  font-family: serif;
}
.semSerif{
  font-family: sans-serif;
}
.negrito{
  font-weight: bold;
}
</style>
