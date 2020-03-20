// App.vue

<template lang="html">
  <div class="container">
    <div class="title-bar">
      <a href="#"><i class="fas fa-window-close"></i></a>
    </div>
    <h1 class="title">
      App
    </h1>
    <div>
      <a
        href="#"
        class="play"
      ><i class="fas fa-play"></i></a>
      <br>

      <a
        href="#"
        class="stop"
      ><i class="fas fa-stop"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: block;

  -webkit-app-region: drag;
}
.title-bar {
  display: flex;
  height: 20px;
  justify-content: flex-end;
  align-items: center;

  -webkit-app-region: drag;
}
h1.title {
  margin: 0;
}
$play: #00cc99;
$stop: orangered;

.play {
  color: $play;
}
.play:active {
  color: darken($play, 0.25);
}
.stop {
  color: $stop;
}
.stop:active {
  color: darken($stop, 0.25);
}
</style>
