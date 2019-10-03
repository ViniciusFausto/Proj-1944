<template>
<v-app>
    <v-content>
      <div id="app">
        <router-view />
      </div>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>

import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
