import firebase from "firebase";
require("dotenv").config();
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "firegram-5d744.firebaseapp.com",
  databaseURL: "https://firegram-5d744.firebaseio.com",
  projectId: "firegram-5d744",
  storageBucket: "firegram-5d744.appspot.com",
  messagingSenderId: "556757344112",
  appId: "1:556757344112:web:0376d4b1071e9b9262f9b5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
