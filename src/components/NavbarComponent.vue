<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <span class="logo-text"> Employee Management </span>
          </router-link>
        </div>
        
        <div id="navbar-menu-container">
          <div class="navbar-menu">
            <router-link class="navbar-item" to="/employees">Employees</router-link>
            <router-link class="navbar-item" to="/addemployee">AddEmployee</router-link>
          </div>
         
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
}

#navbar-menu-container {
  display: flex;
  justify-content: flex-end;
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
}

.navbar-item:hover {
  background-color: white;
}

.navbar-item {
  margin-top: 10px;
}
</style>
