import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAprjY-xFMflUYRnuQSoYbFHDZw8gocDiY",
    authDomain: "chat-test-8f0de.firebaseapp.com",
    projectId: "chat-test-8f0de",
    storageBucket: "chat-test-8f0de.appspot.com",
    messagingSenderId: "269485221218",
    appId: "1:269485221218:web:55b7ec4aa1f77d0928383b",
  })
  .auth();
