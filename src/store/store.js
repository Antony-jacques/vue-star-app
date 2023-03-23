// @/store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    listOfStars: [],
  },
  mutations: {
    ADD_STAR(state, submitedStar){
      state.listOfStars.push(submitedStar)
      console.log('new list: ', state.listOfStars)
    },
    UPDATE_STAR(state, updatedStar){
      const targetedStarIndex = state.listOfStars.findIndex(star => star.id === updatedStar.id)
      state.listOfStars[targetedStarIndex] = updatedStar
    }
  },
  actions: {

  },
  getters: {

  }
})