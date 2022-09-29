import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDE_Bgl6Pu5QfCrcoxverdgXClRdfwTHnQ",

  authDomain: "todoapp-9261a.firebaseapp.com",

  databaseURL:
    "https://todoapp-9261a-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "todoapp-9261a",

  storageBucket: "todoapp-9261a.appspot.com",

  messagingSenderId: "659588441705",

  appId: "1:659588441705:web:1349bd0295aa3da39e24f8",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
