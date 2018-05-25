import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 类似vue的data
  state: {
    name: 'oldName'
  },
  // 类似vue的computed
  getters: {
    getReverseName: state => {
      return state.name.split('').reverse().join('')
    }
  },
  // 类似vue里的methods（同步方法）
  mutation: {
    updateName (state) {
      state.name = 'newName'
    }
  }
})
