import Vue from 'vue'
import Vuex from 'vuex'
import { authStore } from './auth.module'
import { todosStore } from "./todos.module"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authStore,
    todosStore
  }
})
