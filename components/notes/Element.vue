<script setup lang="ts">
const nuovostato = "";
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
    class="border p-5 rounded-lg drop-shadow-md bg-white flex flex-row justify-between items-center"
  >
    Segnalatore: {{ note.nome }}<br />
    PC: {{ note.npc }}<br />
    Aula: {{ note.aula }}<br />
    Problematica: {{ note.guasto }} <br />
    Data di apertura {{ note.data }}<br />
    <div v-if="note.stato=='risolto'"
  class="p-2 rounded-md font-bold bg-green-600 xp-5 py-1 text-white text-center"
>
{{ note.stato }}
</div>
<div v-if="note.stato=='in lavorazione'"
  class="p-2 rounded-md font-bold bg-yellow-600 xp-5 py-1 text-white text-center"
>
{{ note.stato }}
</div>
<div v-if="note.stato=='registrato'"
  class="p-2 rounded-md font-bold bg-red-600 xp-5 py-1 text-white text-center"
>
{{ note.stato }}
</div>
  </div>
  
</template>
