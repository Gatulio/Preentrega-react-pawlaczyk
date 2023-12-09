import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: "AIzaSyB5tcOVCZR_QjC-lbrYoV36iRtbosft7nQ",
  authDomain: "react-pawlaczyk.firebaseapp.com",
  projectId: "react-pawlaczyk",
  storageBucket: "react-pawlaczyk.appspot.com",
  messagingSenderId: "9316133117",
  appId: "1:9316133117:web:97715e64986c4a5b3cf694"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
