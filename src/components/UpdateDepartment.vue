<template>
  <div class="update-department-container">
    <h2 class="update-department-title">Update Department</h2>
    <form @submit.prevent="updateDepartment" class="form-horizontal">
      <div class="form-group">
        <label for="departmentID">Department ID</label>
        <input type="text" v-model="department.departmentID" id="departmentID" required>
      </div>
      <div class="form-group">
        <label for="departmentName">Department Name</label>
        <input type="text" v-model="department.departmentName" id="departmentName" required>
      </div>
      <div class="form-group">
        <label for="managerID">Manager ID</label>
        <input type="text" v-model="department.managerID" id="managerID" required>
      </div>
      <button type="submit">Update Department</button>
    </form>
    <router-link to="/departments" class="back-btn">Back To Department List</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      department: {
        departmentID: '',
        departmentName: '',
        managerID:''
      }
    };
  },
  methods: {
    async fetchDepartment(departmentId) {
      try {
        const response = await axios.get(`http://localhost:5069/api/Department/GetDepartment/${departmentId}`);
        this.department = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async updateDepartment() {
      try {
        await axios.put(`http://localhost:5069/api/Department/UpdateDepartment/${this.department.departmentID}`, this.department);
        alert('Department updated successfully');
      } catch (error) {
        console.error(error);
        alert('Failed to update department');
      }
    }
  },
  mounted() {
    const departmentId = this.$route.params.id;
    this.fetchDepartment(departmentId);
  }
};
</script>


<style scoped>
.update-department-container {
max-width: 800px;
margin: auto;
padding: 20px;
background-color: whitesmoke;
border: 1px solid #ddd;
border-radius: 16px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.update-department-title {
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
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
margin-left: 70%; 
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
