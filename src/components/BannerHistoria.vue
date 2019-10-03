<template>
<div>
  
  <v-card
    class="mx-auto mt-5"
    max-width="1220"
    style="border-radius:0px;"
  >
    <v-img
      src="../assets/IMG CARROSSEL/slide4.png"
      height="300px"
    ></v-img>

    <v-card-title style="font-family:calibri" class="black white--text justify-center display-1">
      <div>História</div>
    </v-card-title>

    <v-card-actions>
      <div class="ml-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, rerum necessitatibus nemo deleniti vel facere. Distinctio animi dolor, vero, atque est, culpa consequatur beatae dolore maiores debitis itaque magnam pariatur.
      </div>

      <div class="flex-grow-1"></div>

      <v-btn
        icon
        @click="show = !show"
      > 
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>
<script>
export default {
        data: () => ({
      show: false,
    }),
  
}
</script>

<style>

</style>