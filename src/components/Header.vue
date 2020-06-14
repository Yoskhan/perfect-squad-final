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
            <li class="Header_ListItem">Formation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Header {
  width: 100vw;
  height: 2.5rem;
  background-color: #203c00;
  box-shadow: 0px 0px 5px 2px;
}

.Header_Container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80vw;
  height: 2.5rem;
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
  margin: 0 1rem;
  color: #ebebeb;
  text-decoration: none;
}
</style>
