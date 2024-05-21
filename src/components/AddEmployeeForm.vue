<template>
  <div class="add-employee-container">
    <h1 class="add-employee-title">Add Employee</h1>
    <form @submit.prevent="addEmployee" class="form-horizontal">

      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="employee.firstName" required>
      </div>
  
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="employee.lastName" required>
      </div>
  
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="employee.email" required>
      </div>
  
      <div class="form-group">
        <label for="gender">Gender</label>
        <select id="gender" v-model="employee.gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="departmentid">Department ID</label>
        <input type="text" id="departmentid" v-model="employee.departmentid" required>
      </div>

      <div class="form-group full-width">
        <button type="submit">Add Employee</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        departmentid: ''  
      }
    };
  },
  methods: {
    addEmployee() {
      fetch('http://localhost:5069/api/Employee/AddEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.employee)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
        return response.json();
      })
      .then(data => {
        console.log('Employee added:', data);
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
    }
  }
};
</script>

<style scoped>
.add-employee-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: whitesmoke;
  border: 1px solid #ddd;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.add-employee-title {
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
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px; 
}

button:hover {
  background-color: #45a049;
}
</style>
