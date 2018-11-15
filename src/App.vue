<template>
  <div id="app">
    <transition
      name="slide-up"
      mode="out-in"
    >
      <LandingPage
        v-if="showLanding"
        v-on:startApp="showLanding = false"
      >
      </LandingPage>
      <AppPage
        v-else
      >
      </AppPage>
    </transition>
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

.slide-up-enter-active {
  transition: all .3s ease-in;
}
.slide-up-leave-active {
  /* transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all .5s ease-out;
}
.slide-up-leave-to {
  transform: translateY(-20rem);
  opacity: 0;
}
.slide-up-enter {
  transform: translateY(20rem);
  opacity: 0;
}
</style>
