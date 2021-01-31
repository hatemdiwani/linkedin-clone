import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB_qrYCeYOxmMbN5Ug4TZbk57uQiDbQHnY",
  authDomain: "linkedin-clone-ce80b.firebaseapp.com",
  databaseURL: "https://linkedin-clone-ce80b-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-ce80b",
  storageBucket: "linkedin-clone-ce80b.appspot.com",
  messagingSenderId: "536302559389",
  appId: "1:536302559389:web:f9dd8d7264f6a9ea2bb474"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebase.database();
const auth = firebase.auth();

export {db,auth};