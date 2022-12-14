import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDRBwCalzG0y_gWa7dZyOBaWTcSztXhk7I",
  authDomain: "md-liaison.firebaseapp.com",
  projectId: "md-liaison",
  storageBucket: "md-liaison.appspot.com",
  messagingSenderId: "499382413186",
  appId: "1:499382413186:web:242d7d6ff13d832faf919b",
};


// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

export const storage = firebase.storage();

export const auth = firebase.auth();

export const static_img = 'https://firebasestorage.googleapis.com/v0/b/bridgetech-advance-project.appspot.com/o/profile_images%2Fprofile.jpg?alt=media&token=b3c94ada-1b08-4834-bbd1-647882c7195a';






