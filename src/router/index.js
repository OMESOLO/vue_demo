import { createRouter, createWebHistory } from 'vue-router';
import Employees from '@/components/Employee.vue';
import AddEmployee from '@/components/AddEmployeeForm.vue';


const routes = [

  {
    path: '/',
    redirect: '/employees'
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/addemployee',
    name: 'AddEmployee',
    component: AddEmployee
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
