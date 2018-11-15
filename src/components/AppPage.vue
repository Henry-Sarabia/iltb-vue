<template>
    <div class="hero is-fullheight">
      <div class="hero-head">
        <TheHeader />
      </div>
      <div class="hero-body">
        <TheContent/>
      </div>
      <div class="hero-foot">
        <TheFooter />
      </div>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheContent from './TheContent.vue';
import TheFooter from './TheFooter.vue';

export default {
    name: "AppPage",
    components: {
        TheHeader,
        TheContent,
        TheFooter
    }
}
</script>

<style lang="scss" scoped>
.hero-body {
  /* background-image: url("./assets/items4.png"); */
  background: white;
  background-position: center;
  background-repeat: repeat;
  /* clip-path: polygon(0 6%, 100% 0, 100% 94%, 0% 100%); */
  /* clip-path: polygon(0 0%, 100% 6%, 100% 100%, 0% 94%); */
}

.hero-foot {
  z-index: 30;
}
</style>
