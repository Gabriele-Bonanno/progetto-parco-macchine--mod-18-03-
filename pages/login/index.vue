<script setup lang="ts">
import {useAuthStore} from "~/store/auth"
const AuthStore=useAuthStore()
</script>

<template>
   <div class="flex flex-row justify-center">
    <div
      class="py-2 px-5 bg-green-500 font-bold text-white w-fit mt-3 cursor-pointer rounded-full"
      @click="AuthStore.login"
    >
      Effettua l'accesso 
    </div>
   </div>
   <div class="flex flex-row justify-center">
    <div
      class="py-2 px-5 bg-red-500 font-bold text-white w-fit mt-3 cursor-pointer rounded-full"
      @click="AuthStore.logout"
    >
      Effettua il logout 
    </div>
   </div>
</template>