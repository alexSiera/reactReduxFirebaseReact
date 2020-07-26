import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyA6eBijos-nj6OX5yBakXBmbUeYqGRDIm8",
  authDomain: "net-ninja-marioplan-c17df.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-c17df.firebaseio.com",
  projectId: "net-ninja-marioplan-c17df",
  storageBucket: "net-ninja-marioplan-c17df.appspot.com",
  messagingSenderId: "680369265227",
  appId: "1:680369265227:web:a400d9054118751c4a0bce",
  measurementId: "G-7LJPTHXWVH"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({})
export default firebase;