import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyCjWdqtNB8mU0VJmIvMDowDaaODCKViNP4",
    authDomain: "my-project-1cf40.firebaseapp.com",
    databaseURL: "https://my-project-1cf40.firebaseio.com",
    projectId: "my-project-1cf40",
    storageBucket: "my-project-1cf40.appspot.com",
    messagingSenderId: "824884617037",
    appId: "1:824884617037:web:f1b589bb26cd2495c0a104"
  };
  // Initialize Firebase
  class fire{
    constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth=firebase.auth()
        this.db=firebase.firestore()
        
    }

    signin(email, password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }

    logout(){
        return this.auth.signOut()
    }

    isInitialized(){
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }

    getCurrentUsername(){
      return this.auth.currentUser && this.auth.currentUser.displayName
    }

  }

  export default new fire()
