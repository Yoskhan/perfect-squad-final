<template>
  <div>
    <div class="Header">
      <div class="Header_Container">
        <div class="Header_LogoContainer">
          <router-link to="/" class="Header_Logo">Perfect Squad</router-link>
        </div>
        <div class="Header_ListContainer">
          <ul class="Header_List">
            <li class="Header_ListItem">
              <router-link to="/players" class="Header_ListItem">Players</router-link>
            </li>
            <li class="Header_ListItem">
              <router-link to="/favourites" class="Header_ListItem">Favourites</router-link>
            </li>
            <li class="Header_ListItem">
              <div class="Header_FormationsBtn" @click="formationsDropdown = !formationsDropdown">
                Formation: {{ activeFormation }}
              </div>
              <ul class="Header_FormationsContainer" v-if="formationsDropdown">
                <li
                  v-for="formation in formations"
                  :key="formation"
                  class="Header_FormationListItem"
                  @click="setActiveFormation(formation)"
                  :class="{ 'Header_selectedFormation' : formation == $store.state.activeFormation}"
                >{{ formation }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formationsDropdown: false
    };
  },
  computed: {
    formations() {
      return this.$store.getters.typeOfFormations;
    },
    activeFormation() {
      return this.$store.state.activeFormation;
    }
  },
  methods: {
    setActiveFormation(formation) {
      this.$store.dispatch("setActiveFormation", formation);
    }
  }
};
</script>

<style scoped>
.Header {
  width: 100vw;
  height: 2.5rem;
  background-color: #203c00;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

.Header_Container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80vw;
  height: 2.5rem;
  white-space: nowrap;
}

.Header_Logo {
  color: #ebebeb;
  text-decoration: none;
  font-size: 1.3rem;
  font-family: Arial Black;
}

.Header_ListContainer {
  display: inline-block;
}

.Header_List {
  display: inline-block;
  list-style-type: none;
}

.Header_ListItem {
  display: inline-block;
  position: relative;
  margin: 0 1rem;
  color: #ebebeb;
  text-decoration: none;
}

.Header_FormationsBtn {
  width: 4rem;
}

.Header_FormationsContainer {
  position: absolute;
  background-color: #203c00;
  width: 4.5rem;
  left: 5rem;
  top: 1.3rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
}

.Header_FormationListItem {
  list-style-type: none;
  padding: 0.3rem;
}

.Header_selectedFormation {
  color: orange;
}
</style>
