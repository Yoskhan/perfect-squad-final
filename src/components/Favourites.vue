<template>
  <div>
      <div class="FavouritePlayers_Container">
      <player-card-favourite
        v-for="player in players"
        :key="player.name"
        :player="player.player"
      />
    </div>
  </div>
</template>

<script>

import PlayerCardFavourite from "./PlayerCardFavourite.vue"
export default {
  data(){
    return {
      
    }
  },
  computed : {
    players(){
      return this.$store.getters.getPlayerpositions
    }
  },
  components: {
    "player-card-favourite": PlayerCardFavourite
  }
}
</script>

<style>
.FavouritePlayers_Container {
  text-align: center;
  margin: 10rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
}

@media only screen and (max-width: 50rem) {
  .FavouritePlayers_Container {
    margin: 5rem auto;
  }
}
</style>