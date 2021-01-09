import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload.todos
    }
  },
  actions: {
    loadTodos(context){
      api.getTodos().then((todos) => {
        context.commit('setTodos', { todos: todos })
      })
    }
  },
  modules: {
  }
})
