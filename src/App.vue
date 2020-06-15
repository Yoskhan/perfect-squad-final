<template>
  <div id="app">
    <app-header class="app-header"></app-header>
    <router-view class="router-view"></router-view>
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
      .get("https://jsonblob.com/api/jsonBlob/50fd5df9-8283-11ea-a9e3-ab457510f846")
      .then(response => {
        console.log(response.data);
        this.$store.dispatch("fetchData", response.data);
      });
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial;
}
</style>
