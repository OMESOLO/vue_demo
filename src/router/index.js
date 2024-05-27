import { createRouter, createWebHistory } from 'vue-router';
import Employees from '@/components/Employee.vue';
import AddEmployee from '@/components/AddEmployeeForm.vue';
import Departments from '@/components/Department.vue';
import Projects from '@/components/Project.vue';
import AddDepartment from '@/components/AddDepartmentForm.vue'
import AddProject from '@/components/AddProjectForm.vue'
import UpdateEmployee from '@/components/UpdateEmployee.vue';
import UpdateDepartment from '@/components/UpdateDepartment.vue';
import UpdateProject from '@/components/UpdateProject.vue';
import DeleteEmployee from '@/components/DeleteEmployee.vue';
import DeleteDepartment from '@/components/DeleteDepartment.vue';
import DeleteProject from '@/components/DeleteProject.vue';


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

  {
    path: '/updateemployee',
    name: 'UpdateEmployee',
    component: UpdateEmployee
  },

  {
    path: '/updatedepartment', 
    name: 'UpdateDepartment',
    component: UpdateDepartment
  },

  {
    path: '/updateproject',
    name: 'UpdateProject',
    component: UpdateProject
  },

  {
    path: '/deleteemployee', 
    name: 'DeleteEmployee',
    component: DeleteEmployee
  },

  {
    path: '/deletedepartment', 
    name: 'DeleteDepartment',
    component: DeleteDepartment
  },

  {
    path: '/deleteproject', 
    name: 'DeleteProject',
    component: DeleteProject
  }

 


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
