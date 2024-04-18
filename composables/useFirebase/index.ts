import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
export const useFirebase=() => {
    const firebaseConfig = {
        apiKey: "AIzaSyBF8x3C9c7N32_mixwelDX2GRackdGRFbY",
  authDomain: "parcomacchine-8fb62.firebaseapp.com",
  projectId: "parcomacchine-8fb62",
  storageBucket: "parcomacchine-8fb62.appspot.com",
  messagingSenderId: "1007633091051",
  appId: "1:1007633091051:web:3f981dadb15d7dc8d8f1ae"
        
      };
      const app = initializeApp(firebaseConfig);

      //prova secondo modifica
      const fireStore = getFirestore(app);
      //modifica linea
      const storage = getStorage(app)
      return {fireStore, storage,app}
    }