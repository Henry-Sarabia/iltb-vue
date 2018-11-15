<template>
  <div id="app">
    <LandingPage
      v-if="showLanding"
      v-on:startApp="showLanding = false"
    >
    </LandingPage>
    <AppPage
      v-else
    >
    </AppPage>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import AppPage from './components/AppPage.vue';

export default {
  name: 'app',
  components: {
    LandingPage,
    AppPage
  },
  data () {
    return {
      showLanding: true
    }
  }
}
</script>

<style>
#app {
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #2b373e !important;
}
</style>
