// @/store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    listOfStars: [],
  },
  mutations: {
    ADD_STAR(state, submitedStar){
      state.listOfStars.push(submitedStar)
    },
    UPDATE_STAR(state, targetedStar){
      const targetedStarIndex = state.listOfStars.findIndex(star => star.id === targetedStar.id)
      state.listOfStars[targetedStarIndex] = targetedStar
    },
    DELETE_STAR(state, targetedStarId){
      state.listOfStars = state.listOfStars.filter(star => star.id !== targetedStarId)
    }
  },
  actions: {

  },
  getters: {

  }
})