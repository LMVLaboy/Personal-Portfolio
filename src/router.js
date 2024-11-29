import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import DashBoard from './components/DashBoard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage, // This route is the login page
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage, // Login page route
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('loggedIn') !== 'true') {
        next('/login'); // If not logged in, redirect to login
      } else {
        next(); // If logged in, continue to dashboard
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
