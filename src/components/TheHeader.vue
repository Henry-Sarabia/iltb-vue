<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="http://192.168.1.8:8080">ILTB</a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item" href="http://www.github.com">
                        <VButton 
                            href="http://www.github.com"
                            class="is-outlined"
                        >
                            <font-awesome-icon 
                                v-bind:icon="['fab', 'github']"
                                size="sm"
                                class="icon"
                            />
                            <span>Explore</span>
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
.navbar { 
  border-bottom: 1px solid hsl(0, 0%, 15%);
}
</style>
