<template>
  <div id="app" class="container">
    <h1>Vue Devtools debugging</h1>
    <input type="text" placeholder="Filter list" v-model="input" />

    <ul>
      <li v-for="(item, i) in computedList" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Exercise',
  data() {
    return {
      frameworks: ['Vue', 'React', 'Backbone', 'Ember', 'Knockout', 'jQuery', 'Angular'],
      input: '',
    }
  },
  computed: {
    computedList() {
      return this.frameworks.filter((item) => {
        return item.toLowerCase().includes(this.input.toLowerCase())
      })
    },
  },
}
</script>
