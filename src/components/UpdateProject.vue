<template>
    <div class="update-project">
      <h1>Update Project</h1>
      <form @submit.prevent="updateProject">
        <div class="form-group">
          <label for="projectID">Project ID:</label>
          <input type="text" id="projectID" v-model="updatedProject.projectID" required>
        </div>
        <div class="form-group">
          <label for="projectName">Project Name:</label>
          <input type="text" v-model="updatedProject.projectName" id="projectName" required>
        </div>
        <div class="form-group">
          <label for="departmentID">Department ID:</label>
          <input type="text" v-model="updatedProject.departmentID" id="departmentID" required>
        </div>
        <div class="form-group">
          <label for="startDate">Start Date:</label>
          <input type="date" id="startDate" v-model="updatedProject.startDate" required>
        </div>
        <div class="form-group">
          <label for="endDate">End Date:</label>
          <input type="date" id="endDate" v-model="updatedProject.endDate" required>
        </div>
        <button type="submit">Update Project</button>
      </form>
      <router-link to="/projects" class="back-btn">Back To Project List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProject',
    data() {
      return {
        updatedProject: {
          projectID: '',
          projectName: '',
          departmentID: '',
          startDate: '',
          endDate: ''
        }
      };
    },
    methods: {
      async updateProject() {
        try {
          const response = await fetch('http://localhost:5069/api/Project/UpdateProject', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.updatedProject)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert('Project updated successfully!');
          // Clear form after successful update
          this.updatedProject = {
            projectID: '',
            projectName: '',
            departmentID: '',
            startDate: '',
            endDate: ''
          };
        } catch (error) {
          console.error('Error updating project:', error);
          alert('Error updating project: ' + error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .update-project {
    width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    color: black;
  }
  
  input[type="text"],
  select,
  input[type="date"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    color: black;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: green;
    color: #fff;
    cursor: pointer;
    margin-bottom: 5%;
  }
  
  button:hover {
    background-color: rgb(50, 177, 57);
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
  
  .update-project h1 {
    color: black;
  }
  </style>
  