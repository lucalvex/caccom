import { createRouter, createWebHistory } from 'vue-router';
import Caccom from '../pages/Caccom.vue';
import EmpresaJunior from '../pages/EmpresaJunior.vue';
import AssociacaoEgressos from '../pages/AssociacaoEgressos.vue';

const routes = [
  { path: '/', component: Caccom },      
  { path: '/empresajunior', component: EmpresaJunior },  
  { path: '/associacaoegressos', component: AssociacaoEgressos },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
