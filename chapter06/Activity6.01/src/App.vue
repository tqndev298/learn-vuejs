<template>
  <div id="app">
    <TodoList :todos="todos">
      <template #todo="{ todo }">
        <TodoEntry
          :id="todo.id"
          :title="todo.title"
          :completed="todo.completed"
          @completeChange="handleCompleteChange(todo.id, $event)"
        />
      </template>
    </TodoList>
  </div>
</template>
<script>
import TodoEntry from './components/TodoEntry.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoEntry,
    TodoList,
  },
  inject: ['axios'],
  async mounted() {
    const { data: todos } = await this.axios.get(`${this.$baseUrl}/todos`)
    this.todos = todos
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    handleCompleteChange(id, newCompleted) {
      this.todos = this.todos.map((t) => (t.id === id ? { ...t, completed: newCompleted } : t))
    },
  },
}
</script>
