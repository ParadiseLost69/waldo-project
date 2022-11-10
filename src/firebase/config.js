import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCWilzO_QD68M21E0CEj4UhTQyQUseQQE",
  authDomain: "find-the-parasite.firebaseapp.com",
  projectId: "find-the-parasite",
  storageBucket: "find-the-parasite.appspot.com",
  messagingSenderId: "994013510163",
  appId: "1:994013510163:web:a9d51210215c3f27cc9de6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, storage, db };
