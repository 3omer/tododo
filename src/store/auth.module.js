import api from '../services/api'
const user = localStorage.getItem('user')
const authState = user? { user }: {}

export const authStore = {
    namespaced: true,
    state: authState,
    mutations: {
        loginSuccess(state, user) {
            state.user = user
        },
        loginFailure(state) {
            state.user = null
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
        }
    }
}