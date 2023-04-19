import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Tabla from './components/Tabla.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')

const routes = [
  /* cada de declaracion es una ruta */
  {
    path: '/',
    name: 'Vue',
    component: Vue
  }
  ,{
    path: '/tabla',
    name: 'Tabla',
    component: Tabla 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router