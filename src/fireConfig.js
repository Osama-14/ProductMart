
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMxrY-Mr59iGY7b3emF0iKsrPQ04RlT1g",
  authDomain: "productsmart-801d4.firebaseapp.com",
  projectId: "productsmart-801d4",
  storageBucket: "productsmart-801d4.appspot.com",
  messagingSenderId: "1013098574350",
  appId: "1:1013098574350:web:8b10d1919ea0391959825f",
  measurementId: "G-D83WZN1N7D"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;