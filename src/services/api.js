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
            if ( email === "omer@example.com" && password ) {
                resolve({ username: "omer", email: "omer@example.com", token: "tokentokentokentoken" })
            }
            return reject({ error: "Incoreect username or password"})
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

export default { postLogin, getTodos, deleteTodo }