const todosApp = {
    data() {
        return {
            todos: [],

            // newTodo: 'Learn Vue.js!',

            enteredTodoText: '',
            editedTodoId: null,

        };
    },
    // methods that we want to execute with help of vue.js
    methods: {
        saveTodo(event) {
            event.preventDefault();

            // we refer to the atribute of the data()
            // this.newTodo = this.enteredTodoText;
            // // we clean the variable, so we clean the input
            // this.enteredTodoText = '';

            // we chech if we are editing an existing todo o adding a new todo; if we got an id, we are updating an existing todo
            if (this.editedTodoId) {
                const todoId = this.editedTodoId;
                const todoIndex = this.todos.findIndex(
                    function (todoItem) {
                        return todoItem.id === todoId;
                    }
                );

                const updateTodoItem = {
                    id: this.todos[todoIndex].id,
                    text: this.enteredTodoText,
                }

                this.todos[todoIndex] = updateTodoItem;
                this.editedTodoId = null;

                // we are adding a new todo
            } else {
                const newTodo = {
                    text: this.enteredTodoText,
                    id: new Date().toISOString(),
                };
                this.todos.push(newTodo);
            }
            // we add the new todo to the array of todos
            this.enteredTodoText = '';
        },
        startEditTodo(todoId) {
            this.editedTodoId = todoId;
            // we search the todo we are editing
            const todo = this.todos.find(
                function (todoItem) {
                    return todoItem.id === todoId;
                }
            );
            this.enteredTodoText = todo.text;
        },
        deleteTodo(todoId){
            // we delete the todo we are deleting
            this.todos = this.todos.filter(
                function (todoItem) {
                    return todoItem.id !== todoId;
                }
            );
        }
    }
};

// Vue variable is provided by vue; mount is a key method wich allows us to connect Vue app to a certain part of our User Interface
Vue.createApp(todosApp).mount('#todos-app');