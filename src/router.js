import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Tabla from "./views/Tabla.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: App,
  },
  {
    path: "/views",
    name: "tabla",
    component: Tabla,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;