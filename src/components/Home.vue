<template>
  <div class="Container">
    <div class="Stadium_Grid">
      <button v-for="position in playerPositions" :key="position" :class="position" class="Player_Icon"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFormation: {
        formation: "4-4-2",
        positions: {
          cb: 2,
          lb: 1,
          rb: 1,
          cm: 3,
          dm: 1,
          cf: 2
        }
      }
    };
  },
  computed: {
    playerPositions() {
      return this.$store.state.playerPositions;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}

.Container {
  position: relative;
  height: 550px;
  width: 350px;
  top: 4rem;
  margin: 2.5rem auto 0;
  background-image: url("../assets/football_field.jpg");
  background-size: cover;
}

.Stadium_Grid {
  display: grid;
  height: 550px;
  width: 350px;
  grid-template-columns: repeat(9, 38.9px);
  grid-template-rows: repeat(15, 36.6px);
  justify-items: center;  
  align-items: center;
}

.Player_Icon {
  background-color: #203c00;
  border: 0.5px solid whitesmoke;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  box-shadow: 4px 6px 6px -1px rgba(0, 0, 0, 0.58);
  cursor: pointer;
}

.gk {
  grid-row: 14;
  grid-column: 5;
}

.cb1 {
  grid-row: 12;
  grid-column: 4;
}

.cb2 {
  grid-row: 12;
  grid-column: 6;
}

.cb3 {
  grid-row: 12;
  grid-column: 5;
}

.cb4 {
  grid-row: 12;
  grid-column: 3;
}

.cb5 {
  grid-row: 12;
  grid-column: 7;
}

.lb {
  grid-row: 11;
  grid-column: 2;
}

.rb {
  grid-row: 11;
  grid-column: 8;
}

.cm1 {
  grid-row: 8;
  grid-column: 2;
}

.cm2 {
  grid-row: 8;
  grid-column: 5;
}

.cm3 {
  grid-row: 8;
  grid-column: 8;
}

.cm4 {
  grid-row: 8;
  grid-column: 4;
}

.cm5 {
  grid-row: 8;
  grid-column: 6;
}

.dm {
  grid-row: 10;
  grid-column: 5;
}

.cf {
  grid-row: 4;
  grid-column: 5;
}

.cf1 {
  grid-row: 4;
  grid-column: 4;
}

.cf2 {
  grid-row: 4;
  grid-column: 6;
}

.am {
  grid-row: 6;
  grid-column: 5;
}

.lm {
  grid-row: 7;
  grid-column: 2;
}

.rm {
  grid-row: 7;
  grid-column: 8;
}

.lw {
  grid-row: 6;
  grid-column: 2;
}

.rw {
  grid-row: 6;
  grid-column: 8;
}
</style>