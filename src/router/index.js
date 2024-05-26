import { createRouter, createWebHistory } from 'vue-router';
import Employees from '@/components/Employee.vue';
import AddEmployee from '@/components/AddEmployeeForm.vue';
import Departments from '@/components/Department.vue';
import Projects from '@/components/Project.vue';
import AddDepartment from '@/components/AddDepartmentForm.vue'
import AddProject from '@/components/AddProjectForm.vue'



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

  {
    path: '/departments',
    name: 'Departments',
    component: Departments
  },

  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },

  {
    path: '/adddepartment',
    name: 'AddDepartment',
    component: AddDepartment
  },

  {
    path: '/addproject',
    name: 'AddProject',
    component: AddProject
  },

 


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
