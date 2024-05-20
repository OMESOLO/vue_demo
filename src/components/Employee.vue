<template>
  <div class="employees">
    <h1 style="color: greenyellow;">Employees List</h1>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Search employee" @input="searchEmployees">
      
    </div>
    <table>
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
        <tr v-for="employee in employees" :key="employee.empID">
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
  name: 'Employees',
  data() {
    return {
      employees: [],
      searchQuery: '', 
    };
  },
  created() {
    this.fetchEmployees();
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
    searchEmployees() {
  const query = this.searchQuery.toLowerCase();
  if (!query) {
    this.fetchEmployees();
    return;
  }
  this.employees = this.employees.filter(employee => {
    return (
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query) ||
      employee.email.toLowerCase().includes(query)
    );
  });
},
  
  },
};
</script>

<style scoped>
.employees {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 20px;
}

table {
  width: 80%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid whitesmoke;
  text-align: left;
  color: white;
}

th {
  background-color: black;
  color: palevioletred;
}

.search-bar {
  margin-bottom: 10px;
}

.search-bar input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  font-size: 1.4rem;
}

.search-bar button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #0056b3;
}
</style>
