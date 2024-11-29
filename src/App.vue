<template>
  <div id="app" class="rpg-theme">
    <!-- Show LoginPage if not logged in -->
    <LoginPage v-if="!loggedIn" @login="handleLogin" />

    <!-- Show DashBoard after login -->
    <DashBoard v-else />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import DashBoard from './components/DashBoard.vue';

export default {
  name: 'App',
  components: {
    LoginPage,
    DashBoard,
  },
  data() {
    return {
      loggedIn: localStorage.getItem('loggedIn') === 'true', // Retrieve login state from localStorage
    };
  },
  methods: {
    handleLogin(status) {
      this.loggedIn = status;
      localStorage.setItem('loggedIn', status); // Store login status in localStorage

      // Redirect to DashBoard after login
      if (status) {
        this.$router.push('/dashboard'); // Navigate to DashBoard
      }
    },
  },
};
</script>

<style scoped>
/* RPG Theme Styles */
body, #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/Feudal Life.jfif') no-repeat center center fixed; /* RPG-style parchment or fantasy background */
  background-size: cover;
  font-family: 'Cinzel', serif; /* A medieval/fantasy font for RPG-style */
}

.rpg-theme {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for RPG aesthetic */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
}

/* Styles for buttons to look like RPG buttons */
button {
  background-color: #4e2a84; /* Deep purple to mimic fantasy aesthetics */
  color: white;
  font-size: 18px;
  padding: 15px;
  border: 2px solid #ffb300;
  border-radius: 10px;
  cursor: pointer;
  width: 200px;
  transition: all 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background-color: #6c3a99; /* Lighter purple on hover */
  border-color: #ff9000;
}

button.active {
  background-color: #2a0d57; /* Darker shade when active */
  border-color: #ff9000;
}

/* Add a parchment-like effect for the Login page */
.login-container {
  background: url('@/assets/Bgpic.jpg'); /* Parchment background */
  border: 2px solid #d0a060;
  border-radius: 15px;
  padding: 40px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

h2 {
  font-family: 'Cinzel', serif;
  font-size: 2em;
  color: #ffcc00;
  margin-bottom: 20px;
}

/* Style the profile page container to reflect RPG elements */
.profile-container {
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  margin: 20px auto;
  width: 80%;
  max-width: 900px;
}

/* Fancy links for RPG theme */
.social-links a {
  color: #ffcc00;
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
  display: inline-block;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #ff9000;
  text-decoration: underline;
}
</style>
