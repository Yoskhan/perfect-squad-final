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
              <div
                class="Header_FormationsBtn"
                @click="formationsDropdown = !formationsDropdown"
                v-click-outside="hideFormationsDropdown"
              >
                Formation:
                <i>{{ activeFormation }}</i>
              </div>
              <ul class="Header_FormationsContainer" v-if="formationsDropdown">
                <li
                  v-for="formation in formations"
                  :key="formation"
                  class="Header_FormationListItem"
                  @click="setActiveFormation(formation)"
                  :class="{'Header_SelectedFormation' : formation == $store.state.activeFormation}"
                >{{ formation }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="Header_MobileHamburgerContainer"
          @click="mobileIconDropdown = !mobileIconDropdown"
        >
          <i class="fa fa-bars Header_MobileHamburgerIcon"></i>
        </div>
      </div>
      <div class="Header_MobileDropdownContainer" v-if="mobileIconDropdown">
        <ul class="Header_MobileList">
          <li class="Header_MobileListItem" @click="mobileIconDropdown = !mobileIconDropdown">
            <router-link to="/players" class="Header_MobileListItem">Players</router-link>
          </li>
          <li class="Header_MobileListItem" @click="mobileIconDropdown = !mobileIconDropdown">
            <router-link to="/favourites" class="Header_MobileListItem">Favourites</router-link>
          </li>
          <div
            class="Header_MobileFormationsBtn"
            @click="mobileFormationsDropdown = !mobileFormationsDropdown"
            v-click-outside="hideFormationsDropdown"
          >
            Formation:
            <i>{{ activeFormation }}</i>
          </div>
          <ul class="Header_MobileFormationsContainer" v-if="mobileFormationsDropdown">
            <li
              v-for="formation in formations"
              :key="formation"
              class="Header_FormationListItem"
              @click="setActiveFormation(formation); mobileIconDropdown = !mobileIconDropdown"
              :class="{'Header_SelectedFormation' : formation == $store.state.activeFormation}"
            >{{ formation }}</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formationsDropdown: false,
      mobileFormationsDropdown: false,
      mobileIconDropdown: false
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
    },
    hideFormationsDropdown() {
      this.formationsDropdown = false;
    }
  }
};
</script>

<style scoped>
* {
  z-index: 7;
}
.Header {
  width: 100vw;
  height: 2.5rem;
  background-color: #203c00;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.75);
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

@media (max-width: 50rem) {
  .Header_ListContainer {
    display: none;
  }

  .Header_MobileHamburgerContainer {
    display: relative;
  }
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
  cursor: pointer;
}

.Header_FormationsContainer {
  position: absolute;
  background-color: #203c00;
  width: 4.5rem;
  left: 3.8rem;
  top: 1.3rem;
  text-align: center;
  padding: 1rem;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 7;
}

.Header_FormationListItem {
  list-style-type: none;
  padding: 0.3rem;
  cursor: pointer;
}

.Header_SelectedFormation {
  color: orange;
}

.Header_MobileHamburgerContainer {
  color: white;
}

@media (min-width: 50rem) {
  .Header_MobileHamburgerContainer {
    display: none;
  }
}

.Header_MobileDropdownContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 3rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0;
  color: white;
  text-align: center;
}

.Header_MobileList {
  list-style-type: none;
  text-align: center;
}

.Header_MobileListItem {
  text-decoration: none;
  color: white;
  margin: 1rem 0;
}
</style>
