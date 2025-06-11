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
<script>
export default {
  data() {
    return {
      list: [
        "Apex Legends",
        "Dota 2",
        "League of Legends",
        "Overwatch",
        "PUBG",
        "R6",
        "Valorant",
        "testing unmounted hooks",
      ],
    };
  },
  beforeCreate() {
    alert("beforeCreate: data is static, thats it");
  },
  created() {
    alert("created: data and events ready, but no DOM");
  },
  beforeMount() {
    alert("beforeMount: $el not ready");
  },
  mounted() {
    alert("mounted: DOM ready to use");
  },
  methods: {
    deleteItem(value) {
      this.list = this.list.filter((item) => item !== value);
    },
  },
  beforeUpdate() {
    alert(
      "beforeUpdate: we know an update is about to happen, and have the data"
    );
  },
  updated() {
    alert("updated: virtual DOM will update after you click OK");
  },
  beforeUnmount() {
    alert("beforeUnmount: about to blow up this component");
  },
  unmounted() {
    alert("unmounted: this component has been destroyed");
  },
};
</script>
