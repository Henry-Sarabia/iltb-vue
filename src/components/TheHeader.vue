<template>
    <nav class="navbar bordered">
        <div class="container">
            <div class="navbar-brand">
                <a 
                    class="is-size-4 navbar-item has-text-black-ter has-text-weight-normal" 
                    href="http://192.168.1.8:8080">
                    I Loot The Body
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
                                class="icon"
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

<style scoped>
.sansfont {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.bordered { 
  /* border-bottom: 1px solid hsl(0, 0%, 15%); */
  background-color: #84a8c6 !important;
  /* background-color: #5d707f !important; */
    /* background-color: #faf3dd !important; */

}
</style>
