<template>
  <div class="add-project-container">
    <h1 class="add-project-title">Add Projects</h1>
    <form @submit.prevent="submitProjects" class="form-horizontal">

      <div v-for="(proj, index) in projects" :key="index" class="project-form">
        <div class="form-group">
          <label :for="'projectName' + index">Project Name</label>
          <input type="text" :id="'projectName' + index" v-model="proj.projectName" required>
        </div>

        <div class="form-group">
          <label :for="'departmentid' + index">Department ID</label>
          <input type="text" :id="'departmentid' + index" v-model="proj.departmentid" required>
        </div>

        <div class="form-group">
          <label :for="'startDate' + index">Start Date</label>
          <input type="datetime-local" :id="'startDate' + index" v-model="proj.startDate" required>
        </div>

        <div class="form-group">
          <label :for="'endDate' + index">End Date</label>
          <input type="datetime-local" :id="'endDate' + index" v-model="proj.endDate" required>
        </div>

        <button type="button" @click="removeProject(index)" class="remove-btn">Remove Project</button>
      </div>

      <div class="form-group full-width">
        <router-link to="/projects" class="back-btn">Back to Projects List</router-link>
        <button type="submit" class="submit-btn">Add Projects</button>
        <button type="button" @click="addProjectForm" class="add-btn">Add Another Project</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          projectName: '',
          departmentid: '',
          startDate: '',
          endDate: ''
        }
      ]
    };
  },
  methods: {
    addProjectForm() {
      this.projects.push({
        projectName: '',
        departmentid: '',
        startDate: '',
        endDate: ''
      });
    },
    removeProject(index) {
      this.projects.splice(index, 1);
    },
    async submitProjects() {
      try {
        const response = await fetch('http://localhost:5069/api/Project/AddProject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.projects)
        });
        if (!response.ok) {
          throw new Error('Failed to add projects');
        }
        alert('Projects added successfully!');
        this.resetForm();
      } catch (error) {
        console.error('Error adding projects:', error);
        alert('Error adding projects: ' + error.message);
      }
    },
    resetForm() {
      this.projects = [
        {
          projectName: '',
          departmentid: '',
          startDate: '',
          endDate: ''
        }
      ];
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
  margin-top: 15%;
}

.add-project-title {
  color: rgb(237, 101, 101);
  text-align: center;
  margin-bottom: 20px;
}

.form-horizontal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project-form {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
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
  display: block;
}

input[type="text"],
input[type="datetime-local"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 16px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 0;
}

button:hover {
  opacity: 0.9;
}

.back-btn {
  padding: 10px 20px;
  border: 2px solid red;
  background-color: rgb(223, 64, 64);
  color: whitesmoke;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 15px;
}

.back-btn:hover {
  background-color: rgb(200, 50, 50);
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
}

.submit-btn:hover {
  background-color: #45a049;
}

.add-btn {
  background-color: #008CBA;
  color: white;
}

.add-btn:hover {
  background-color: #007bb5;
}

.remove-btn {
  background-color: #f44336;
  color: white;
}

.remove-btn:hover {
  background-color: #e53935;
}
</style>
