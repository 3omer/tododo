import api from '../services/api'

// const findById = (todos, id) => {
//     return todos.find((todo) => todo.id == id )
// }

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
        },
        updateTodo(state, payload) {
            const idx = state.todos.findIndex(todo => todo.id == payload.todo.id)
            if (idx == 1) return
            state.todos[idx] = payload.todo
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

        },
        updateTodo(context, todo) {
            console.log("todosStore:updateTodo()", todo.id);
            
            return api.putTodo(todo).then(todo => {
                context.commit('updateTodo', { todo })
            })
            
        }
    }
}