<template>
    <div class="delete-employee">
      <h1>Delete Employee</h1>
      <div class="input-container">
        <label for="employee-id">Employee ID:</label>
        <input type="text" id="employee-id" v-model="employeeId" placeholder="Enter Employee ID">
      </div>
      <button @click="deleteEmployee" class="delete-btn">Delete</button>
      <div v-if="deleteStatus" class="success-message">
        Employee deleted successfully.
      </div>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <router-link to="/employees" class="back-btn">Back To Employees List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        employeeId: '',
        deleteStatus: false,
        error: ''
      };
    },
    methods: {
      async deleteEmployee() {
        try {
          const response = await fetch(`http://localhost:5069/api/Employee/DeleteEmployee/${this.employeeId}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Error deleting employee');
          }
          this.deleteStatus = true;
        } catch (error) {
          console.error('Error deleting employee:', error);
          this.error = 'Error deleting employee: ' + error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .delete-employee {
    width: 400px;
    margin: auto;
    padding: 20px;
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin-bottom: 20px;
    color: rgb(237, 101, 101);
  }
  
  .input-container {
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .delete-btn {
    padding: 10px 20px;
    border: 2px solid green;
    background-color: green;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 9%;
  }
  
  .delete-btn:hover {
    background-color: green;
  }
  
  .success-message {
    color: #4caf50;
    margin-top: 10px;
  }
  
  .error-message {
    color: #f44336;
    margin-top: 10px;
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
  