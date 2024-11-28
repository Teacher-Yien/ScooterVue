import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure correct path
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Using bootstrap.bundle.js for better compatibility
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import { cartStore } from './stores/CartStore';
import Toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'; // Import toast CSS

const app = createApp(App);

// Use plugins
app.use(router);  // Register the router
app.use(Toast);   // Register the toast notification plugin

// Provide cartStore globally
app.provide('cartStore', cartStore);

// Mount the app
app.mount('#app');
