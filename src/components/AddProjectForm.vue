<template>
    <div class="add-project-container">
      <h1 class="add-project-title">Add Project</h1>
      <form @submit.prevent="addProject" class="form-horizontal">

        <div class="form-group">
          <label for="projectName">ProjectName</label>
          <input type="text" id="projectName" v-model="project.projectName" required>
        </div>

        <div class="form-group">
          <label for="departmentid">DepartmentID</label>
          <input type="text" id="departmentid" v-model="project.departmentid" required>
        </div>
    
        <div class="form-group">
            <label for="startDate">StartDate</label>
            <input type="datetime-local" id="startDate" v-model="project.startDate" required>
        </div>

        <div class="form-group">
            <label for="endDate">EndDate</label>
            <input type="datetime-local" id="endDate" v-model="project.endDate" required>
        </div>
    
        <div class="form-group full-width">
          <router-link to="/projects" class="back-btn">Back to Projects List</router-link>
          <button type="submit">Add Project</button>
  
          
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        project: {
          projectName: '',
          departmentid: '',
          starDate: '',
          endDate: ''
        }
      };
    },
    methods: {
      addProject() {
        fetch('http://localhost:5069/api/Project/AddProject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.project)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to add project');
          }
          return response.json();
        })
        .then(data => {
          console.log('Project added:', data);
        })
        .catch(error => {
          console.error('Error adding project:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .add-project-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .add-project-title {
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
    display: flex;
    justify-content: space-between;
    align-items: center; 
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
    margin-top: 10px;
    margin-left: 62%; 
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
  }
  
  .back-btn:hover {
    background-color: rgb(223, 64, 64);
  }
  
  </style>
  