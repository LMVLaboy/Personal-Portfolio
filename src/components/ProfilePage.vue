<template>
  <div id="profile">
    <h1 class="rpg-header">Profile</h1>
    <p class="rpg-description">This page showcases my work and interests in a mystical RPG world.</p>

    <!-- Section 1: Profile Picture, Name, Age, Nationality, and Occupation -->
    <div id="section1" class="rpg-container">
      <div class="rpg-box">
        <img
          :src="require('@/assets/ProfPic.jpg')"
          alt="Profile Picture"
          class="rpg-profile-pic"
          @click="selectImage(require('@/assets/ProfPic.jpg'))" />
        <div class="rpg-info">
          <p><strong>Name:</strong> Lean Matthew V. Laboy</p>
          <p><strong>Age:</strong> 22 years old</p>
          <p><strong>Nationality:</strong> Filipino</p>
          <p><strong>Occupation:</strong> Student</p>
        </div>
      </div>
    </div>

    <!-- Section 2: School and Student Status -->
    <div id="section2" class="rpg-container">
      <div class="rpg-box">
        <img
          :src="require('@/assets/TIP.png')"
          alt="School Image"
          class="rpg-school-img"
          @click="selectImage(require('@/assets/TIP.png'))" />
        <div class="rpg-info">
          <p><strong>Student Status:</strong> 4th Year Computer Engineering</p>
          <p><strong>School:</strong> Technological Institute of the Philippines</p>
          <p><strong>Location:</strong> Manila</p>
        </div>
      </div>
    </div>

    <!-- Modal for Viewing Images -->
    <div v-if="modalImage" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="back-button" @click="closeModal">Back</button>
        <img :src="modalImage" alt="Full Image" class="modal-image" />
      </div>
    </div>

    <!-- Section 3: Hobby and Artwork -->
    <div id="section3" class="rpg-container">
      <div class="rpg-box">
        <p>This page is dedicated to showcasing my work and artistic creations.</p>
      </div>
      <div class="hobby-gallery">
        <img :src="require('@/assets/Cyra1.png')" alt="Artwork 1" class="rpg-artwork" @click="selectImage(require('@/assets/Cyra1.png'))"/>
        <img :src="require('@/assets/Cyra2.png')" alt="Artwork 2" class="rpg-artwork" @click="selectImage(require('@/assets/Cyra2.png'))"/>
        <img :src="require('@/assets/Cyra3.png')" alt="Artwork 3" class="rpg-artwork" @click="selectImage(require('@/assets/Cyra3.png'))"/>
      </div>
    </div>

    <!-- Section 4: Social Media Links -->
    <div class="social-links">
      <h2 class="rpg-header">Explore My Other Pages</h2>
      <p>
        <a v-for="(link, index) in socialLinks" :key="index" :href="link" target="_blank" class="rpg-link">{{ getLinkName(link) }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      socialLinks: [
        'https://www.facebook.com/profile.php?id=100080945130610&mibextid=ZbWKwL',
        'https://www.instagram.com/husky.beluga.arts?igsh=NW1oaGZ3eGMyNnVy',
        'https://github.com/LMVLaboy'
      ],
      modalImage: null
    };
  },
  methods: {
    getLinkName(url) {
      if (url.includes('facebook')) {
        return 'Facebook';
      } else if (url.includes('instagram')) {
        return 'Instagram';
      } else if (url.includes('github')) {
        return 'Github';
      }
      return 'Link';
    },
    selectImage(image) {
      this.modalImage = image; // Set the image to be displayed in the modal
    },
    closeModal() {
      this.modalImage = null; // Close the modal and go back to the gallery
    }
  }
};
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  border: 4px solid #ff007a; /* Border similar to PortfolioShowcase */
  border-radius: 15px;
  background-color: #1b2735; /* Dark background for modal */
  box-shadow: 0 0 20px #ff007a, 0 0 40px #ff007a;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Make sure the image is contained within the modal */
  transition: transform 0.3s ease-in-out;
}

/* Back Button Styles */
.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  background-color: #ff007a;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px #00ffcc;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #00ffcc;
}

.rpg-header {
  font-family: 'Press Start 2P', cursive;
  font-size: 50px;
  color: #ffcc00;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 204, 0, 0.8);
  animation: fadeIn 1s ease-in-out;
  padding: 10px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

.rpg-description {
  font-size: 24px;
  margin-top: 10px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1.5s ease-in-out;
  padding: 10px;
  border: 2px solid #ffcc00;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
}

/* General styling for RPG look */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

#profile {
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: white;
  padding: 40px;
}

.rpg-container {
  margin: 20px;
}

.rpg-box {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  width: 90%;
  max-width: 400px;
  border: 4px solid #ffcc00;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease-in-out;
}

.rpg-box:hover {
  transform: scale(1.05);
}

.rpg-profile-pic, .rpg-school-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ffcc00;
  box-shadow: 0 0 20px rgba(255, 204, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.rpg-profile-pic:hover, .rpg-school-img:hover {
  transform: scale(1.15);
  box-shadow: 0 0 25px rgba(255, 204, 0, 0.8);
}

.rpg-info p {
  font-size: 18px;
  margin: 5px 0;
}

.hobby-gallery {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px;
}

.rpg-artwork {
  width: 200px;
  height: auto;
  border: 4px solid #ff007a;
  border-radius: 10px;
  box-shadow: 0 0 10px #ff007a;
  cursor: pointer;
}

.rpg-artwork:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px #ff007a;
}

.social-links {
  margin-top: 20px;
}

.rpg-link {
  font-size: 20px;
  color: #ffcc00;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.rpg-link:hover {
  color: #ff007a;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
