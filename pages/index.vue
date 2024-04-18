<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div>
    Benvenuto, questo programma ti consentirà di rendere più efficente la
    scuola, segnalando i guasti alle macchine, così, la risoluzione dei problemi
    sarà molto più rapida ed efficiente. Hai riscontrato un guasto su un PC,
    router o qualsiasi altro dispositivo elettronico? Segnalalo qui sotto!
  </div>

  <div class="flex flex-row justify-center">
    <div
      class="py-2 px-5 bg-green-500 font-bold text-white w-fit mt-3 cursor-pointer rounded-full"
      @click="router.push({ name: 'login' })"
    >
      Accedi come segnalatore
    </div>
  </div>
  <div class="flex flex-row justify-center">
    <div
      class="py-2 px-5 bg-red-500 font-bold text-white w-fit mt-3 cursor-pointer rounded-full"
      @click="router.push({ name: 'gestore' })"
    >
      Accedi alla pagina del gestore  
    </div>
  </div>
</template>
