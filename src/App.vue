<template>
  <div id="app">
    <app-header class="app-header"></app-header>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    "app-header": Header
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

.app-header {
  margin: 0;
  padding: 0;
  top: 0;
}

.router-view {
  margin: 2.5rem 0 0 0;
  height: 500px;
}

</style>
