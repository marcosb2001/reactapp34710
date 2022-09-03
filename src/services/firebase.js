// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import itemsData from "../data/data";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_7rHhLzJPuZmTtkQ2b3-ziyijqRPGuA",
  authDomain: "reactapp34710.firebaseapp.com",
  projectId: "reactapp34710",
  storageBucket: "reactapp34710.appspot.com",
  messagingSenderId: "918195642775",
  appId: "1:918195642775:web:041295e1dae797c464e4d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function saveProductsToFirebase() {
  const collectionProducts = collection(firestoreDB, "products")

  for(let item of itemsData){
    const docref = await addDoc(collectionProducts, item)
    console.log(docref.id)
  }
}

export default firestoreDB;