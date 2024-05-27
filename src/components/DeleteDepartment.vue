<template>
    <div class="delete-department">
      <h1>Delete Department</h1>
      <div class="input-container">
        <label for="department-id">Department ID:</label>
        <input type="text" id="department-id" v-model="departmentId" placeholder="Enter Department ID">
      </div>
      <button @click="deleteDepartment" class="delete-btn">Delete</button>
      <div v-if="deleteStatus" class="success-message">
        Department deleted successfully.
      </div>
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      <router-link to="/departments" class="back-btn">Back To Departments List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        departmentId: '',
        deleteStatus: false,
        error: ''
      };
    },
    methods: {
      async deleteDepartment() {
        try {
          const response = await fetch(`http://localhost:5069/api/Department/DeleteDepartment/${this.departmentId}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Error deleting department');
          }
          this.deleteStatus = true;
        } catch (error) {
          console.error('Error deleting department:', error);
          this.error = 'Error deleting department: ' + error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .delete-department {
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
    border: 2px solid red;
    background-color: red;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 9%;
  }
  
  .delete-btn:hover {
    background-color: red;
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
    border: 2px solid green;
    background-color: green;
    color: whitesmoke;
    border-radius: 4px;
    cursor: pointer;
    margin-top: px;
  }
  
  .back-btn:hover {
    background-color: green;
  }
  </style>
  