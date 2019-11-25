import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBHE6dIKNOGRZ_kca3VDzM7kHPL6pJWlPQ",
  authDomain: "mycrm-187a2.firebaseapp.com",
  databaseURL: "https://mycrm-187a2.firebaseio.com",
  projectId: "mycrm-187a2",
  storageBucket: "mycrm-187a2.appspot.com",
  messagingSenderId: "690849547863",
  appId: "1:690849547863:web:f8ba2b020bfab2ecc54512",
  measurementId: "G-64V3NCGZV9"
};

const app = firebase.initializeApp(config)

export default app;
