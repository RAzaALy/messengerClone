import firebase from "firebase";
const firebaseConfig = {
your firebase config
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
firebase.analytics();
