<template>
  <div id="app">
    <div class="hero is-fullheight">
      <div class="hero-head"><TheHeader></TheHeader></div>
      <div class="hero-body">
        <div>
            <transition
              name="slide-up"
            >
              <div class="top-half dark-bg" v-if="showLanding">
                <div class="container has-text-centered pulled-down">
                  <h1 class="header">The endless deck of <strong>mundane items.</strong></h1>
                </div>
              </div>
            </transition>
            <transition
              name="slide-down"
            >
              <div class="bottom-half dark-bg" v-if="showLanding">
                <div class="container has-text-centered">
                  <h1 class="header">And we really <strong>mean endless.</strong></h1>
                  <VButton class="is-outlined is-rounded is-medium is-warning" v-on:click="showLanding = false">Begin</VButton>
                </div>
              </div>
            </transition>
        </div>
        <transition
          name="fade-in"
        >
          <TheContent v-if="!showLanding"></TheContent>
        </transition>
      </div>
      <div class="hero-foot"><TheFooter></TheFooter></div>
    </div>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import TheHeader from './components/TheHeader.vue';
import TheContent from './components/TheContent.vue';
import TheFooter from './components/TheFooter.vue';
import AppPage from './components/AppPage.vue';
import VButton from "./components/VButton.vue"

export default {
  name: 'app', 
  components: {
    LandingPage,
    TheHeader,
    TheContent,
    TheFooter,
    AppPage,
    VButton
  },
  data () {
    return {
      showLanding: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900);

$dark: #2A2C39;
$dark-blue: #2b373e;
$red: #FF4056;
$yellow: #FFD700;

@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/elements/button.sass";
@import "../node_modules/bulma/sass/elements/container.sass";
@import "../node_modules/bulma/sass/layout/hero.sass";
@import "../node_modules/bulma/sass/base/helpers.sass";

#app {
  // font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: $red !important;
}

.hero-body {
  // background-color: $yellow;
  // background: linear-gradient(to top, #3d7eaa, #ffe47a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-image: url("./assets/flare.jpg");
  background-size: cover;
  background-position: center;
}

.top-half {
  position: absolute;
  top: 0;
  height: 50vh;
  width: 100%;
  z-index: 30;
}

.bottom-half {
  position:absolute;
  bottom: 0;
  height: 50vh;
  width: 100%;
  z-index: 30;
}

.pulled-down {
  margin-top: 35rem;
}

.dark-bg {
    background-color: $dark-blue;
}

.header {
    font-size: 4rem;
    font-weight: 700;
    color: hsl(0, 0, 96%);
    margin-bottom: 0.4125rem;

    strong {
        color: $yellow;
    }
}

.slide-up-leave-active{
  animation: slide-up 0.75s ease-in-out;
}
.slide-up-leave-to, .slide-up-leave {
  opacity: 0;
}

.slide-down-leave-active {
  animation: slide-down 0.75s ease-in-out;
}
.slide-down-leave-to {
  opacity: 0;
}

.fade-in-enter {
  opacity: 0;
}
.fade-in-enter-active {
  animation: fade-in 2s ease-in-out;
  // animation-delay: 1s;
}
.fade-in-enter-to {
  opacity: 1;
}


@keyframes slide-up {
  0% {
    opacity: 1;
  }

  75% {
    opacity: 1;
    transform: translateY(calc(-100% + 3.125rem));
  }

  100% {
    opacity: 0;
    transform: translateY(calc(-100% + 3.125rem));
  }
}

@keyframes slide-down {
  0% {
    opacity: 1;
  }
  
  75% {
    opacity: 1;
    transform: translateY(calc(100% - 3.125rem));
  }

  100% {
    opacity: 0;
    transform: translateY(calc(100% - 3.125rem));
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
