const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCpi1_wbyA4qrhE24L660MOOe1fm20DLlw",
  authDomain: "tccerto-auth.firebaseapp.com",
  projectId: "tccerto-auth",
  storageBucket: "tccerto-auth.appspot.com",
  messagingSenderId: "553966289546",
  appId: "1:553966289546:web:417f9d3450ce2842a9e373"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth };