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
        "https://jsonblob.com/api/jsonBlob/50fd5df9-8283-11ea-a9e3-ab457510f846"
      )
      .then(response => {
        console.log(response.data);
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
  z-index: 1;
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
  width: 100% !important;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.router-view {
}
</style>
