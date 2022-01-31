import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUSZjtbuFlbhQwf1Pjei_-jJ61hu0djqw",
    authDomain: "pavels-hot-burgers.firebaseapp.com",
    databaseURL: "https://pavels-hot-burgers-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "pavels-hot-burgers",
    // storageBucket: "pavels-hot-burgers.appspot.com",
    // messagingSenderId: "519352556754",
    // appId: "1:519352556754:web:2657d6fcd5793083ac610b"
})

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;