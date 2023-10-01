// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3wvII-DUSmMu5aRFEr3SiUVGbxMG1Ix4',
  authDomain: 'react-auth-context-448f4.firebaseapp.com',
  projectId: 'react-auth-context-448f4',
  storageBucket: 'react-auth-context-448f4.appspot.com',
  messagingSenderId: '497973418947',
  appId: '1:497973418947:web:654405e07329b4805a3b76',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
