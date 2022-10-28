
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_i6k1aigHEmjvldx1OlN-C5hhPcf5zHs",
    authDomain: "netflix-clone-3d452.firebaseapp.com",
    projectId: "netflix-clone-3d452",
    storageBucket: "netflix-clone-3d452.appspot.com",
    messagingSenderId: "463578704681",
    appId: "1:463578704681:web:cba691cb5a2da05a042538"
  };

    // const firebaseApp= firebase.initializeApp(firebaseConfig);
    // const db = firebaseApp.firestore();
    // const auth = firebase.auth();
    // Initialize Firebase
    const firebaseApp = initializeApp(firebaseConfig); //firebase.initialize

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(firebaseApp);   //firebaseApp.firestore();

        // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(firebaseApp);      //firebase.auth();

  export { auth };
  export default db;
