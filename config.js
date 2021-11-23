import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBYgXURgj0NOEsuJKyPu3iHmykDAjH6P2w",
  authDomain: "project71-7ac06.firebaseapp.com",
  projectId: "project71-7ac06",
  storageBucket: "project71-7ac06.appspot.com",
  messagingSenderId: "669543216243",
  appId: "1:669543216243:web:a6855a45cf9306a9176606"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

