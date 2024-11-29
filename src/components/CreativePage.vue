<template>
  <div id="game-container">
    <h1>Creative Game</h1>
    <p>Fight the enemies in this retro pixelated battle!</p>
    <div id="instructions">
      <p>Use the arrow keys to move the player and destroy the red enemies!</p>
    </div>
    <div id="score">
      <p>Score: {{ score }}</p>
    </div>
    <div id="game-area">
      <canvas ref="gameCanvas" width="300" height="300"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreativePage",
  data() {
    return {
      score: 0, // Initialize the score
      gameInterval: null,
      enemyInterval: null,
    };
  },
  mounted() {
    this.startGame();
  },
  beforeUnmount() {
    // Clear intervals to avoid memory leaks when the component is destroyed
    clearInterval(this.gameInterval);
    clearInterval(this.enemyInterval);
  },
  methods: {
    startGame() {
      const canvas = this.$refs.gameCanvas;
      const ctx = canvas.getContext("2d");

      const player = { x: 50, y: 50, size: 20, color: "green" };
      const enemies = [];
      const enemySize = 20;
      const playerSpeed = 7; // Increased player speed for faster movement

      // Variables for game and enemy intervals
      this.gameInterval = null;
      this.enemyInterval = null;

      // Player movement with boundary checks
      const movePlayer = (e) => {
        if (e.key === "ArrowUp" && player.y > 0) player.y -= playerSpeed;
        if (e.key === "ArrowDown" && player.y < canvas.height - player.size)
          player.y += playerSpeed;
        if (e.key === "ArrowLeft" && player.x > 0) player.x -= playerSpeed;
        if (e.key === "ArrowRight" && player.x < canvas.width - player.size)
          player.x += playerSpeed;
      };

      // Generate enemies in random positions
      const spawnEnemies = () => {
        if (enemies.length >= 50) {
          enemies.length = 0; // Reset the enemies once we reach 50
        }
        for (let i = 0; i < 50; i++) {
          const x = Math.floor(Math.random() * (canvas.width - enemySize));
          const y = Math.floor(Math.random() * (canvas.height - enemySize));
          enemies.push({ x, y, size: enemySize, color: "red" });
        }
      };

      // Check collision between player and enemies
      const checkCollision = () => {
        enemies.forEach((enemy, index) => {
          if (
            player.x < enemy.x + enemy.size &&
            player.x + player.size > enemy.x &&
            player.y < enemy.y + enemy.size &&
            player.y + player.size > enemy.y
          ) {
            // Remove the enemy when collided and update the score
            enemies.splice(index, 1);
            this.score += 10; // Increase score when an enemy is destroyed
          }
        });
      };

      // Draw everything on the canvas
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw player
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.size, player.size);

        // Draw enemies
        enemies.forEach((enemy) => {
          ctx.fillStyle = enemy.color;
          ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
        });

        // Check for collisions
        checkCollision();
      };

      // Game loop
      const gameLoop = () => {
        draw();
      };

      // Add event listener for player movement
      window.addEventListener("keydown", movePlayer);

      // Start game
      spawnEnemies();
      this.gameInterval = setInterval(gameLoop, 1000 / 30); // 30 FPS
      this.enemyInterval = setInterval(spawnEnemies, 3000); // Respawn enemies every 3 seconds
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;   /* Ensure the body takes full height */
  overflow: hidden; /* Remove scrollbars */
}

#game-container {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Use 100% of the parent height */
  overflow: hidden; /* Prevent any internal overflow */
}

h1 {
  font-size: 2rem;
  color: #ffcc00;
  text-shadow: 0 0 15px rgba(255, 204, 0, 0.7);
}

#instructions {
  font-size: 1rem;
  color: #ffcc00;
  margin: 10px;
}

#score {
  font-size: 1.5rem;
  color: #ffcc00;
  margin-bottom: 10px;
}

#game-area {
  display: inline-block;
  background-color: #333;
  border: 2px solid #ffcc00;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.7);
}

canvas {
  border: 1px solid #ffcc00;
  display: block;
  margin: 20px auto;
  background-color: #222;
}
</style>
