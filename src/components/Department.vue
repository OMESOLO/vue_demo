<template>
    <div class="department">
      <h1>Departments List</h1>
      <div class="search-box">
        <select v-model="searchDepartment" class="search-select">
          <option value="">All Departments</option>
          <option v-for="department in departments" :value="department.departmentName" :key="department.DepartmentID">{{ department.departmentName }}</option>
        </select>
        <input type="text" v-model="searchQuery" placeholder="Search Department" class="search-input">
      </div>
      <div class="add-department-btn-container">
        <router-link class="add-department-btn" to="/adddepartment">Add Department</router-link>
      </div>
      <table >
        <thead>
          <tr>
            <th>DepartmentID</th>
            <th>DepartmentName</th>
            <th>ManagerID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in filteredDepartments" :key="department.departmentID">
            <td>{{ department.departmentID }}</td>
            <td>{{ department.departmentName }}</td>
            <td>{{ department.managerID }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  
  <script>
  export default {
    
    name: 'Department',
    data() {
      return {
        departments: [], 
        searchQuery: '',
        searchDepartment: '' 
      };
    },
    created() {
      this.fetchDepartments(); 
    },
    methods: {
      
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
      filteredDepartments() {
        
        const query = this.searchQuery.toLowerCase();
        const selectedDepartment = this.searchDepartment.toLowerCase();
        return this.departments.filter(department => {
          const departmentName = department.departmentName.toLowerCase();
          return (selectedDepartment === '' || departmentName === selectedDepartment) &&
                 (query === '' || departmentName.includes(query));
        });
      }
    }
  };
  </script>

<style scoped>
.department {
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

.add-department-btn-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 87%;
}

.add-department-btn {
  padding: 10px 20px;
  border: 2px solid #4CAF50;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
}

.add-department-btn:hover {
  background-color: #45a049;
}
</style>