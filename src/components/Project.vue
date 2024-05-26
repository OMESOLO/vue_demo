<template>
    <div class="projects">
      <h1>Projects List</h1>
      <div class="search-box">
        <select v-model="searchDepartment" class="search-select">
          <option value="">All Departments</option>
          <option v-for="department in departments" :value="department.departmentName" :key="department.DepartmentID">{{ department.departmentName }}</option>
        </select>
        <input type="text" v-model="searchQuery" placeholder="Search Project" class="search-input">
      </div>
      <div class="add-project-btn-container">
        <router-link class="add-project-btn" to="/addproject">Add Project</router-link>
      </div>
      <table >
        <thead>
          <tr>
            <th>ProjectName</th>
            <th>DepartmentName</th>
            <th>StartDate</th>
            <th>EndDate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in filteredProjects" :key="project.ProjectID">
            <td>{{ project.projectName }}</td>
            <td>{{ project.departmentName }}</td>
            <td>{{ project.startDate }}</td>
            <td>{{ project.endDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <script>
  export default {
    
    name: 'Project',
    data() {
      return {
        projects: [],
        departments: [], 
        searchQuery: '',
        searchDepartment: '' 
      };
    },
    created() {
      this.fetchProjects();
      this.fetchDepartments(); 
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await fetch('http://localhost:5069/api/Project/GetProject');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.projects = data;
        } catch (error) {
          console.error('Error fetching prjects:', error);
          alert('Error fetching projects: ' + error.message);
        }
      },
      async fetchDepartments() {
        try {
          const response = await fetch('http://localhost:5069/api/Department/GetDepartment');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.departments = data;
        } catch (error) {
          console.error('Error fetching departments:', error);
          alert('Error fetching departments: ' + error.message);
        }
      }
    },
    computed: {
  filteredProjects() {
    const query = this.searchQuery.toLowerCase();
    const selectedDepartment = this.searchDepartment.toLowerCase();
    return this.projects.filter(project => {
      const projectName = project.projectName.toLowerCase();
      const departmentName = project.departmentName.toLowerCase();
      return (selectedDepartment === '' || departmentName === selectedDepartment) &&
             (query === '' || projectName.includes(query));
    });
  }
}

  };
  </script>
  
  <style scoped>
  .projects {
    
    width: 1280px; 
    padding: 15px;
    display: flex;
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    
  }
  
  h1 {
    margin-bottom: 20px;
    color: rgb(237, 101, 101);
  }
  
  table {
    border-collapse: collapse;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    margin: auto;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
    color: black;
  }
  
  th {
    background-color: black;
    color: white;
  }
  
  tbody tr:nth-child(odd) {
    background-color: whitesmoke;
  }
  
  tbody tr:nth-child(even) {
    background-color: pink;
  }
  
  tbody tr:hover {
    background-color: #ddd;
  }
  
  
  .search-box {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .search-select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 16px 0 0 16px;
    font-size: 16px;
  }
  
  .search-input {
    padding: 10px 30px 10px 10px;
    border: 1px solid #ddd;
    border-radius: 0 16px 16px 0;
    width: 200px;
    font-size: 16px;
  }
  
  .search-icon {
    position: absolute;
    right: 10px;
    color: #777;
  }

  .add-project-btn-container {
  width: 100%;
  display: flex;
  justify-content: flex-start; 
  margin-bottom: 20px;
}

  .add-project-btn {
  padding: 10px 20px;
  border: 2px solid #4CAF50;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

.add-project-btn:hover {
  background-color: #45a049;
}
  
  
  </style>