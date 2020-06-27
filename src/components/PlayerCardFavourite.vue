<template>
  <div>
    <div v-if="player.name">
      <div class="PlayerCard_Container" @click="$emit('selectplayer', player)">
        <div class="Favourite_Icon">
          <i
            :style="[player.favourite == true ? {'color': 'red'} : {'color': 'gray'}]"
            class="fa fa-heart"
          ></i>
        </div>
        <div class="PlayerName">
          <p>{{ player.name }} {{ player.lastName }}</p>
        </div>
        <div class="PlayerPosition" :class="player.stats.position">{{ player.stats.position}}</div>
      </div>
      <div class="Toggled_Container">
        <div class="Image_Container">
          <img :src="player.playerPicture" width="250px" height="250px" />
        </div>
        <div class="ClubName_Container">
          <div class="ClubLogo">
            <img :src="player.teamCrest" width="30px" height="30px" />
          </div>
          <div class="ClubName">{{ player.stats.club }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["player"],
  data() {
    return {
      isToggled: true
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  z-index: 2;
}

.PlayerCard_Container {
  text-align: center;
  background-color: #dfdfdf;
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.69);
  align-items: center;
  z-index: 2;
}

.Favourite_Icon {
  margin: auto 0;
}

.PlayerName {
  word-break: break-word;
  text-align: center;
}

.Toggled_Container {
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.69);
}

.Image_Container {
  object-fit: cover;
}

.ClubName_Container {
  background-color: #dfdfdf;
  margin: -0.3rem 0 0.5rem 0;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.5rem;
}

.ClubLogo {
  margin: 0 0.5rem 0 0;
}
.GK {
  color: blue;
}

.CB,
.LB,
.RB {
  color: brown;
}

.LM,
.RM,
.DM,
.AM {
  color: green;
}

.CF,
.LW,
.RW {
  color: yellow;
}

.NoPlayers {
  position: fixed;
  right: 0;
  bottom: 8rem;
  background-color: #203c00;
  color: white;
  padding: 0.3rem 3rem;
}
</style>