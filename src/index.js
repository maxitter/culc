import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdlXybATEVLYLGCH-HkcOUfIx4olu85Ik",
  authDomain: "money2-54236.firebaseapp.com",
  projectId: "money2-54236",
  storageBucket: "money2-54236.appspot.com",
  messagingSenderId: "134011490128",
  appId: "1:134011490128:web:a80a622264e1d215f92655",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const FirebaseContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={db}>
      <App />
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
