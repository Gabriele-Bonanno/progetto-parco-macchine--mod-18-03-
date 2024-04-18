import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { useFirebase } from "~/composables/useFirebase";
export const useAuthStore=defineStore('auth-store',{
    state:()=> ({
        user:null as any,
    }),
    actions:{
      async  init():Promise<boolean>{
        const auth=getAuth();
        const {fireStore}=useFirebase();
       // const notesSnapshot= await

        if (auth.currentUser)
        {
            this.user=auth.currentUser;
            return true;
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!auth.currentUser)
                {
                    resolve(false);
                }
                this.user=auth.currentUser;
                return  resolve(true);
            }, 300)
        })
      },
       async login(){
        const provider= new GoogleAuthProvider();
        const auth=getAuth()
        try{
       const  result = await signInWithPopup (auth,provider)
       const credential = GoogleAuthProvider.credentialFromResult(result);
       if (!credential)
       {
        throw "credentils not valid";
       }
       const token = credential.accessToken!;
       localStorage.setItem("token", token)
       // The signed-in user info.
       this.user = result.user;
        }
        catch (error)
        {console.log(error)}
       },
       async logout(){
        try{
            const auth= getAuth();
            await signOut(auth)
            this.user=null
        }
        catch (error){
            console.error(error)
            
        }
       }
    },
    getters:{
        userGetter(state)
        
        {
            return state.user;
        }
    },
});