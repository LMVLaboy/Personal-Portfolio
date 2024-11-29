<template>
  <div id="contact">
    <h1>Contact Me</h1>
    <p>Feel free to reach out to me with any questions or inquiries!</p>
    <div class="contact-content">
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Reset margin and padding for all elements */
body, #contact, .contact-content, form, input, textarea, button, h1, p, label {
  margin: 0;
  padding: 0;
}

/* Main container for contact page */
#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6); /* Dark background */
  color: white;
  padding: 15px; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8); /* Smaller shadow */
  width: 70%; /* Reduced width */
  max-width: 700px; /* Smaller max-width */
  margin: 0 auto;
  font-family: 'Press Start 2P', cursive; /* Game-like font */
  text-align: center;
  border: 1px solid #ffcc00; /* Gold border */
  text-shadow: 0 0 8px #ffcc00, 0 0 15px #ffcc00; /* Reduced text glow */
}

/* Header and description styling */
h1 {
  font-size: 1.5rem; /* Smaller font size */
  margin-bottom: 15px;
  text-align: center;
  color: #ffcc00; /* Gold color for the heading */
  text-shadow: 0 0 12px rgba(255, 204, 0, 0.7);
}

p {
  font-size: 1rem; /* Smaller font size */
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 8px #ffcc00, 0 0 12px #ffcc00; /* Glow effect */
}

/* Contact Content Styling */
.contact-content {
  width: 100%;
  padding: 0 10px; /* Smaller padding */
  box-sizing: border-box; /* Include padding in the element's total width/height */
}

/* Form Styling */
form {
  display: flex;
  flex-direction: column;
}

/* Label Styling */
label {
  font-size: 0.9rem; /* Smaller font size for labels */
  margin: 8px 0; /* Reduced margin */
  color: #ffcc00; /* Gold for labels */
  text-shadow: 0 0 5px #ffcc00, 0 0 8px #ffcc00; /* Glow effect */
}

/* Input and Textarea Fields */
input, textarea {
  width: 100%;
  max-width: 100%; /* Ensure they stay within the form container */
  padding: 10px; /* Reduced padding */
  margin: 8px 0; /* Smaller margin */
  border: 2px solid #ffcc00;
  border-radius: 8px; /* Rounded corners */
  background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background */
  color: white;
  font-size: 1rem; /* Smaller font size */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-sizing: border-box; /* Include padding in width/height calculations */
}

input:focus, textarea:focus {
  box-shadow: 0 0 12px #ffcc00; /* Stronger glow on focus */
  transform: scale(1.05); /* Slight zoom effect on focus */
}

/* Textarea Specific Styling */
textarea {
  resize: vertical; /* Allow vertical resizing */
  min-height: 120px; /* Smaller minimum height */
}

/* Button Styling */
button {
  padding: 12px; /* Smaller padding */
  margin-top: 15px; /* Smaller margin */
  font-size: 1rem; /* Smaller font size */
  border: 3px solid #ffcc00;
  border-radius: 8px; /* Rounded corners */
  background-color: rgba(255, 255, 255, 0.2); /* Same transparent style */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s ease;
  font-family: 'Press Start 2P', cursive; /* Game-like font */
  text-shadow: 0 0 5px #ffcc00, 0 0 8px #ffcc00; /* Button glow effect */
}

button:hover {
  background-color: rgba(0, 255, 255, 0.6); /* Light hover effect */
  transform: scale(1.1); /* Stronger zoom effect on hover */
  box-shadow: 0 0 12px #ffcc00; /* Button glow effect */
}

button:active {
  transform: scale(1.05); /* Slight shrink on click */
}
</style>
