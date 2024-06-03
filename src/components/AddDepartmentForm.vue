<template>
  <div class="add-department-container">
    <h1 class="add-department-title">Add Departments</h1>
    <form @submit.prevent="submitDepartments" class="form-horizontal">

      <div v-for="(dept, index) in departments" :key="index" class="department-form">
        <div class="form-group">
          <label :for="'departmentName' + index">Department Name</label>
          <input type="text" :id="'departmentName' + index" v-model="dept.departmentName" required />
        </div>

        <div class="form-group">
          <label :for="'managerID' + index">managerID</label>
          <input type="text" :id="'managerID' + index" v-model="dept.managerID" required />
        </div>

        <button type="button" class="remove-btn" @click="removeDepartment(index)">Remove Department</button>
      </div>

      <div class="form-group full-width">
        <router-link to="/departments" class="back-btn">Back To Department List</router-link>
        <button type="submit" class="submit-btn">Add Department</button>
        <button type="button" class="add-btn" @click="addDepartmentForm">Add Another Department</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddDepartment',
  data() {
    return {
      departments: [
        {
          departmentName: '',
          managerID: '',
        }
      ]
    };
  },
  methods: {
    addDepartmentForm() {
      this.departments.push({
        departmentName: '',
        managerID: '',
      });
    },
    removeDepartment(index) {
      this.departments.splice(index, 1);
    },
    async submitDepartments() {
      const valid = this.validateInputData();
      if (!valid) {
        alert('Please fill in all information before adding a department');
        return;
      }

      try {
        const response = await fetch('http://localhost:5069/api/Department/AddDepartment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.departments)
        });
        if (!response.ok) {
          throw new Error('Network response is not satisfactory');
        }
        alert('Department added successfully!');
        this.resetForm();
      } catch (error) {
        console.error('There was an error adding a department:', error);
        alert('There was an error adding a department: ' + error.message);
      }
    },
    validateInputData() {
      for (const dept of this.departments) {
        if (!dept.departmentName || !dept.managerID) {
          return false;
        }
      }
      return true;
    },
    resetForm() {
      this.departments = [
        {
          departmentName: '',
          managerID: '',
        }
      ];
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
  margin-top: 15%;
}

.add-department-title {
  color: rgb(237, 101, 101);
  text-align: center;
  margin-bottom: 20px;
}

.form-horizontal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.department-form {
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
}

label {
  margin-bottom: 5px;
  color: black;
  display: block;
}

input[type="text"],
select {
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
  margin-left: 50%;
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
  margin-right: 55%;
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
