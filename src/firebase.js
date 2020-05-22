import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyDyCW4etpqbBUiUpLE05pQYws7qsTDfNHc",
    authDomain: "test-e52bf.firebaseapp.com",
    databaseURL: "https://test-e52bf.firebaseio.com",
    projectId: "test-e52bf",
    storageBucket: "test-e52bf.appspot.com",
    messagingSenderId: "915499804726",
    appId: "1:915499804726:web:c156b5269c839ac21f9097"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 const auth= firebase.auth()
 const db = firebase.firestore()
 const storage= firebase.storage()
 const functions = firebase.functions()

 export {
   firebase,
   auth,
   db,
   storage,
   functions
 }