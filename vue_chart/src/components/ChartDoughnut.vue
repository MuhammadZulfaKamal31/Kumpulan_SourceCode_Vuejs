<template>
    <DoughnutChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>
<script setup>
// import pattern from "patternomaly"
import { ref, computed } from "vue";
import { DoughnutChart } from "vue-chart-3"

import { Chart, ArcElement, DoughnutController } from "chart.js";

Chart.register(DoughnutController, ArcElement)
const dataValues = ref([
    10, 20, null
])


const data = computed(() => ({
    labels: [" Foo", "Bar", "Baz"],
    datasets: [{
        data: dataValues.value,
        backgroundColor: ["#859900", "#d33682", "#cb4b16"]
    }]
}))

const options = ref({
    cutout: "40%",
    plugins: {
        title: {
            text: "Doughnut"
        }
    }
})
</script>
<style></style>