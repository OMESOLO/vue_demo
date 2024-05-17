<template>
  <div class="employees">
    <h1 style="color: greenyellow;">Employees List</h1>
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
      employees: []
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
    }
  }
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
}

th {
  background-color: black;
  color: white;
}

tbody tr:nth-child(odd) {
  background-color: black;
}

tbody tr:nth-child(even) {
  background-color: black;
}
</style>
