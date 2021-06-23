import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEVexb_DfBKr6PJPWHPRwK2P0Jc6K1svc",
  authDomain: "movielist-1f0ef.firebaseapp.com",
  projectId: "movielist-1f0ef",
  storageBucket: "movielist-1f0ef.appspot.com",
  messagingSenderId: "120835898563",
  appId: "1:120835898563:web:99f1a8877d7f36ec62b676"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
export default db;
