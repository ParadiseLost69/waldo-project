import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTTL58Qc2A65NUXRWJbK4UxXJ1uVtFaLw",
  authDomain: "waldo-app-c7675.firebaseapp.com",
  projectId: "waldo-app-c7675",
  storageBucket: "waldo-app-c7675.appspot.com",
  messagingSenderId: "70828184317",
  appId: "1:70828184317:web:16afdfddc5cacbe6cb2494",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
