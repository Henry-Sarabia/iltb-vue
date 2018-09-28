<template>
  <div id="app">
    <div class="hero is-fullheight">
      <div class="hero-head">
        <TheHeader />
      </div>
      <div class="hero-body">
        <Content/>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Content from './components/Content.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    Content,
    FooterBar,
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
