import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_rDj7facUKOktLgWkhlLERP9pc_Kt5X4",
    authDomain: "whats-app-2b8c4.firebaseapp.com",
    databaseURL: "https://whats-app-2b8c4.firebaseio.com",
    projectId: "whats-app-2b8c4",
    storageBucket: "whats-app-2b8c4.appspot.com",
    messagingSenderId: "499568434358",
    appId: "1:499568434358:web:7bebc70e97f0d44d32da17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;