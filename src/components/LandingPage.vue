<template>
    <div class="hero is-fullheight dark-bg">
        <div class="hero-head">
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="header">
                    The endless deck of <strong>mundane items.</strong>
                </h1>
                <h1 class="header">
                    And we really <strong>mean endless.</strong>
                </h1>
                <VButton
                    class="is-outlined is-rounded is-medium is-warning"
                    v-on:click="$emit('startApp')"
                >
                    Begin
                </VButton>
            </div>
        </div>
        <div class="hero-foot">
        </div>
    </div>
</template>

<script>
import VButton from "./VButton.vue"
export default {
    name: "LandingPage",
    components: {
        VButton
    }
}
</script>


<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:700);

$dark: #2A2C39;
$dark-blue: #2b373e;
$red: #FF4056;
$yellow: #FFD700;

@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../../node_modules/bulma/sass/elements/button.sass";
@import "../../node_modules/bulma/sass/elements/container.sass";
@import "../../node_modules/bulma/sass/layout/hero.sass";
@import "../../node_modules/bulma/sass/base/helpers.sass";
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
