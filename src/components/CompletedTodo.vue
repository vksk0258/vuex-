<!--완료된 TODO가 몇개인지 보여주는 컴포넌트-->
<template>
  <div>
      Completed Todo: {{ numberOfcompletedTodo }}
  </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },

    computed: {
        numberOfcompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style>

</style>