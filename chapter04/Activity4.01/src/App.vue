<script>
import MessageEditor from './components/MessageEditor.vue'
import MessageFeed from './components/MessageFeed.vue'
export default {
  data() {
    return {
      messages: [],
    }
  },
  components: {
    MessageEditor,
    MessageFeed,
  },
  methods: {
    onSend(event) {
      this.messages = [...this.messages, event]
    },
  },
}
</script>

<template>
  <MessageFeed :messages="messages" />
  <MessageEditor @send="onSend($event)" />
</template>
