<template>
<v-app>
    <v-content>
      <Menu/>
      <div id="app">
        <router-view />
      </div>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Menu,Footer,
  },
  data: () => ({
    //
  }),
};
</script>
