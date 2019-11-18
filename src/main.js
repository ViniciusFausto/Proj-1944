import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-ls'
import router from './router'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css' 
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta);

Vue.use(Storage)
new Vue({
  router,
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')
