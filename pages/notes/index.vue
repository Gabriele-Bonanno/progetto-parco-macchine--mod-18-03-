<script setup lang="ts">
import { useGuasti } from "@/store/guasti";
//import { normalizeModuleTranspilePath } from "nuxt/kit";
const guasto = ref("");
const aula = ref("");
const npc = ref("");
const segnalatore = ref("");
const stato = ref("");
const guastiStore = useGuasti();
const router = useRouter();
function submitGuasto() {
  if (guasto.value.trim() == "") {
    alert("Attenzione!! Inserisci il guasto");
    return;
  }
  if (aula.value.trim() == "") {
    alert("Attenzione!! Inserisci l'ubicazione");
    return;
  }
  if (npc.value.trim() == "") {
    alert("Attenzione!! Inserisci il il numero del pc (inventario)");
    return;
  }

  guastiStore.inserisciGuasto(
    segnalatore.value,
    aula.value,
    npc.value,
    guasto.value,
    "registrato",
    new Date()
  );
  aula.value = "";
  npc.value = "";
  guasto.value = "";
  segnalatore.value = "";
}
</script>

<template>
  <div
    class="relative w-fit pr-3 pt-3 mt-3 cursor-pointer"
    @click="router.push({ name: 'notes-list' })"
  >
    <div class="px-5 py-2 bg-yellow-400 text-black w-fit">
      Visualizza guasti
    </div>

   <div
      
      class="font-bold absolute right-0 top-0 bg-red-400 text-white rounded-full w-5 h-5"
    >
    <!---- <div class="font-bold mt-3 absolute top-0 right-0">
      v-if="guastiStore.guastiGetters.length > 0"
        {{ guastiStore.guastiGetters.length }}
      </div>--->
    </div>
  </div>

  <div>
    <div class="text-x1 font-bold mt-3 mb-5 bg-blue-400">
      Inserisci il tuo nome
    </div>
    <textarea class="border w-full" rows="1" v-model="segnalatore" />

    <div class="text-x1 font-bold mt-3 mb-5 bg-blue-400">
      Inserisci il numero del PC
    </div>
    <textarea class="border w-full" rows="1" v-model="npc" />

    <div class="text-x2 font-bold mt-3 mb-5 bg-blue-400">
      Inserisci l'ubicazione del PC
    </div>
    <textarea class="border w-full" rows="1" v-model="aula" />

    <div class="text-x3 font-bold mt-3 mb-5 bg-blue-400">
      Inserisci la descrizione del guasto
    </div>
    <textarea rows="10" cols="50" class="border w-full" v-model="guasto" />
  </div>
  <div
    class="py-5 w-full bg-yellow-400 text-black text-center font-bold cursor-pointer rounded-xl"
    @click="submitGuasto"
  >
    Registra guasto
  </div>
</template>
<!--        --->
~/store/guasti
