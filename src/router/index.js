import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';

import EditarPersona from '../views/persona/Editar.vue';
import Nuevo from '../views/persona/Nuevo.vue';
import Usuario from '../views/persona/Usuario.vue';

/** llamar al archivo de rutas */
import UsuarioPrincipal from '../views/usuario/principal.vue'
import UsuarioAdicionar from '../views/usuario/adicionar.vue'
import Menu from '../views/menu/App.vue'

/** procesos * */
import ProcesosPrincipal from '../views/procesos/principal.vue'
import ProcesosAdicionar from '../views/procesos/adicionar.vue'
import ProcesosEditar from '../views/procesos/Editar.vue'
import ProcesosAsignar from '../views/procesos/asignar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: Usuario
  }
  ,
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/persona/editar/:id',
    name: 'EditarPersona',
    component: EditarPersona
  },
  {
    path: '/persona/nuevo',
    name: 'Nuevo',
    component: Nuevo
  }, {
    path: '/usuarioprincipal',
    name: 'usuarioprincipal',
    component: UsuarioPrincipal
  }, {
    path: '/usuarioadicionar',
    name: 'usuarioadicionar',
    component: UsuarioAdicionar
  }, {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  /** procesos * */
  {
    path: '/procesosprincipal',
    name: 'procesosprincipal',
    component: ProcesosPrincipal
  },{
    path: '/procesosadicionar',
    name: 'procesosadicionar',
    component: ProcesosAdicionar
  },  {
    path: '/procesos/editar/:codp',
    name: 'ProcesosEditar',
    component: ProcesosEditar
  }, {
    path: '/procesosasignar',
    name: 'ProcesosAsignar',
    component: ProcesosAsignar
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
