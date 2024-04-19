import {defineStore} from "pinia"
import type { Segnalazione } from "./models/strutturaGuasto";
import { collection, addDoc,getDocs, deleteDoc,doc } from "firebase/firestore";
import { useFirebase } from "~/composables";
import { getFirestore, updateDoc } from "firebase/firestore";
export const useGuasti = defineStore("guasti-store", {
  state: () => ({
    guasti: [] as Array<Segnalazione>,
  }),
  actions: {
    async init() {
      const {fireStore} =useFirebase();
      const notesSnapshot=await getDocs(collection(fireStore,"guasti"));
      //const notes = notesSnapshot.docs
      const guasti = notesSnapshot.docs.map(doc => ({
        id: doc.id, // Include the document ID
        ...doc.data() // Spread the rest of the document data
     }));
       // this.notes = notes.map(note=>note.data());
       this.guasti = guasti;
    },
    async inserisciGuasto(nome1: string, aula1: string, npc1:string, guasto1:string,  stato1:string, data1:Date) {
      const {fireStore} = useFirebase();
      try {
        const docRef = await addDoc(collection(fireStore, "guasti"), {
        nome: nome1,
        aula: aula1,
        npc:npc1,
        guasto:guasto1,
        stato: stato1, 
        data: data1
        });
        console.log("Document written with ID: ", docRef.id);
      this.guasti.push({
        id: docRef.id,
        nome: nome1,
        aula: aula1,
        npc:npc1,
        guasto:guasto1,
        stato: stato1, 
        data: data1
      });
      this.updateLocalStorage();
    } catch (e) {
        console.error("Error adding document: ", e);
      }

    },
    deleteGuasto(guastoId: string): boolean {
      const oldGuasto = [...this.guasti];
      const GuastoIdToBeDeleated = oldGuasto.findIndex(
        (segnalazione) => segnalazione.id === guastoId
      );
      if (GuastoIdToBeDeleated === -1) return false;
      oldGuasto.splice(GuastoIdToBeDeleated, 1);
      this.guasti = oldGuasto;
      this.updateLocalStorage();
      return true;
    },
    
  async editGuasto(guastoId: string, stato1: string) {
const db = getFirestore();
 try {
    const guastoRef = doc(db, "guasti", guastoId);
    await updateDoc(guastoRef, { stato: stato1 });
    console.log("Document updated successfully");
 } catch (error) {
    console.error("Error updating document: ", error);
 }
},
    updateLocalStorage(){
      localStorage.setItem("guasti", JSON.stringify(this.guasti));
    },
    loadGuasto(guastoId: string) {
      return this.guasti.find((element) => element.id == guastoId);
    },
  },
  getters: {
    guastiGetters(state) {
      return state.guasti;
    },
  },
});
