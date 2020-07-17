<template>
    <div> <!--이벤트 받아온것들은 부모로 다시 전달해줘야한다-->
        <Todo 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
            />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
    props: {
        todos: {
            type : Array,
            required: true
        }
    },
    methods: { //Todo.vue에서 'toggle-checkbox','click-delete' 두개 보낸것을 받는다 이것들 다시 앱으로 올려준다
        toggleCheckbox(value){
            this.$emit('toggle-checkbox', value)
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId)
        }
    }
}
</script>

<style>

</style>