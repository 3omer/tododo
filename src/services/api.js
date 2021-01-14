// TODO: created time
let todos = [
    { id: 1, text: "test 1", done: false },
    { id: 2, text: "test 2", done: false },
    { id: 3, text: "test 3", done: false },
    { id: 4, text: "test 4", done: true },
]

function postLogin(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "omer@example.com" && password) {
                resolve({ username: "omer", email: "omer@example.com", token: "tokentokentokentoken" })
            }
            return reject({ error: "Incoreect username or password" })
        }, 1000)
    })
}

function getTodos() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(todos)
        }, 1000)
    });
}

function deleteTodo(id) {
    console.log("API: deleteTodo()", id)
    todos = todos.filter(todo => todo.id != id)
}

function postSignup(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: "123",
                ...user
            })
        }, 500)
    })
}

function postLogout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: 200 })
        }, 500);
    });
}

function putTodo(newTodo) {
    const idx = todos.findIndex(todo => todo.id == newTodo.id)
    return new Promise((resolve, reject) => {
        if (idx != -1) return reject({status: 404, error: "Not found"})
        todos[idx] = newTodo
        console.log("api:putTodo()", newTodo.id, todos[idx].id);
        
        return resolve(newTodo)
    });

}
export default { postSignup, postLogin, postLogout, getTodos, deleteTodo, putTodo }