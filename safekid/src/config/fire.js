import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyDMMtNaoakN-KNtcut2R2AgOhVJWMAjj7U",
    authDomain: "safekid-demo-b3e44.firebaseapp.com",
    databaseURL: "https://safekid-demo-b3e44.firebaseio.com",
    projectId: "safekid-demo-b3e44",
    storageBucket: "safekid-demo-b3e44.appspot.com",
    messagingSenderId: "1064185719790",
    appId: "1:1064185719790:web:6ebcadd6266fa510b1fcff",
    measurementId: "G-NVTN14GYXW"
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

    async register(firstname,lastname,email,password,confirmpassword,p) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: lastname
      })
    }
  
    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }
  
    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
  }
  

  export default new fire()
