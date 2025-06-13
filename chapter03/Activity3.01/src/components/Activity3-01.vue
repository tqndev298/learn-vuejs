<template>
  <div class="container">
    <h1>Activity 3.01</h1>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h3>Full Name: {{ fullName }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Activity3-01',
  data() {
    return {
      fName: '',
      lName: '',
    }
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`
    },
  },
}
</script>

<style>
input {
  padding: 8px;
  margin: 8px;
}
</style>
