
import type { pushScopeId } from 'vue';

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
const router= useRouter()
const authStore=useAuthStore();


</script>

<template>

    <div class="bg-green-500 drop-shadow-sm border-b-6 py-6  px-10 w-full border-black text-blue-900 flex flex-row">
        <div>
            Gestione parco macchine
          </div>

          <div class="flex flex-row gap-4 flex-1 justify-end">
            <div @click="router.push({name: 'index'})"class="hover:text-red-600 transition-all duration-500 cursor-pointer hover:text-lg">
            Home
          </div>

          <div @click="router.push({name: 'notes'})" class="hover:text-red-600 transition-all duration-500 cursor-pointer hover:text-lg"> 
           Visualizza macchine
            </div>

            <div @click="router.push({name: 'login'})" class="hover:text-red-600 transition-all duration-500 cursor-pointer hover:text-lg">
          pagina login logout
            </div>

            <div class="flex flex-row" v-if="authStore.userGetter">
            <div class="pr-1 py-1"><img class="h-4 w-4 rounded-full" :src="authStore.userGetter.photoURL" alt="immgine"></div>
            <div> {{ authStore.userGetter.displayName }} </div>
            </div>

            
         </div>
         

         </div>
    
</template>