const { createApp } = Vue;

createApp({
    data() {
        return{
            todoList: [
                {
                    text: "fare l'esercizio con vue",
                    done: false
                },
                {
                    text: "allenarmi prima delle otto",
                    done: true
                },
            ],
        };
    },
    methods: {

    }
}).mount("#app")