<script setup lang="ts">
import { useGuasti } from "@/store/guasti";
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const guastiStore = useGuasti();
const router = useRouter();
const selectedStatus = ref('tutti');

const filteredNotes = computed(() => {
 if (selectedStatus.value === 'tutti') {
    return guastiStore.guastiGetters;
 } else {
    return guastiStore.guastiGetters.filter(note => note.stato === selectedStatus.value);
 }
});


const numRegistrato = computed(() => guastiStore.guastiGetters.filter(note => note.stato === 'registrato').length);
const numInLavorazione = computed(() => guastiStore.guastiGetters.filter(note => note.stato === 'in lavorazione').length);
const numRisolto = computed(() => guastiStore.guastiGetters.filter(note => note.stato === 'risolto').length);
</script>


<template>
  <div class="w-80" style="position: absolute; top: 200px ; right: 80px">
    <GraficoElement :data="[numRegistrato, numInLavorazione, numRisolto]" />
    </div>
 <div>
      <select  v-model="selectedStatus" >
        <option value="tutti" selected>tutti</option>
        <option value="registrato" selected>registrato</option>
        <option value="risolto">risolto</option>
        <option value="in lavorazione">in lavorazione</option>
      </select>
    </div>
    <br>
  <div v-if="guastiStore.guastiGetters.length == 0">
    <div class="font-bold mt-3 mb-5 bg-green-500">
      :) Nessun guasto trovato!
    </div>
   
    
    <div class="flex flex-row justify-center">
      <div
        @click="router.push({ name: 'notes' })"
        class="py-2 px-5 bg-red-500 font-bold text-white w-fit mt-3 cursor-pointer"
      >
        Inserisci guasto
      </div>
      
    </div>
   
  </div>
  <div v-else>
    <NotesElement v-for="note in filteredNotes.slice().reverse()" :note="note"> </NotesElement>
  </div>
   
</template>
