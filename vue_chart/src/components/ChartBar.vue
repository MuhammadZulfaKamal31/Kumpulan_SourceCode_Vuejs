<template>
    <BarChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>
<script setup>
import pattern from "patternomaly"
import { ref, computed } from "vue";
import { BarChart } from "vue-chart-3"

import { Chart, BarController, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement)
const dataValues = ref([
    [1, 3, 5, 6, 7, 8, 9],
    [1, 4, 6, 8, 5, 7, 1]
])
const data = computed(() => ({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
        label: "Foo",
        data: dataValues.value[0],
        backgroundColor: pattern.draw("dot", "#2aa198")
    }, {
        label: "Bar",
        data: dataValues.value[1],
        backgroundColor: pattern.draw("dash", "#268bd2")
    }]
}))

const options = ref({
    plugins: {
        title: {
            text: "Bar   "
        }
    }
})
</script>
<style></style>