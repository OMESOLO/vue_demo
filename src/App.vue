<template>
  <div id="app">
    <NavbarComponent />
    <!-- เรียกใช้ Component ของ Router เพื่อแสดงคอนเทนต์ของแอปพลิเคชัน -->
   
    <router-view></router-view>
  </div>
</template>

<script>

import NavbarComponent from './components/NavbarComponent.vue';



export default {
  name: 'App',
  components: {
    NavbarComponent,
  
    
  }
};
</script>

<style>
/* สไตล์ทั่วไปสำหรับแอปพลิเคชัน */
</style>
