<template>
    <!-- App.vue -->
    <div class="bg-light" style="width: 100%;">
      <Header  />
      <router-view />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import { ref } from 'vue';
  
  const searchQuery = ref(''); // Define search query state
  
  // Method to update the search query when the child emits the value
  const updateSearchQuery = (query) => {
    searchQuery.value = query;
  };
  </script>
  
  <style scoped>
  /* You can add any styling you need here */
  </style>
  