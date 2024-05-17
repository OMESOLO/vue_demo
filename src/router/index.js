import { createRouter, createWebHistory } from 'vue-router';
import Employees from '@/components/Employee.vue';

const routes = [
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
