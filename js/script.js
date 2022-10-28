// const { createApp } = Vue;

// createApp({
//     data() {
//         return{
//             currentItem: 0,
//             toDoList: [
//                 {
//                     text: "fare l'esercizio con vue",
//                     done: false
//                 },
//                 {
//                     text: "allenarmi prima delle otto",
//                     done: true
//                 },
//             ],
//         };
//     },
//     methods: {

//     }
// }).mount("#app");

// CORREZIONE

const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: "",
      hasError: false,
      todos: [
        {
          text: "Fare la spesa",
          done: false,
        },
        {
          text: "Fare l'esercizio pomeridiano",
          done: false,
        },
        {
          text: "Dare da mangiare alla gatta",
          done: true,
        },
      ],
    };
  },
  methods: {
    removeTodo(todoIndex) {
      this.todos.splice(todoIndex, 1);
    },
    addNewTodo() {
      if (this.newTodo.length > 5) {
        // Aggiungo il nuovo todo
        const todo = {
          text: this.newTodo,
          done: false,
        };
        this.todos.push(todo);
        // this.todos.push({
        //   text: this.newTodo,
        //   done: false,
        // });

        // Ripulisco l'input del todo
        this.newTodo = "";
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    changeDone(todoIndex) {
      // this.todos[todoIndex].done = !this.todos[todoIndex].done;
      const clickedTodo = this.todos[todoIndex];
      clickedTodo.done = !clickedTodo.done;
    },
  },
}).mount("#app");