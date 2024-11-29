<template>
  <div id="login">
    <div class="login-container">
      <h2 class="rpg-header">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-container">
          <label for="username" class="rpg-description">Username:</label>
          <input type="text" id="username" v-model="username" class="rpg-input" />
        </div>
        <div class="input-container">
          <label for="password" class="rpg-description">Password:</label>
          <input type="password" id="password" v-model="password" class="rpg-input" />
        </div>
        <button type="submit" class="rpg-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const validUsername = 'admin';
      const validPassword = 'password123';

      if (this.username === validUsername && this.password === validPassword) {
        // Emit login event and update loggedIn status
        this.$emit('login', true);
      } else {
        alert('Incorrect username or password');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Apply the gaming design from ProfilePage to LoginPage */
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b2735; /* Dark background similar to ProfilePage */
  font-family: 'Press Start 2P', cursive;
}

.login-container {
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0.8); /* Dark transparent background */
  border: 4px solid #ffcc00; /* Yellow border like ProfilePage */
  box-shadow: 0 0 20px #ffcc00; /* Border glow */
}

h2.rpg-header {
  font-size: 50px;
  color: #ffcc00;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 204, 0, 0.8);
  padding: 10px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-in-out;
}

.rpg-description {
  font-size: 24px;
  color: #ffcc00;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1.5s ease-in-out;
}

.input-container {
  margin-bottom: 15px;
}

.rpg-input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 2px solid #ffcc00; /* Input border */
  background-color: rgba(0, 0, 0, 0.7); /* Dark background */
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px #ffcc00; /* Input glow effect */
}

.rpg-input:focus {
  outline: none;
  box-shadow: 0 0 10px #ffcc00; /* Focus glow effect */
}

.rpg-button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: #ff007a; /* Button background */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px #ff007a; /* Button glow */
  transition: background-color 0.3s, box-shadow 0.3s;
}

.rpg-button:hover {
  background-color: #00ffcc; /* Button hover effect */
  box-shadow: 0 0 20px #00ffcc; /* Hover glow effect */
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
