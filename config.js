import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAPUBV2iApIEq6DpFOZNgCc4QkI9pawnHg",
  authDomain: "c-71-8fba9.firebaseapp.com",
  projectId: "c-71-8fba9",
  storageBucket: "c-71-8fba9.appspot.com",
  messagingSenderId: "708143110536",
  appId: "1:708143110536:web:3ab4e5bdae7156351e823d"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
