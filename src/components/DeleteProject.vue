<template>
    <div class="delete-project">
      <h1>Delete Project</h1>
      <div class="form-group">
        <label for="projectId">Project ID:</label>
        <input type="text" v-model="projectId" class="form-control" id="projectId" placeholder="Enter Project ID">
      </div>
      <button @click="deleteProject" class="delete-btn">Delete</button>
      <router-link to="/projects" class="back-btn">Back To Project List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projectId: ''
      };
    },
    methods: {
      async deleteProject() {
        try {
          const response = await fetch(`http://localhost:5069/api/Project/DeleteProject/${this.projectId}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Project deleted successfully');
          this.projectId = '';
        } catch (error) {
          console.error('Error deleting project:', error);
          alert('Error deleting project: ' + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .delete-project {
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
    margin-top: 20px;
  }
  
  .back-btn:hover {
    background-color: green;
  }
  </style>
  