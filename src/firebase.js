import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAvg6e1MU3a5rA8TeoO6jQ5BlTsXqZtBdo",
  authDomain: "crypto-viewer-9e1a2.firebaseapp.com",
  databaseURL: "https://crypto-viewer-9e1a2.firebaseio.com",
  projectId: "crypto-viewer-9e1a2",
  storageBucket: "crypto-viewer-9e1a2.appspot.com",
  messagingSenderId: "733661883657",
  appId: "1:733661883657:web:97a1f9218526fd08b637d8",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
 const authDb = firebaseApp.auth();
 /* const db = firebaseApp.firestore() */
export default authDb;

  

