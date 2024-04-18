<template>
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    props: ['data'],
    mounted() {
      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Registrato', 'In lavorazione', 'Risolto'],
          datasets: [{
            data: this.data,
            backgroundColor: ['red', 'yellow', 'green'],
          }]
        },
      });
    },
  };
  </script>
  