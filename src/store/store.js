import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: "ajde",
    players: [],
    formations: {},
    activeFormation: "none selected",
  },
  getters: {
    typeOfFormations: (state) => {
      return Object.keys(state.formations);
    },
  },
  mutations: {
    fetchData(state, data) {
      state.players = data.players;
      state.formations = data.formations;
    },
    setActiveFormation(state, data) {
      state.activeFormation = data;
    },
  },
  actions: {
    fetchData({ commit }, data) {
      commit("fetchData", data);
    },
    setActiveFormation({ commit }, data) {
      commit("setActiveFormation", data);
    },
  },
});
