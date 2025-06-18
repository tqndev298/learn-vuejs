<template>
  <div>
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">
        {{ item }}
        <button @click="deleteItem(item)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
} from 'vue'
const list = ref([
  'Apex Legend',
  'A Plague Tale: Innocence',
  'ART SQOOL',
  'Baba Is You',
  'Devil May Cry 5',
  'The Division 2',
  'Hypnospace Outlaw',
  'Katana ZERO',
  'testing unmounted hooks',
])
onMounted(() => {
  alert('mounted: DOM ready to use')
})
onBeforeMount(() => {
  alert('beforeMount: DOM not ready to use')
})
const deleteItem = (value) => {
  list.value = list.value.filter((item) => item !== value)
}

onUpdated(() => {
  alert('updated: virtual DOM will update after you click OK')
})

onBeforeUpdate(() => {
  alert('beforeUpdate: we know an update is about to happen, and have the data')
})

onUnmounted(() => {
  alert('unmounted: this component has been destroyed')
})
onBeforeUnmount(() => {
  alert('beforeUnmount: about to blow up this component')
})
</script>
