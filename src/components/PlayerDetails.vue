<template>
  <div>
    <div class="PlayersDetail_Container">
      <div class="exitSign" @click="$emit('closeplayerdetail')">X</div>
      <div class="PlayerInfo">
        <div class="playerInfo_TitleContainer">
          <div class="PlayerInfo_Name">{{playerShown.name}} {{playerShown.lastName}}</div>
          <div
            class="PlayerInfo_Position"
            :class="playerShown.stats.position"
          >{{ playerShown.stats.position }}</div>
          <div class="PlayerInfo_Popularity">
            <star-rating :player="playerShown"></star-rating>
          </div>
        </div>
        <div class="PlayerInfo_ImageContainer">
          <img class="PlayerInfo_Image" :src="playerShown.formationPicture" />
        </div>
        <div class="PlayerInfo_Details_Grid">
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>{{ playerShown.nationality | capitalize }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <img :src="playerShown.nationalityFlag" class="PlayerInfo_Details_Grid-RightItems" />
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>{{ playerShown.stats.club | capitalize }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <img :src="playerShown.teamCrest" class="PlayerInfo_Details_Grid-RightItems TeamCrest" />
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Birth Date</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <p>{{ playerShown.stats.birthDate }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Age</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <p>{{ playerShown.stats.birthDate | getAge }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Preferred Positions</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <p>{{ playerShown.stats.position }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Positions</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <span
              v-for="(position, i) in playerShown.stats.posiblePositions"
              :key="position"
              style="{white-space:nowrap}"
            >
              <span v-if="i !== 0">,</span>
              {{ position }}
            </span>
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Weak Foot</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <p>{{ playerShown.stats.preferredFoot | weakFoot }}</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Left">
            <p>Value</p>
          </div>
          <div class="PlayerInfo_Details_GridItem-Right">
            <p>{{playerShown.stats.value}}</p>
          </div>
        </div>
      </div>
      <div class="PlayerSkills">
        <div
          class="PlayerSkills_Container"
          v-for="(playerSkills, i) in playerShown.playerSkills"
          :key="i"
        >
          <div class="PlayerSkills_Container_Title">
            <p class="PlayerSkills_Container_Title-Name">{{playerSkills.name | capitalize}}</p>
          </div>
          <div
            class="PlayerSkills_SingleSkill_Container"
            v-for="(singleSkill, i) in playerSkills.skills"
            :key="i"
          >
            <div class="PlayerSkills_SingleSkill_Name">
              <p>{{singleSkill.name | capitalize}}</p>
            </div>
            <div class="PlayerSkills_SingleSkill_Bar-Gray" v-if="singleSkill.value">
              <div
                class="PlayerSkills_SingleSkill_Bar-Green"
                :style="{width: singleSkill.value + '%'}"
                :class="playerShown.stats.position"
              ></div>
            </div>
            <div class="PlayerSkills_SingleSkill_Score">
              <span>{{ singleSkill.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="$emit('click-on-overlay')"></div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";
export default {
  components: {
    "star-rating": StarRating
  },
  props: ["playerShown"],
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    getAge: function(date) {
      let today = new Date();
      let birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },
    weakFoot: function(preferredFoot) {
      return preferredFoot == "left" ? "Right" : "Left";
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

p,
span {
  color: dimgray;
}

.PlayersDetail_Container {
  width: 60vw;
  height: 80vh;
  background-color: #dfdfdf;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  position: absolute;
  z-index: 10;
  display: flex;
  padding: 2.5rem 1.5rem;
}

.overlay {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.75);
}

.exitSign {
  width: 1.5rem;
  border: 1px solid dimgray;
  border-radius: 50%;
  text-align: center;
  padding: 0.1rem;
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  cursor: pointer;
  color: dimgray;
}

.PlayerInfo {
  width: 50%;
  height: 100%;
  background-color: #dfdfdf;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  padding: 2rem;
}

.playerInfo_TitleContainer {
  display: flex;
  align-items: center;
}

.PlayerInfo_Name {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.PlayerInfo_Position {
  color: black;
  border-radius: 50%;
  padding: 0.5rem;
}

.PlayerInfo_Popularity {
  margin-left: auto;
}

.PlayerInfo_Image {
  border-radius: 50%;
  width: 6rem;
  margin-top: 1rem;
  user-select: none;
}

.PlayerInfo_Details_Grid {
  margin-top: 1.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1.7rem 1.7rem 1.7rem 1.7rem 1.7rem 1.7rem 1.7rem 1.7rem;
  align-items: end;
  white-space: nowrap;
}

.PlayerInfo_Details_GridItem-Right {
  justify-self: right;
}

.PlayerInfo_DetailsContiner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.TeamCrest {
  width: 1.7rem;
  height: 1.5rem;
}

.GK {
  background-color: blue;
}

.CB,
.LB,
.RB {
  background-color: brown;
}

.LM,
.RM,
.DM,
.AM {
  background-color: green;
}

.CF,
.LW,
.RW {
  background-color: yellow;
}

.PlayerSkills {
  width: 50%;
  height: 100%;
  padding: 2rem 1.2rem;
  overflow-y: auto;
}

.PlayerSkills::-webkit-scrollbar {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  width: 0.3rem;
}

.PlayerSkills::-webkit-scrollbar-thumb {
  background-color: dimgray;
  outline: 1px solid slategrey;
  height: 4rem;
}

.scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.PlayerSkills_Container {
  width: 100%;
}

.PlayerSkills_SingleSkill_Container {
  display: grid;
  grid-template-columns: 7rem 8fr 1fr;
  width: 95%;
  margin: auto;
  align-items: baseline;
  justify-content: start;
  white-space: nowrap;
}

.PlayerSkills_Container_Title {
  background-color: rgb(234, 234, 232);
  padding: 0.3rem;
  margin: 0.4rem 0;
}

.PlayerSkills_Container_Title-Name {
  color: black;
}

.PlayerSkills_SingleSkill_Name {
  margin: 0.2rem;
  font-size: 0.9rem;
}

.PlayerSkills_SingleSkill_Bar-Gray {
  width: 100%;
  background-color: dimgray;
  height: 0.2rem;
}

.PlayerSkills_SingleSkill_Bar-Green {
  height: 0.2rem;
}

.PlayerSkills_SingleSkill_Score {
  justify-self: end;
  font-size: 0.9rem;
}
</style>