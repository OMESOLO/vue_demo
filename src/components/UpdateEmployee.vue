<template>
    <div class="update-employee-container">
      <h2 class="update-employee-title">Update Employee</h2>
      <form @submit.prevent="updateEmployee" class="form-horizontal">
        <div class="form-group">
          <label for="employeeID">Employee ID:</label>
          <input type="text" v-model="employee.employeeID" id="employeeID" required>
        </div>
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" v-model="employee.firstName" id="firstName" required>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" v-model="employee.lastName" id="lastName" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="employee.email" id="email" required>
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <input type="text" v-model="employee.gender" id="gender" required>
        </div>
        <div class="form-group">
          <label for="departmentID">Department ID:</label>
          <input type="text" v-model="employee.departmentID" id="departmentID" required>
        </div>
        <div class="form-group">
          <label for="jobTitle">Job Title:</label>
          <input type="text" v-model="employee.jobTitle" id="jobTitle" required>
        </div>
        <button type="submit">Update Employee</button>
      </form>
      <router-link to="/" class="back-btn">Back To Employee List</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        employee: {
          employeeID: '',
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          departmentID: '',
          jobTitle: ''
        }
      };
    },
    methods: {
      async fetchEmployee(employeeId) {
        try {
          const response = await axios.get(`http://localhost:5069/api/Employee/GetEmployee/${employeeId}`);
          this.employee = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async updateEmployee() {
        try {
          await axios.put(`http://localhost:5069/api/Employee/UpdateEmployee/${this.employee.employeeID}`, this.employee);
          alert('Employee updated successfully');
        } catch (error) {
          console.error(error);
          alert('Failed to update employee');
        }
      }
    },
    mounted() {
      const employeeId = this.$route.params.id;
      this.fetchEmployee(employeeId);
    }
  };
  </script>
  
  <style scoped>
  .update-employee-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .update-employee-title {
    color: rgb(237, 101, 101);
    text-align: center;
  }
  
  .form-horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 48%;
  }
  
  .form-group.full-width {
    width: 100%;
  }
  
  label {
    margin-bottom: 5px;
    color: black;
  }
  
  input[type="text"],
  input[type="email"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 16px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 70%; 
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .back-btn {
    padding: 7px 20px;
    border: 2px solid red;
    background-color: rgb(223, 64, 64);
    color: whitesmoke;
    border-radius: 4px;
    cursor: pointer;
    margin-top: px;
  }
  
  .back-btn:hover {
    background-color: rgb(223, 64, 64);
  }
  </style>
  