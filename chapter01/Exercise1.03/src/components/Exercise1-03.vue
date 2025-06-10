<template>
  <div>
    <h1 v-if="true" v-once v-text="text"></h1>
    <h2 v-html="html" v-else-if="false"></h2>
    <a :href="link.url" :target="link.target" :tabindex="link.tabindex">
      {{ link.title }}
    </a>
  </div>
</template>
<script setup>
const text = "Directive Text";
const html = "Stylise</br>HTML in<br/><b>Your data</b>";
const link = {
  title: "Go to google",
  url: "https://google.com",
  tabindex: 1,
  target: "_blank",
};
</script>
