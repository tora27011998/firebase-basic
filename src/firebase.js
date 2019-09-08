  import firebase from 'firebase/app'
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC441lvlZebE4mJ5nSnBQy61sP3mrdQ_E8",
    authDomain: "fir-basic-6d02f.firebaseapp.com",
    databaseURL: "https://fir-basic-6d02f.firebaseio.com",
    projectId: "fir-basic-6d02f",
    storageBucket: "",
    messagingSenderId: "186590900416",
    appId: "1:186590900416:web:ffdde0823f3bf5c56abd25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;