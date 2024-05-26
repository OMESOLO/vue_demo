<template>
  <div class="add-department-container">
    <h1 class="add-department-title">Add Department</h1>
    <form @submit.prevent="submitDepartment" class="form-horizontal">
      <div class="form-group">
        <label for="departmentName">Department Name:</label>
        <input type="text" id="departmentName" v-model="department.departmentName" required />
      </div>
      <div class="form-group">
        <label for="managerID">Manager ID:</label>
        <input type="text" id="managerID" v-model="department.managerID" required />
      </div>
      <div class="form-group full-width">
          <router-link to="/departments" class="back-btn">Back to Departments List</router-link>
          <button type="submit">Add Department</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddDepartment',
  data() {
    return {
      department: {
        departmentName: '',
        managerID: '',
      }
    };
  },
  methods: {
    async submitDepartment() {
      try {
        const response = await fetch('http://localhost:5069/api/Department/AddDepartment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.department)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('Department added successfully!');
        this.resetForm();
      } catch (error) {
        console.error('Error adding department:', error);
        alert('Error adding department: ' + error.message);
      }
    },
    resetForm() {
      this.department = {
        departmentName: '',
        managerID: ''
      };
    }
  }
};
</script>

  
  <style scoped>
  .add-department-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .add-department-title {
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
    margin-top: 10px;
    margin-left: 50%; 
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
  