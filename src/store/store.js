// @/store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    listOfStars: [],
  },
  mutations: {
    addStar: function(state, submitedStar){
      state.listOfStars.push(submitedStar)
      console.log('new list: ', state.listOfStars)
    }
  },
  actions: {

  },
  getters: {

  }
})