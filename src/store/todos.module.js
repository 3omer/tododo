import api from '../services/api'


export const todosStore = {
    namespaced: true,
    state: {
        todos: []
    },
    mutations: {
        setTodos(state, payload) {            
            state.todos = payload.todos
        },
        deleteTodo(state, payload) {
            state.todos = state.todos.filter(todo => todo.id != payload.todo.id)
        }
    },
    actions: {
        loadTodos(context) {
            console.log('todosStore:loadTodos()');
            api.getTodos().then((todos) => {                
                context.commit('setTodos', { todos: todos })
            })
        },
        deleteTodo(context, todo) {
            api.deleteTodo(todo.id)
            context.commit('deleteTodo', { todo })

        }
    }
}