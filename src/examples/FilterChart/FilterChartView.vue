<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { BarChart } from "~/components/Chart/BaseChart";
import MultiselectCheckbox from "~/components/MultiselectCheckbox/MultiselectCheckbox.vue";
import type { IOption } from "~/types/IFilter";

const data = [
  { x: "January", y: 65 },
  { x: "February", y: 59 },
  { x: "March", y: 80 },
  { x: "April", y: 81 },
  { x: "May", y: 56 },
  { x: "June", y: 55 },
  { x: "July", y: 40 },
];

const options = computed(() => {
  return {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: false,
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: ({ y }: { y: number }) => y,
      },
    },
    layout: {
      padding: 20,
    },
  };
});

const filter = ref();
const filterData = ref();
const filteredData = ref();

const chartData = computed(() => {
  return {
    datasets: [
      {
        data: filteredData.value ? filteredData.value : data,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
});

const applyFilters = ({ options }: { options: IOption[] }) => {
  const available = options
    .filter((o) => o.available === true)
    .map((o) => o.name);

  filteredData.value = data.filter((d) => available.includes(d.x));
};

onBeforeMount(() => {
  const options = data.map((d) => ({
    name: d.x,
    available: true,
    visible: true,
    exclude: false,
  }));

  filterData.value = {
    id: "months",
    title: "Months",
    options: options,
    isOriginalState: true,
  };
});
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <MultiselectCheckbox
            v-bind="filterData"
            @apply="applyFilters"
            @revert="applyFilters"
            ref="filter"
          />
          <button
            class="btn btn-primary text-white float-end m-3"
            @click="filter.revertFilter()"
          >
            Reset Filter
          </button>
          <BarChart :data="chartData" :options="options" />
        </div>
        <div class="col-6"></div>
      </div>
    </div>
  </main>
</template>
