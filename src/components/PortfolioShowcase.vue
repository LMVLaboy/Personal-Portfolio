<template>
  <div id="portfolio-showcase">
    <h1 class="rpg-header">Portfolio Showcase</h1>
    <p class="rpg-description">
      Explore my amazing projects and see what I have created!
    </p>
    <p class="rpg-description">
      It took a long way to reach what I can make now, and this is the testament of the amount of hardwork it took for me to get here.
    </p>
    <p class="rpg-description">
      Take a moment to enjoy and appreciate the work I’ve crafted over time.
    </p>

    <!-- Gallery Sections -->
    <div v-if="!selectedImage" class="portfolio-items">
      <!-- Square Images Section -->
      <h2 class="rpg-header">Square Images</h2>
      <div class="portfolio-items-row square">
        <div class="portfolio-item" v-for="(image, index) in squareImages" :key="index">
          <img :src="image" :alt="'Square Image ' + index" @click="selectImage(image)" />
        </div>
      </div>

      <!-- Portrait Images Section -->
      <h2 class="rpg-header">Portrait Images</h2>
      <div class="portfolio-items-row portrait">
        <div class="portfolio-item" v-for="(image, index) in portraitImages" :key="index">
          <img :src="image" :alt="'Portrait Image ' + index" @click="selectImage(image)" />
        </div>
      </div>

      <!-- Landscape Images Section -->
      <h2 class="rpg-header">Landscape Images</h2>
      <div class="portfolio-items-row landscape">
        <div class="portfolio-item" v-for="(image, index) in landscapeImages" :key="index">
          <img :src="image" :alt="'Landscape Image ' + index" @click="selectImage(image)" />
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="selectedImage" class="image-modal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <!-- Display the selected image in full size -->
        <img :src="selectedImage" class="modal-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioShowcase",
  data() {
    return {
      selectedImage: null,
      squareImages: [
        require('@/assets/square1.png'),
        require('@/assets/square2.jpg'),
      ],
      portraitImages: [
        require('@/assets/portrait1.png'),
        require('@/assets/portrait2.png'),
        require('@/assets/portrait3.png'),
        require('@/assets/portrait4.png'),
        require('@/assets/portrait5.png'),
        require('@/assets/portrait6.png'),
        require('@/assets/portrait7.png'),
        require('@/assets/portrait8.png'),
        require('@/assets/portrait9.png'),
        require('@/assets/portrait10.png'),
        require('@/assets/portrait11.png'),
        require('@/assets/portrait12.png'),
        require('@/assets/portrait13.png'),
        require('@/assets/portrait14.png'),
        require('@/assets/portrait15.jpg'),
        require('@/assets/portrait16.jpg'),
        require('@/assets/portrait17.jpg'),
        require('@/assets/portrait18.jpg'),
        require('@/assets/portrait19.png'),
        require('@/assets/portrait20.png'),
        require('@/assets/portrait21.png'),
      ],
      landscapeImages: [
        require('@/assets/landscape1.png'),
        require('@/assets/landscape2.png'),
        require('@/assets/landscape3.png'),
        require('@/assets/landscape4.png'),
        require('@/assets/landscape5.png'),
        require('@/assets/landscape6.png'),
        require('@/assets/landscape7.png'),
      ],
    };
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image; // Set the image to be displayed in the modal
    },
    closeModal() {
      this.selectedImage = null; // Close the modal and go back to the gallery
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#portfolio-showcase {
  text-align: center;
  padding: 20px;
  color: #fff;
  background: linear-gradient(135deg, rgba(27, 39, 53, 0.9), rgba(9, 10, 15, 0.7)); /* More transparent background */
  font-family: "Press Start 2P", cursive;
  border: 3px solid #00ffcc;
  box-shadow: 0 0 20px #00ffcc, 0 0 40px #ff007a, 0 0 60px #00ffcc;
  border-radius: 15px;
  margin: 20px;
}

.rpg-header {
  font-family: 'Press Start 2P', cursive;
  font-size: 2.5rem;
  color: #ff007a;
  text-shadow: 0 0 15px #ff007a, 0 0 25px #ff007a, 0 0 35px #ff007a; /* Stronger glow effect */
  padding: 10px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

.rpg-description {
  font-size: 1rem;
  margin-top: 10px;
  text-shadow: 0 0 10px #00ffcc, 0 0 15px #00ffcc; /* Enhanced glow effect */
  padding: 10px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

.portfolio-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 10px;
}

.portfolio-items-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.portfolio-item {
  width: 200px;
  height: 200px;
  background-color: #1b2735;
  border: 3px solid #00ffcc;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 20px #00ffcc, 0 0 40px #ff007a;
}

.portfolio-item:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px #ff007a, 0 0 20px #00ffcc, 0 0 30px #ff007a;
}

.portfolio-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background-color: #000;
}

/* Modal Styles */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  padding: 20px;
  border: 2px solid #00ffcc;
  background: #1b2735;
  border-radius: 10px;
  box-shadow: 0 0 20px #00ffcc, 0 0 40px #ff007a;
}

.modal-image {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 10px;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  background: #ff007a;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ffcc, 0 0 20px #ff007a;
  transition: background 0.3s ease;
}

.close-btn:hover {
  background: #00ffcc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-items-row {
    flex-direction: column;
    align-items: center;
  }

  .portfolio-item {
    width: 90%;
    height: auto;
  }

  .modal-image {
    max-width: 100%;
    max-height: 70vh;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  #portfolio-showcase {
    padding: 10px;
    font-size: 0.8rem;
  }

  .close-btn {
    font-size: 24px;
    padding: 5px;
  }

  .modal-image {
    max-height: 60vh;
  }
}
</style>
