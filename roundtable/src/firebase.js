import { useState, useEffect } from 'react';
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut,} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB7nVbzy_l27Fz2swyPObKmZ0DvsNB6bBU",
    authDomain: "table-9c8cb.firebaseapp.com",
    projectId: "table-9c8cb",
    storageBucket: "table-9c8cb.appspot.com",
    messagingSenderId: "547731678694",
    appId: "1:547731678694:web:8b8f864b215f368a866227",
    measurementId: "G-KMWBZ4W2N8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);
  export const auth= getAuth();

  export function signup(email, password){
    return  createUserWithEmailAndPassword(auth, email, password);
  }
  export function login(email, password){
   return signInWithEmailAndPassword(auth, email, password);
}
  export function logout(){
    return signOut(auth)
  }
  export function useAuth(){
   const [currentUser, setCurrentUser] = useState();
   useEffect(() => {
     const unSub = onAuthStateChanged(auth, user =>setCurrentUser(user));
    return unSub;
     
   }, [])
    return currentUser;
   
  }