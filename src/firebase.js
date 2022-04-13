// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  remove,
  update,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByjpsZ4uQKkMAJ1lJRM3XFlizG5AAA7QY",
  authDomain: "codeop-final-project.firebaseapp.com",
  databaseURL: "https://codeop-final-project-default-rtdb.firebaseio.com",
  projectId: "codeop-final-project",
  storageBucket: "codeop-final-project.appspot.com",
  messagingSenderId: "588392937245",
  appId: "1:588392937245:web:f6440eaf681c3913b793f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function storeData(dataset, payload) {
  set(ref(db, dataset), payload);
}

export async function getInfo(dataset) {
  const dbRef = ref(db);
  try {

    const snapshot = await get(child(dbRef, dataset));

    if (snapshot.exists()) {

      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
}
