<template>
  <div class="add-employee-container">
    <h1 class="add-employee-title">Add Employees</h1>
    <form @submit.prevent="addEmployee" class="form-horizontal">

      <div v-for="(emp, index) in employees" :key="index" class="employee-form">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" :id="'firstName' + index" v-model="emp.firstName" required>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" :id="'lastName' + index" v-model="emp.lastName" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" :id="'email' + index" v-model="emp.email" required>
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select :id="'gender' + index" v-model="emp.gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="jobtitle">Job Title</label>
          <input type="text" :id="'jobtitle' + index" v-model="emp.jobTitle" required>
        </div>

        <div class="form-group">
          <label for="departmentid">Department ID</label>
          <input type="text" :id="'departmentid' + index" v-model="emp.departmentid" required>
        </div>

        <button type="button" @click="removeEmployee(index)">Remove Employee</button>
      </div>

      <div class="form-group full-width">
        <router-link to="/employees" class="back-btn">Back to Employees List</router-link>
        <button type="submit">Add Employees</button>
        <button type="button" @click="addEmployeeForm">Add Another Employee</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          jobTitle: '',
          departmentid: ''
        }
      ]
    };
  },
  methods: {
    addEmployeeForm() {
      this.employees.push({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        jobTitle: '',
        departmentid: ''
      });
    },
    removeEmployee(index) {
      this.employees.splice(index, 1);
    },
    addEmployee() {
      const valid = this.validateInputData();
      if (!valid) {
        alert('Please fill in all fields before adding employees.');
        return;
      }

      fetch('http://localhost:5069/api/Employee/AddEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.employees)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add employees');
        }
        return response.json();
      })
      .then(data => {
        console.log('Employees added:', data);
        // Optionally reset form or navigate to another page
      })
      .catch(error => {
        console.error('Error adding employees:', error);
        alert('An error occurred while adding employees.');
      });
    },
    validateInputData() {
      for (const emp of this.employees) {
        if (!emp.firstName || !emp.lastName || !emp.email || !emp.gender || !emp.jobTitle || !emp.departmentid) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>

<style scoped>
.add-employee-container {
  max-width: 800px;
  margin: auto;
  margin-top: 15%;
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

.employee-form {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
  width: 100%; 
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
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px; 
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
  margin-right: 55%;
}

.back-btn:hover {
  background-color: rgb(223, 64, 64);
}
</style>
