import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// menu
import VueSimpleContextMenu from './views/menu/index.js'
Vue.component('vue-simple-context-menu', VueSimpleContextMenu)
// menu fin

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//Vue.use( VueAxios);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
