import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-u5sNoIKBEw-hZghZz0Pb1rrJ8Ehc2wU',
  authDomain: 'dk-wedding-2ba7d.firebaseapp.com',
  projectId: 'dk-wedding-2ba7d',
  storageBucket: 'dk-wedding-2ba7d.appspot.com',
  messagingSenderId: '885694283670',
  appId: '1:885694283670:web:48d9140f80b7a4a556e7b7',
  measurementId: 'G-CCRC2FSQMX',
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = getFirestore();

export default firestore;
