<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content: {
    default: '',
    type: String,
  },
})
</script>
