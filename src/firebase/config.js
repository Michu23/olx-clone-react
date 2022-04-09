import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDh9wyUlyoHu7WzRN6GlTfxxRwFX3zJQZI",
    authDomain: "olx2-17533.firebaseapp.com",
    projectId: "olx2-17533",
    storageBucket: "olx2-17533.appspot.com",
    messagingSenderId: "933288765812",
    appId: "1:933288765812:web:e97a771901b0fd22712421",
    measurementId: "G-6SDEB14CBG"
  };

  
export const Firebase = firebase.initializeApp(firebaseConfig);
