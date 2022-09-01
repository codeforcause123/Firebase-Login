import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDHvWOHvWwrDimJL3DZNkpioWZFSedUJ0I",
    authDomain: "loginauth-ca2d7.firebaseapp.com",
    projectId: "loginauth-ca2d7",
    storageBucket: "loginauth-ca2d7.appspot.com",
    messagingSenderId: "690442740794",
    appId: "1:690442740794:web:2a3654f29274e8eba90103"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;