const todos = [
    {id: 1, text: "test 1", done: false},
    {id: 2, text: "test 2", done: false},
    {id: 3, text: "test 3", done: false},
    {id: 4, text: "test 4", done: false},
]
export function login(email, password) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (! email && password) reject("Invalid data")
        if(Math.random() > 0.5) {
            resolve({ email: "omer@example.com", token: "tokentokentokentoken"})
        }
        return reject("Connection Error")
    }, 1000)
})
}

export function getTodos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todos)
        }, 1000)    
    });
}