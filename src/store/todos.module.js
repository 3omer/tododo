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
            const target = state.todos.findIndex(todo => todo.id == payload.todo.id)
            if (target == -1) return
            Object.assign(target, payload.todo)
        },
        addTodo(state, payload) {
            state.todos.push(payload.todo)
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
                console.log("todosStore:updateTodo()", "putTodo() resoloved")
                context.commit('updateTodo', { todo })
                return todo
            })

        },
        addTodo(context, todo) {
            console.log("todoStore:addTodo()", todo);
            api.addTodo(todo).then(todo => {
                if (todo.id) {
                    context.commit('addTodo', { todo })
                } else {
                    console.error("Invalid res:", todo);
                }
            }).catch(console.error)
        }
    }
}