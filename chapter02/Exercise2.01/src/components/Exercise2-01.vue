<template>
  <input v-model="firstName" placeholder="First Name" />
  <input v-model="lastName" placeholder="Last Name" />
  <h3 class="output">{{ fullName }}</h3>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>
