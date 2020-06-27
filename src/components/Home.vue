<template>
  <div>
    <div v-show="!toggleStadion" class="PositionContainer">CM</div>
    <div v-show="!toggleStadion" class="SortByContainer">
      <p class="SortByContainerItem" @click="sortPlayersForPopUp('popular')">Popularity</p>
      <p class="SortByContainerItem" @click="sortPlayersForPopUp('value')">Value</p>
      <p class="SortByContainerItem" @click="sortPlayersForPopUp('age')">Age</p>
    </div>
    <div v-show="toggleStadion" class="StadiumContainer">
      <div class="Stadium_Grid">
        <div
          class="Player_Icon"
          v-for="player in playerPositions"
          :key="player.position"
          :class="player.position"
          @click="toggleStadion = !toggleStadion; getPlayersForPosition(player.position)"
        >
          <div class="PlayerAvatar">
            <img :src="player.player.formationPicture" class="FormationPicture" />
            <p class="PlayerName">{{player.player.lastName}}</p>
            <p class="PlayerName" v-if="!player.player.lastName">{{player.player.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="FavouritePlayers_Container" v-if="!toggleStadion">
      <player-card-favourite
        :players="playersForPopUp"
        v-for="player in playersForPopUp"
        :key="player.name"
        :player="player"
        v-on:closepopup="toggleStadion = !toggleStadion"
        v-on:selectplayer="addToFavorite($event)"
      />
    </div>
    <div class="overlay" @click="toggleStadion = !toggleStadion" v-if="!toggleStadion"></div>
  </div>
</template>

<script>
import PlayerCardFavourite from "./PlayerCardFavourite.vue";

export default {
  data() {
    return {
      toggleStadion: true,
      playersForPopUp: [],
      selectedPosition: ""
    };
  },
  components: {
    "player-card-favourite": PlayerCardFavourite
  },
  computed: {
    playerPositions() {
      return this.$store.state.playerPositions;
    }
  },
  methods: {
    getPlayersForPosition(position) {
      this.selectedPosition = position;

      this.playersForPopUp = this.$store.getters.favoritePlayersInPopUp(
        position
      );
      // return this.$store.getters.favoritePlayersInPopUp(position);
    },
    sortPlayersForPopUp(sortValue) {
      if (sortValue === "popular") {
        this.playersForPopUp.sort((a, b) =>
          a.playerSkills.ballSkills[sortValue] >
          b.playerSkills.ballSkills[sortValue]
            ? -1
            : 1
        );
      } else if (sortValue === "value") {
        this.playersForPopUp.sort((a, b) =>
          a.stats.value >= b.stats.value ? 1 : -1
        );
      } else {
        this.playersForPopUp.sort((a, b) =>
          a.stats.birthDate.slice(-4) >= b.stats.birthDate.slice(-4) ? 1 : -1
        );
      }
    },
    addToFavorite(player) {
      let data = {};

      if (player.favourite == false) {
        player.favourite = true;
      } else {
        player.favourite = true;
      }

      player.favourite == false ? true : false;

      data.player = player;
      data.position = this.selectedPosition;

      this.toggleStadion = true;

      this.$store.dispatch("setPlayerOnPosition", data);
    }
  }
};
</script>

<style scoped>
.positionrelative {
  position: relative;
}
.StadiumContainer {
  position: absolute;
  height: 550px;
  width: 350px;
  top: 4rem;
  margin: 1rem auto 0;
  background-image: url("../assets/football_field.jpg");
  background-size: cover;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.PositionContainer {
  background-color: #dfdfdf;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.69);
  position: absolute;
  top: 2.5rem;
  width: 100%;
  padding: 0.2rem;
  z-index: 5;
  overflow: visible;
}

.SortByContainer {
  display: flex;
  background-color: #c2c2c2;
  text-align: center;
  position: fixed;
  top: 4rem;
  width: 100%;
  padding: 0.2rem;
  z-index: 5;
}

@media only screen and (max-width: 50rem) {
  .PositionContainer {
    font-size: 1.4rem;
  }

  .SortByContainer {
    top: 4.5rem;
    font-size: 1.4rem;
  }
}

.SortByContainerItem {
  margin: 0 auto;
  width: 5rem;
  cursor: pointer;
}

.Stadium_Grid {
  display: grid;
  height: 550px;
  width: 350px;
  grid-template-columns: repeat(9, 38.9px);
  grid-template-rows: repeat(15, 36.6px);
  justify-items: center;
  align-items: center;
}

@media only screen and (max-width: 50rem) {
  .StadiumContainer {
    position: absolute;
    height: 480px;
    width: 305px;
    background-image: url("../assets/football_field.jpg");
    background-size: cover;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: visible;
  }

  .Stadium_Grid {
    display: grid;
    height: 480px;
    width: 305px;
    grid-template-columns: repeat(9, 33.9px);
    grid-template-rows: repeat(15, 32px);
    justify-items: center;
    align-items: center;
  }
}

.Player_Icon {
  background-color: #203c00;
  border: 0.5px solid whitesmoke;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  box-shadow: 4px 6px 6px -1px rgba(0, 0, 0, 0.58);
  cursor: pointer;
}

.PlayerAvatar {
  position: relative;
  align-self: center;
  top: -2.2rem;
  right: 1rem;
  z-index: 2;
}

.FormationPicture {
  text-align: center;
  position: absolute;
  border-radius: 50%;
  width: 3.5rem;
  align-self: center;
  background-color: white;
  z-index: 2;
}

.PlayerName {
  text-align: center;
  white-space: nowrap;
  z-index: 8;
  background-color: #dfdfdf;
  position: relative;
  top: 3.3rem;
  right: 0.5rem;
  width: 4.5rem;
  font-size: 0.7rem;
}

@media only screen and (max-width: 50rem) {
  .FormationPicture {
    width: 3rem;
    top: 0.5rem;
  }

  .PlayerName {
    width: 4.3rem;
    right: 0.6rem;
  }
}

.FavouritePlayers_Container {
  text-align: center;
  margin: 10rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
}

.overlay {
  position: fixed;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.1);
}

.gk {
  grid-row: 14;
  grid-column: 5;
}

.cb1 {
  grid-row: 12;
  grid-column: 4;
}

.cb2 {
  grid-row: 12;
  grid-column: 6;
}

.cb3 {
  grid-row: 12;
  grid-column: 5;
}

.cb4 {
  grid-row: 12;
  grid-column: 3;
}

.cb5 {
  grid-row: 12;
  grid-column: 7;
}

.lb {
  grid-row: 10;
  grid-column: 2;
}

.rb {
  grid-row: 10;
  grid-column: 8;
}

.cm1 {
  grid-row: 8;
  grid-column: 2;
}

.cm2 {
  grid-row: 8;
  grid-column: 5;
}

.cm3 {
  grid-row: 8;
  grid-column: 8;
}

.cm4 {
  grid-row: 8;
  grid-column: 4;
}

.cm5 {
  grid-row: 8;
  grid-column: 6;
}

.dm {
  grid-row: 10;
  grid-column: 5;
}

.cf {
  grid-row: 4;
  grid-column: 5;
}

.cf1 {
  grid-row: 4;
  grid-column: 4;
}

.cf2 {
  grid-row: 4;
  grid-column: 6;
}

.am {
  grid-row: 6;
  grid-column: 5;
}

.lm {
  grid-row: 7;
  grid-column: 2;
}

.rm {
  grid-row: 7;
  grid-column: 8;
}

.lw {
  grid-row: 6;
  grid-column: 2;
}

.rw {
  grid-row: 6;
  grid-column: 8;
}
</style>