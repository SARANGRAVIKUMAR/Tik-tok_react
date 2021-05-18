import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYAPqWW8cZlimGDQ6yUfiQM9HeDyqiQHY",
  authDomain: "tik-tok-ce8e4.firebaseapp.com",
  projectId: "tik-tok-ce8e4",
  storageBucket: "tik-tok-ce8e4.appspot.com",
  messagingSenderId: "635266011467",
  appId: "1:635266011467:web:952fd533f7faac4d1b18ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
