<template>
    <nav class="navbar bordered">
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
                            class="is-outlined"
                        >
                            <font-awesome-icon 
                                v-bind:icon="['fab', 'github']"
                                size="sm"
                                class="icon is-small"
                            />
                            <span class="sansfont">
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
$light: #e4f0f7;
$dark: #2b373e;
a {
    color: $light;
}
.sansfont {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.bordered { 
  background-color: $dark !important;
  border-bottom: 1px solid hsl(0, 0%, 15%);

}
</style>

