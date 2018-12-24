import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4Bqvq6TZjnoRhxDgQV5X4S-KnBfXHvB0",
  authDomain: "mario-plan-21c6f.firebaseapp.com",
  databaseURL: "https://mario-plan-21c6f.firebaseio.com",
  projectId: "mario-plan-21c6f",
  storageBucket: "",
  messagingSenderId: "649630224323"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase