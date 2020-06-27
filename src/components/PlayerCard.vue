<template>
  <div>
    <div class="PlayerCard_Container" @click="isToggled=!isToggled">
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
    <div class="Toggled_Container" :class="{toggled: !isToggled}">
      <div class="Image_Container" @click="$emit('togglePlayerDetail', player)">
        <router-link :to="'/players/' + player.name + '_' + player.lastName"><img :src="player.playerPicture" width="100%" height="100%" /></router-link>
      </div>
      <div class="ClubName_Container">
        <div class="ClubLogo">
          <img :src="player.teamCrest" width="30px" height="30px" />
        </div>
        <div class="ClubName">{{ player.stats.club }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["player"],
  data() {
    return {
      isToggled: false
    };
  }
};
</script>

<style>
.toggled {
  display: none;
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
  cursor: pointer;
}

.Favourite_Icon {
  cursor: pointer;
}

.PlayerName {
  word-break: break-word;
  text-align: center;
}

.Toggled_Container {
  margin: -0.5rem 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.69);
}

.Image_Container {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
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
</style>