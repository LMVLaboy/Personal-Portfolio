<template>
  <div id="dashboard">
    <div class="sidebar">
      <div class="logo">
        <h2>Dashboard</h2>
      </div>
      <nav>
        <button @click="currentPage = 'profile'" :class="{ active: currentPage === 'profile' }">Profile</button>
        <button @click="currentPage = 'portfolio'" :class="{ active: currentPage === 'portfolio' }">Portfolio</button>
        <button @click="currentPage = 'contact'" :class="{ active: currentPage === 'contact' }">Contact</button>
        <button @click="currentPage = 'creative'" :class="{ active: currentPage === 'creative' }">Creative Game</button>

        <!-- Logout Button -->
        <button @click="logout" class="logout-button">Logout</button>
      </nav>
    </div>

    <div class="content">
      <ProfilePage v-if="currentPage === 'profile'" />
      <PortfolioShowcase v-if="currentPage === 'portfolio'" />
      <ContactPage v-if="currentPage === 'contact'" />
      <CreativePage v-if="currentPage === 'creative'" /> <!-- Display Creative Game -->
    </div>
  </div>
</template>

<script>
import ProfilePage from './ProfilePage.vue';
import PortfolioShowcase from './PortfolioShowcase.vue';
import ContactPage from './ContactPage.vue';
import CreativePage from './CreativePage.vue'; // Import Creative Game component

export default {
  name: 'DashBoard',
  components: {
    ProfilePage,
    PortfolioShowcase,
    ContactPage,
    CreativePage, // Register CreativePage component
  },
  data() {
    return {
      currentPage: 'profile', // Default page
    };
  },
  methods: {
    logout() {
      // Clear the login state from localStorage
      localStorage.removeItem('loggedIn');
      
      // Redirect to login page and then refresh the page
      this.$router.push('/login').then(() => {
        window.location.reload(); // This will force the page to reload
      });
    },
  },
};
</script>

<style scoped>
/* Reset margin and padding for elements */
body, #dashboard, .sidebar, .content, button {
  margin: 0;
  padding: 0;
}

/* Make the dashboard container flexible and take full height */
#dashboard {
  display: flex;
  height: 100vh; /* Full viewport height */
  font-family: 'Roboto', sans-serif;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background with transparency */
  color: white;
}

/* Sidebar adjustments */
.sidebar {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Sidebar with transparent background */
  border-right: 2px solid #ffcc00; /* Gold border for sidebar */
}

.sidebar .logo h2 {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Press Start 2P', cursive;
  font-size: 20px; /* Adjusted font size */
  color: #ffcc00;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid #ffcc00;
  padding-bottom: 10px;
}

/* Button styling */
button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  font-weight: 600; /* Make button text weight bolder for better visibility */
  text-shadow: none; /* Remove shadow from button text for better clarity */
  background-color: rgba(0, 0, 0, 0.5); /* Transparent background for buttons */
  border: 2px solid #ffcc00;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #fff; /* Set text color to white for better visibility */
}

/* Button hover effect */
button:hover {
  background-color: rgba(0, 255, 255, 0.6); /* Light hover effect */
  transform: scale(1.05);
}

/* Active state styling for the buttons */
button.active {
  font-weight: bold;
  color: #ffcc00; /* Highlight active button */
  background-color: rgba(255, 204, 0, 0.8); /* Gold active background */
  box-shadow: 0 0 10px rgba(255, 204, 0, 1);
}

/* Logout button styling */
.logout-button {
  margin-top: auto;
  background-color: rgba(255, 0, 0, 0.5); /* Red with transparency */
  border: 2px solid #ff0000;
}

.logout-button:hover {
  background-color: rgba(255, 0, 0, 0.7);
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6); /* Transparent content background */
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
