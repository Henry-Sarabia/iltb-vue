<template>
  <div id="app">
    <div class="hero is-fullheight">
      <div class="hero-head">
        <TheHeader />
      </div>
      <div class="hero-body">
        <Content/>
      </div>
      <div class="hero-foot">
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Content from './components/Content.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    Content,
    TheFooter,
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style>
#app {
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #2b373e !important;
}

.hero-body {
  background-image: url("./assets/items4.png");
  /* background-size: cover; */
  background-position: center;
  background-repeat: repeat;
  /* clip-path: polygon(0 6%, 100% 0, 100% 94%, 0% 100%); */
  /* clip-path: polygon(0 0%, 100% 6%, 100% 100%, 0% 94%); */
}

.hero-foot {
  z-index: 30;
}

</style>
