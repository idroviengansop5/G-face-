
const firebaseConfig = {
  apiKey: "AIzaSyBMYM1A7euaMxN45du8PAZa7nwq5ICLuog",
  authDomain: "g-face-5e983.firebaseapp.com",
  projectId: "g-face-5e983",
  storageBucket: "g-face-5e983.firebasestorage.app",
  messagingSenderId: "511144237117",
  appId: "1:511144237117:web:5f50d90bf7fa705147b254"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
