<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBAeipbl84DruwA3k7DAGO4oQyBlJwbnZ0",
    authDomain: "ethio-corporate-website.firebaseapp.com",
    projectId: "ethio-corporate-website",
    storageBucket: "ethio-corporate-website.firebasestorage.app",
    messagingSenderId: "1004872679734",
    appId: "1:1004872679734:web:43aad4c9e4da457eb87397",
    measurementId: "G-81KZX0G34W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
