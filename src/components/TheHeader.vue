<template>
    <nav class="navbar bg">
        <div class="container">
            <div class="navbar-brand">
                <a 
                    class="is-size-4 navbar-item has-text-weight-normal" 
                    href="http://192.168.1.8:8080">
                    TEDOMI
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <VButton 
                            href="http://www.github.com"
                            class="is-outlined is-light"
                        >
                            <font-awesome-icon 
                                v-bind:icon="['fab', 'github']"
                                size="sm"
                                class="icon is-small"
                            />
                            <span class="button-text">
                                Explore
                            </span>
                        </VButton>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import VButton from "./VButton.vue";

export default {
    name: 'TheHeader',
    components: {
        VButton
    }
}
</script>

<style lang="scss" scoped>

$light: #fff7d0;
$dark: #2b373e;

@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../../node_modules/bulma/sass/elements/button.sass";

a {
    color: $light;
}

.button-text {
    // font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding-left: 0.25rem;
}

.bg { 
  background-color: $dark !important;

}
</style>

