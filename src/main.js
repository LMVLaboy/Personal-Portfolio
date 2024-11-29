import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router

// Import Font Awesome styles
import 'font-awesome/css/font-awesome.css';

createApp(App)
  .use(router)  // Tell Vue to use the router
  .mount('#app');
