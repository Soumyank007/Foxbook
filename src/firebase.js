
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBY4cM76nBd48dgAMdJAOIhcqD1oyXo8d8",
    authDomain: "social-site-9d41a.firebaseapp.com",
    projectId: "social-site-9d41a",
    storageBucket: "social-site-9d41a.appspot.com",
    messagingSenderId: "626979567616",
    appId: "1:626979567616:web:16097bc3db43d4021180e5",
    measurementId: "G-78KKS273VF"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{ auth,provider };
  export default db;