import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoDTtazUHlkTqiIfhSUFi5wp47EyjDpsw",
    authDomain: "projectapp-6a26a.firebaseapp.com",
    databaseURL: "https://projectapp-6a26a.firebaseio.com",
    projectId: "projectapp-6a26a",
    storageBucket: "projectapp-6a26a.appspot.com",
    messagingSenderId: "470379629027"
  };
  firebase.initializeApp(config);


  //initializing firestore
  firebase.firestore() 

  export default firebase