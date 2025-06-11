<template>
  <div>
    <h1>Triggering Vue Methods</h1>
    <ul>
      <li v-for="index in 5" :key="index">
        <button @click="triggerAlert(index)">Trigger {{ index }}</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
const triggerAlert = (index) => {
  alert(`${index} has been clicked`);
};
</script>
