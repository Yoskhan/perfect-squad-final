<template>
  <div>
    <div class="Players_Container">
      <div class="GK_Container">
        <div class="GK_ContainerTitle">
          <p>GK</p>
        </div>
        <div class="PlayerCards_Container">
          <playercard
            v-for="player in playersGroupedByCategory.GK"
            :key="player.name"
            :player="player"
            @togglePlayerDetail="isPlayerDetailToggled = !isPlayerDetailToggled; shownPlayerDetail = $event"
          ></playercard>
        </div>
      </div>
      <div class="DEF_Container">
        <div class="DEF_ContainerTitle">
          <p>DEF</p>
        </div>
        <div class="PlayerCards_Container">
          <playercard
            v-for="player in playersGroupedByCategory.DEF"
            :key="player.name"
            :player="player"
            @togglePlayerDetail="isPlayerDetailToggled = !isPlayerDetailToggled; shownPlayerDetail = $event"
          ></playercard>
        </div>
      </div>
      <div class="MID_Container">
        <div class="MID_ContainerTitle">
          <p>MID</p>
        </div>
        <div class="PlayerCards_Container">
          <playercard
            v-for="player in playersGroupedByCategory.MID"
            :key="player.name"
            :player="player"
            @togglePlayerDetail="isPlayerDetailToggled = !isPlayerDetailToggled; shownPlayerDetail = $event"
          ></playercard>
        </div>
      </div>
      <div class="ATT_Container">
        <div class="ATT_ContainerTitle">
          <p>ATT</p>
        </div>
        <div class="PlayerCards_Container">
          <playercard
            v-for="player in playersGroupedByCategory.ATT"
            :key="player.name"
            :player="player"
            @togglePlayerDetail="isPlayerDetailToggled = !isPlayerDetailToggled; shownPlayerDetail = $event"
          ></playercard>
        </div>
      </div>
    </div>
    <playerdetail
      :class="{isToggled: isPlayerDetailToggled}"
      v-on:click-on-overlay="isPlayerDetailToggled = !isPlayerDetailToggled"
      v-on:closeplayerdetail="isPlayerDetailToggled = !isPlayerDetailToggled"
      :playerShown="shownPlayerDetail"
    ></playerdetail>
  </div>
</template>

<script>
import PlayerCard from "./PlayerCard.vue";
import PlayerDetails from "./PlayerDetails.vue";
import EmptyPlayerObject from '../store/emptyPlayerObject.js'

export default {
  data() {
    return {
      isPlayerDetailToggled: true,
      shownPlayerDetail: EmptyPlayerObject
    };
  },
  components: {
    playercard: PlayerCard,
    playerdetail: PlayerDetails
  },
  computed: {
    playersGroupedByCategory() {
      return this.$store.getters.getPlayersGroupedByCategory;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Players_Container {
  margin: 2.5rem auto 0;
  width: 80%;
  min-height: 80vh;
  min-width: 700px;
  display: flex;
}

.GK_Container,
.DEF_Container,
.MID_Container,
.ATT_Container {
  width: 25%;
  margin: 0;
  padding: 0;
}

.GK_ContainerTitle,
.DEF_ContainerTitle,
.MID_ContainerTitle,
.ATT_ContainerTitle {
  background-color: #dfdfdf;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.69);
  margin: 0;
  padding: 0.15rem;
  font-size: 1.3rem;
}

.PlayerCards_Container {
  text-align: center;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.PlayerDetail_Component {
  display: none;
}

.isToggled {
  display: none;
}
</style>