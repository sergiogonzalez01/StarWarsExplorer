import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCL54k3fMmLDevSKZpEABE7rUDMmE-E97M",
  authDomain: "star-wars-explorer.firebaseapp.com",
  projectId: "star-wars-explorer",
  storageBucket: "star-wars-explorer.appspot.com",
  messagingSenderId: "332368679399",
  appId: "1:332368679399:web:f8c75c38bc1a72a4b16d42"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
