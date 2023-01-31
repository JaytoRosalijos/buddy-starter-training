import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtgsGNM_mRAiGA_hvFEiliiHw6dgTMMHo",
  authDomain: "buddy-starter-training-api.firebaseapp.com",
  projectId: "buddy-starter-training-api",
  storageBucket: "buddy-starter-training-api.appspot.com",
  messagingSenderId: "1013790877134",
  appId: "1:1013790877134:web:ddf5b4cc339fd6d93fb79f",
  measurementId: "G-JMC61VGZY5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.setPersistence(browserLocalPersistence);

export { app, auth };
