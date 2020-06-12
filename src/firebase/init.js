import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJXBTD5HUCsXKw7bmZAB045cKZpMv8yY8",
  authDomain: "interest-earners.firebaseapp.com",
  databaseURL: "https://interest-earners.firebaseio.com",
  projectId: "interest-earners",
  storageBucket: "interest-earners.appspot.com",
  messagingSenderId: "676192490248",
  appId: "1:676192490248:web:c30767c32d10e5ec2f12bd",
  measurementId: "G-6GYHVF5SJ8"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();