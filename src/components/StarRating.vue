<template>
  <div>
    <div class="PopularityScore_Container">
      <div class="PopularityScore_Gray">
        <span @mouseover="mouseEnterStar(1)" @mouseleave="mouseLeave" @click="ratePlayer(1)">
          <i class="fa fa-star"></i>
        </span>
        <span @mouseover="mouseEnterStar(2)" @mouseleave="mouseLeave" @click="ratePlayer(2)">
          <i class="fa fa-star"></i>
        </span>
        <span @mouseover="mouseEnterStar(3)" @mouseleave="mouseLeave" @click="ratePlayer(3)">
          <i class="fa fa-star"></i>
        </span>
        <span @mouseover="mouseEnterStar(4)" @mouseleave="mouseLeave" @click="ratePlayer(4)">
          <i class="fa fa-star"></i>
        </span>
        <span @mouseover="mouseEnterStar(5)" @mouseleave="mouseLeave" @click="ratePlayer(5)">
          <i class="fa fa-star"></i>
        </span>
      </div>
      <div class="PopularityScore_Yellow">
        <div
          class="PopularityScore_Yellow_Container"
          :style="[temporaryHoverNumber == 0 ? 
          {width: player.playerSkills.ballSkills.popular.toFixed(2) / 5 * 100 + '%'} : 
          {width: temporaryHoverNumber / 5 * 100 + '%'}]"
        >
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
          <span>
            <i class="fa fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfRatings: 1,
      sumOfRatings: 0,
      temporaryHoverNumber: 0
    };
  },
  props: ["player"],
  methods: {
    ratePlayer(newScore) {
      if (this.sumOfRatings === 0) {
        this.sumOfRatings = this.player.playerSkills.ballSkills.popular;
      }

      this.sumOfRatings += newScore;

      this.numberOfRatings++;

      this.player.playerSkills.ballSkills.popular =
        this.sumOfRatings / this.numberOfRatings;
    },
    mouseEnterStar(numberOfStar) {
      this.temporaryHoverNumber = numberOfStar;
    },
    mouseLeave() {
      this.temporaryHoverNumber = 0;
    }
  }
};
</script>

<style>
.PopularityScore_Container {
  position: relative;
}

.PopularityScore_Gray {
  color: gray;
  white-space: nowrap;
}

.PopularityScore_Yellow {
  color: orange;
  pointer-events: none;
}

.PopularityScore_Yellow_Container {
  position: absolute;
  top: 0;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
}
</style>