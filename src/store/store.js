import Vue from "vue";
import Vuex from "vuex";

import positions from "./positions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    players: [],
    formations: {},
    activeFormation: "none selected",
    playerPositions: [],
    possiblePositions: {},
    playerThatWasBeforeOnPosition: "",
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
          case "DM":
          case "AM":
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
    favoritePlayersInPopUp: (state) => (position) => {
      let playersForPopup = [];

      let exactPosition = position;

      position = position.slice(0, 2).toUpperCase();

      state.players.forEach((player) => {
        for (let i = 0; i < player.stats.posiblePositions.length; i++) {
          if (player.stats.posiblePositions[i] == position) {
            playersForPopup.push(player);
          }
        }
      });

      state.playerPositions.forEach((player) => {
        for (let i = 0; i < playersForPopup.length; i++) {
          if (
            player.player.name == playersForPopup[i].name &&
            player.player.favourite == true &&
            player.position != exactPosition
          ) {
            playersForPopup.splice(i, 1);
          }
        }
      });

      return playersForPopup;
    },
    getPlayerpositions(state) {
      return state.playerPositions;
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

      state.playerPositions = JSON.parse(JSON.stringify(positions[data]));

      state.players.forEach((player) => {
        player.favourite = false;
      });
    },
    setPlayerOnPosition(state, data) {
      state.playerPositions.forEach((player) => {
        if (player.player.name != "" && player.position == data.position) {
          let popPlayer = player.player;
          state.players.forEach((player) => {
            if (player.lastName == popPlayer.lastName) player.favourite = false;
          });
        }
      });

      state.playerPositions.forEach((object) => {
        if (object.player.name === data.player.name) {
          object.player.favourite = false;
          data["player"] = {};
        }

        if (object.position == data.position) {
          object.player = data.player;
          state.playerThatWasBeforeOnPosition = data.player;
        }
      });
    },
  },
  actions: {
    fetchData({ commit }, data) {
      commit("fetchData", data);
    },
    setActiveFormation({ commit }, data) {
      commit("setActiveFormation", data);
    },
    setPlayerOnPosition({ commit }, data) {
      commit("setPlayerOnPosition", data);
    },
  },
});
