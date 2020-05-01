import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBcpP9_Dz19pSF3fCp2YjV47buWX--wYzw",
  authDomain: "tobi-ninja-smoothies.firebaseapp.com",
  databaseURL: "https://tobi-ninja-smoothies.firebaseio.com",
  projectId: "tobi-ninja-smoothies",
  storageBucket: "tobi-ninja-smoothies.appspot.com",
  messagingSenderId: "655912537165",
  appId: "1:655912537165:web:b6d3ba9e1c5a42e30be004",
  measurementId: "G-KNGFBN36NM"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//export firestore database
export default firebaseApp.firestore()