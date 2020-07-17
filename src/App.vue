<template>
  <div id="app" class="container"> <!--부트스트랩 클래스-->
    <h1 class="text-center">Todo App</h1>
    <input 
    v-model='todoText'
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo" 
    @keyup.enter="addTodo" >
    <hr>
    <Todo 
    v-for="todo in todos" 
    :key="todo.id" 
    :todo="todo"
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteTodo"
    /> <!--컴포넌트 하나를 key값에 따라 하나씩 넣어준다-->
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },

  data(){
    return {
      todoText: '',
      todos: [
        {id:1, text:"buy a car", checked :false},
        {id:2, text:"play game", checked :false},
      ]
    }
  },

  methods: {
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos[index].splice(index,1);
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(e) { // e.target.value 이것으 이벤트로 받은 값을 얻을 수 있다
      this.todos.push ({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this.todoText = ''
    },
    toggleCheckbox({id, checked}) { //구조분해할당
      const index = this.todos.findIndex(todo => { // 만약 toggleCheckbox에서 보낸 id랑 todos에 있는 아이디가 같다면 그 인덱스를 저장한다
        return todo.id === id;                     // 첫번째 같은경우 처음 보낸 id는 1이고 todos첫번째 항복의 id도 1이기때문에 인덱스 0을 저장한다
      });
      this.todos[index].checked = checked;          //찾은 인덱스로 todos의 항목을 찾은 다음 해당 항목의 checked를 업데이트해준다
      
    },
  }
}
</script>
