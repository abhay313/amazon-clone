import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdx71U4QWctKwG9QbvzDzDlCOk5UrvSoU",
    authDomain: "challenege-38e2e.firebaseapp.com",
    projectId: "challenege-38e2e",
    storageBucket: "challenege-38e2e.appspot.com",
    messagingSenderId: "722205414358",
    appId: "1:722205414358:web:643a747e59004dca820a77",
    measurementId: "G-76MQDJJ508"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export { db, auth };