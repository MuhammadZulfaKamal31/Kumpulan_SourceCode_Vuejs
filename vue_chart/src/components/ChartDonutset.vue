<template>
    <DoughnutChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>
  
<script setup>
import pattern from "patternomaly"
import { ref, computed } from "vue";
import { DoughnutChart } from "vue-chart-3"
import { Chart, ArcElement, DoughnutController } from "chart.js";

Chart.register(DoughnutController, ArcElement)
const dataValues = ref([
    50,      // Mengatur besar bagian yang ingin ditampilkan (setengah lingkaran)
    50       // Mengatur besar bagian yang tidak ingin ditampilkan
])

const data = computed(() => ({
    labels: ["Setengah Lingkaran", "Kosong"],
    datasets: [{
        data: dataValues.value,
        backgroundColor: ["#859900", "transparent"]
    }]
}))

const options = ref({
    cutout: "50%",  // Mengatur tingkat pengurangan bagian tengah (50%)
    plugins: {
        title: {
            text: "Half Donut"
        }
    }
})
</script>
  
<style></style>
  