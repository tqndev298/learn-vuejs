<template>
  <h3>{{ title }}</h3>
</template>
<script setup>
import { defineProps } from 'vue'

const { title } = defineProps(['title'])
</script>
<style scoped>
h3 {
  width: 100%;
  font-weight: normal;
}
</style>
