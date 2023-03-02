import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKp02v5mf38X5JhEto8M4CJVlklJHbLXc",
  authDomain: "fir-auth-4dmec.firebaseapp.com",
  projectId: "fir-auth-4dmec",
  storageBucket: "fir-auth-4dmec.appspot.com",
  messagingSenderId: "555237398420",
  appId: "1:555237398420:web:a4e4b5bc64b6af211c2181",
  measurementId: "G-3TDB64N3FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};