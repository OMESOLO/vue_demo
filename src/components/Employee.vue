<template>
  <div class="employees">
    <h1>Employees List</h1>
    <div class="search-box">
      <select v-model="searchDepartment" class="search-select">
        <option value="">All Departments</option>
        <option v-for="department in departments" :value="department.departmentName" :key="department.DepartmentID">{{ department.departmentName }}</option>
      </select>
      <input type="text" v-model="searchQuery" placeholder="Search Employee" class="search-input">
    </div>
    <table >
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Gender</th>
          <th>DepartmentName</th>
          <th>ProjectName</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filteredEmployees" :key="employee.EmployeeID">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.gender }}</td>
          <td>{{ employee.departmentName }}</td>
          <td>{{ employee.projectName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
export default {
  
  name: 'Employee',
  data() {
    return {
      employees: [],
      departments: [], 
      searchQuery: '',
      searchDepartment: '' 
    };
  },
  created() {
    this.fetchEmployees();
    this.fetchDepartments(); 
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await fetch('http://localhost:5069/api/Employee/GetEmployee');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.employees = data;
      } catch (error) {
        console.error('Error fetching employees:', error);
        alert('Error fetching employees: ' + error.message);
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
    filteredEmployees() {
      
      const query = this.searchQuery.toLowerCase();
      const selectedDepartment = this.searchDepartment.toLowerCase();
      return this.employees.filter(employee => {
        const departmentName = employee.departmentName.toLowerCase();
        return (selectedDepartment === '' || departmentName === selectedDepartment) &&
               (query === '' || employee.firstName.toLowerCase().includes(query) || employee.lastName.toLowerCase().includes(query));
      });
    }
  }
};
</script>

<style scoped>
.employees {
  
  width: 1280px; 
  padding: 20px;
  display: flex;
  background-color: whitesmoke;
  border: 1px solid #ddd;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  
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


</style>