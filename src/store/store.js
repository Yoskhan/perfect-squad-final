import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: "ajde",
    players: [],
    formations: {},
    activeFormation: "none selected",
    playerPositions: [],
  },
  getters: {
    typeOfFormations: (state) => {
      return Object.keys(state.formations);
    },
    getPlayersGroupedByCategory: (state) => {

      let playersGroupedByCategory = {GK: [], DEF: [], MID: [], ATT: []};

      state.players.forEach((player) => {
            
            let position = player.stats.position;

          if (position === "GK") {
            playersGroupedByCategory.GK.push(player);
          }
          if (position === "CB" || position === "LB" || position === "RB") {
            playersGroupedByCategory.DEF.push(player);
          }
          if (position === "LM" || position === "RM") {
            playersGroupedByCategory.MID.push(player);
          }
          if (position === "LW" || position === "RW" || position === "CF") {
            playersGroupedByCategory.ATT.push(player);
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

      switch (data) {
        case "4-4-2":
          state.playerPositions = [
            "gk",
            "cb1",
            "cb2",
            "lb",
            "rb",
            "cm1",
            "cm2",
            "cm3",
            "dm",
            "cf1",
            "cf2",
          ];
          break;
        case "4-1-3-2":
          state.playerPositions = [
            "gk",
            "cb1",
            "cb2",
            "lb",
            "rb",
            "lm",
            "rm",
            "dm",
            "am",
            "cf1",
            "cf2",
          ];
          break;
        case "4-3-3":
          state.playerPositions = [
            "gk",
            "cb1",
            "cb2",
            "lb",
            "rb",
            "cm5",
            "cm4",
            "cf",
            "dm",
            "lw",
            "rw",
          ];
          break;
        case "4-2-1-3":
          state.playerPositions = [
            "gk",
            "cb1",
            "cb2",
            "lb",
            "rb",
            "cm2",
            "dm",
            "am",
            "cf",
            "lw",
            "rw",
          ];
          break;
        case "4-2-2-2":
          state.playerPositions = [
            "gk",
            "cb1",
            "cb2",
            "lb",
            "rb",
            "rm",
            "lm",
            "cm4",
            "cm5",
            "cf1",
            "cf2",
          ];
          break;
        case "5-3-2":
          state.playerPositions = [
            "gk",
            "cb3",
            "cb4",
            "cb5",
            "lb",
            "rb",
            "dm",
            "cm4",
            "cm5",
            "cf1",
            "cf2",
          ];
          break;
        case "3-3-2-2":
          state.playerPositions = [
            "gk",
            "cb3",
            "cb4",
            "cb5",
            "dm",
            "cm4",
            "cm5",
            "lm",
            "rm",
            "cf1",
            "cf2",
          ];
      }
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
