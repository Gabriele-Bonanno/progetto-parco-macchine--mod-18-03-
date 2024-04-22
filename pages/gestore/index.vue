<script setup lang="ts">
import { useGuasti } from "@/store/guasti";
const guastiStore = useGuasti();
const router = useRouter();
const numRegistrato = computed(
  () =>
    guastiStore.guastiGetters.filter((note) => note.stato === "registrato")
      .length
);
const numInLavorazione = computed(
  () =>
    guastiStore.guastiGetters.filter((note) => note.stato === "in lavorazione")
      .length
);
const numRisolto = computed(
  () =>
    guastiStore.guastiGetters.filter((note) => note.stato === "risolto").length
);
</script>

<template>
  <div class="w-80" style="position: absolute; top: 200px; right: 80px">
    <GraficoElement :data="[numRegistrato, numInLavorazione, numRisolto]" />
  </div>
  <div v-if="guastiStore.guastiGetters.length == 0">
    <div class="font-bold mt-3 mb-5 bg-blue-500">:) Nessun guasto trovato!</div>
  </div>

  <div v-else>
    <GestoreElement
      v-for="note in guastiStore.guastiGetters.slice().reverse()"
      :note="note"
    >
    </GestoreElement>
  </div>
</template>
