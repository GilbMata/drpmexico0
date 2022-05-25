import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import Contacto from '../views/Contacto.vue';
import ServiciosBaaS from '../views/servicios/ServiciosBaaS.vue';
import ServiciosDRaaS from '../views/servicios/ServiciosDRaaS.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/baas',
    name: 'ServiciosBaaS',
    component: ServiciosBaaS,
  },
  {
    path: '/draas',
    name: 'ServiciosDRaaS',
    component: ServiciosDRaaS,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
