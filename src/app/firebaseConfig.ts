import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'dk-wedding-2ba7d.firebaseapp.com',
  projectId: 'dk-wedding-2ba7d',
  storageBucket: 'dk-wedding-2ba7d.appspot.com',
  messagingSenderId: '885694283670',
  appId: '1:885694283670:web:48d9140f80b7a4a556e7b7',
  measurementId: 'G-CCRC2FSQMX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
