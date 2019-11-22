import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('./views/Historia.vue')
    },
    {
      path: '/lugares',
      name: 'lugares',
      component: () => import('./views/Lugares.vue')
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: () => import('./views/Filmes.vue')
    },
    {
      path: '/AreaAdm/FormularioEdi/:id',
      name:'FormularioEdi',
      component: () => import('./views/AreaAdm/FormularioEdi.vue')
    },
    {
      path:'/AreaAdm/Login',
      name:'painel-login',
      component: () => import('./views/AreaAdm/Login.vue')
    },
    {
      path:'/AreaAdm/Formulario',
      name:'painel-formulario',
      component: () => import('./views/AreaAdm/Formulario.vue')
    },
    {
      path:'/AreaAdm/UsuarioAdm',
      name:'painel-usuario',
      component: () => import('./views/AreaAdm/UsuarioAdm.vue')
    },
    {
      path:'/Curiosidades',
      name:'Curiosidades',
      component: () => import('./views/Curiosidades.vue')
    },
    
  ]
})
