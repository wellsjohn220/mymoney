import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCeAU4iOiABoOKb8h4WPAnUkG_bnXjxXvI",
  authDomain: "moneyfull123452023.firebaseapp.com",
  projectId: "moneyfull123452023",
  storageBucket: "moneyfull123452023.appspot.com",
  messagingSenderId: "483126454873",
  appId: "1:483126454873:web:f9e3f3f7cf63328eed5f48"
};

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }