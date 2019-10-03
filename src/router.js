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
      path:'/AreaAdm/Login',
      name:'painel-login',
      component: () => import('./views/AreaAdm/Login.vue')
    },
    {
      path:'/AreaAdm/Index',
      name:'painel-Inicial',
      component: () => import('./views/AreaAdm/Index.vue')
    },
    {
      path:'/AreaAdm/ProdutoAdm',
      name:'painel-produto',
      component: () => import('./views/AreaAdm/ProdutoAdm.vue')
    },
    {
      path:'/AreaAdm/Formulario',
      name:'painel-formulario',
      component: () => import('./views/AreaAdm/Formulario.vue')
    },
    {
      path:'/AreaAdm/FormularioFilmes',
      name:'painel-formularioFimes',
      component: () => import('./views/AreaAdm/FormularioFilmes.vue')
    },
    {
      path:'/AreaAdm/FormularioCuri',
      name:'painel-formularioCuri',
      component: () => import('./views/AreaAdm/FormularioCuri.vue')
    },
    {
      path:'/AreaAdm/UsuarioAdm',
      name:'painel-usuario',
      component: () => import('./views/AreaAdm/UsuarioAdm.vue')
    },
    {
      path:'/AreaAdm/FilmeAdm',
      name:'painel-filme',
      component: () => import('./views/AreaAdm/FilmeAdm.vue')
    },
    {
      path:'/AreaAdm/CuriAdm',
      name:'painel-curi',
      component: () => import('./views/AreaAdm/CuriAdm.vue')
    },
    {
      path:'/Curiosidades',
      name:'Curiosidades',
      component: () => import('./views/Curiosidades.vue')
    },
    {
      path:'/Catalogos',
      name:'Catálogos',
      component: () => import('./views/Catalogos.vue')
    }
  ]
})
