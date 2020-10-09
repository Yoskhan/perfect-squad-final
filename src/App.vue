<template>
  <div id="app">
    <app-header class="app-header"></app-header>
    <div class="background">
      <router-view class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    "app-header": Header
  },
  created() {
    axios
      .get(
        "https://jsonblob.com/api/45874689-08dd-11eb-a3c1-d9239196887e?fbclid=IwAR2j0GGYdE6a7CHf367QTkX3JjhiMGJGdPpFANorjIETAY9NcUN-F_Sypas"
      )
      .then(response => {
        this.$store.dispatch("fetchData", response.data);
      });
  }
};
</script>

<style>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
}

html,
body {
  min-height: 100%;
  padding: 0;
  margin: 0;
  width: 100vw;
  background-color: black;
}

#app {
  font-family: Arial;
}

.background {
  background: linear-gradient(0deg, rgba(129, 94, 94, 0.2), rgba(0, 0, 0, 0.2)),
    url("../src/assets/background_stadium.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
