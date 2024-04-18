<script setup lang="ts">
const nuovostato ="";
const router = useRouter();

import type { Segnalazione } from "@/store/models/strutturaGuasto";
import { useGuasti } from "~/store/guasti";
defineProps({
  note: {
    type: Object as PropType<Segnalazione>,
    required: true,
  },
});
const guastiStore = useGuasti();
</script>

<template>
  <div
    class="border p-5 rounded-lg drop-shadow-md bg-white cursor-pointer flex flex-row justify-between items-center"
  >
    Segnalatore: {{ note.nome }}<br />
    PC: {{ note.npc }}<br />
    Aula: {{ note.aula }}<br />
    Problematica: {{ note.guasto }} <br />
    Data di apertura {{ note.data }}<br />
    Stato attuale: {{ note.stato }}
    <div>
      <select @change="guastiStore.editGuasto(note.id, nuovostato)" v-model="nuovostato" >
        <option value="registrato" selected>registrato</option>
        <option value="risolto">risolto</option>
        <option value="in lavorazione">in lavorazione</option>
      </select>
    </div>
  </div>
</template>
