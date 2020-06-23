import Vue from "vue";
import Vuex from "vuex";

import positions from "./positions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: "ajde",
    players: [],
    formations: {},
    activeFormation: "none selected",
    playerPositions: [],
    possiblePositions: positions,
  },
  getters: {
    typeOfFormations: (state) => {
      return Object.keys(state.formations);
    },
    getPlayersGroupedByCategory: (state) => {
      let playersGroupedByCategory = { GK: [], DEF: [], MID: [], ATT: [] };

      state.players.forEach((player) => {
        let position = player.stats.position;

        switch (position) {
          case "LM":
          case "RM":
            playersGroupedByCategory.MID.push(player);
            break;
          case "LW":
          case "RW":
          case "CF":
            playersGroupedByCategory.ATT.push(player);
            break;
          case "RB":
          case "CB":
          case "LB":
            playersGroupedByCategory.DEF.push(player);
            break;
          case "GK":
            playersGroupedByCategory.GK.push(player);
            break;
        }
      });

      return playersGroupedByCategory;
    },
  },
  mutations: {
    fetchData(state, data) {
      state.players = data.players;
      state.formations = data.formations;
    },
    setActiveFormation(state, data) {
      //Setting string of Formation for Header.
      state.activeFormation = data;

      //Making array of current formation to easy locate players.

      state.playerPositions = state.possiblePositions[data];
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
