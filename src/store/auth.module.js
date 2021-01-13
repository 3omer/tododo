import api from '../services/api'
const user = JSON.parse(localStorage.getItem('user'))
const authState = user? { user }: {}

export const authStore = {
    namespaced: true,
    state: authState,
    mutations: {
        loginSuccess(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        loginFailure(state) {
            state.user = null
            localStorage.removeItem('user')
        },
        logout(state) {
            state.user = null
            localStorage.removeItem('user')
        }
    },
    actions: {
        login(context, user) {
            // deprecated, calling the api from the compnent directly
            // so to handle failing scenarios rather than having a dedecated state for errors
            api.postLogin(user.email, user.password).then(res => {
                if (res.token) {
                    context.commit('loginSuccess', user)
                }
            }).catch(error => {
                console.error('authStore - login', error.message)
                context.commit('loginFailure')
            })
        },
        logout(context) {
            api.postLogout().then((result) => {
                console.log('authStore:logout(): result:', result);
                context.commit('logout')
            }).catch((err) => {
                console.error('authStore - login', err.message) 
            });
        }
    }
}