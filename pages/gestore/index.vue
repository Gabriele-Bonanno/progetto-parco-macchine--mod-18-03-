<script setup lang="ts">
import { useGuasti } from "@/store/guasti";
const guastiStore = useGuasti();
const router = useRouter();
</script>

<template>
  <div v-if="guastiStore.guastiGetters.length == 0">
    <div class="font-bold mt-3 mb-5 bg-blue-500">:) Nessun guasto trovato!</div>
  </div>

  <div v-else>
    <GestoreElement v-for="note in guastiStore.guastiGetters" :note="note">
    </GestoreElement>
  </div>
</template>
