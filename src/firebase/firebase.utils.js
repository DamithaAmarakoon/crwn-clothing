import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDP-JEE4xwLmFiE9ZskNMv6LfMBnBUNW68",
  authDomain: "crwn-clothing-db-9a1fd.firebaseapp.com",
  projectId: "crwn-clothing-db-9a1fd",
  storageBucket: "crwn-clothing-db-9a1fd.appspot.com",
  messagingSenderId: "864399336747",
  appId: "1:864399336747:web:043eaaa1d47047fd27516e",
  measurementId: "G-TB1PWRCWQD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
