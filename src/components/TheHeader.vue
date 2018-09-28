<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="http://192.168.1.8:8080">ILTB</a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">

                </div>
                <div class="navbar-end">
                    <div class="navbar-item" href="http://www.github.com">
                        <Github/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Github from './Github.vue'

export default {
    name: 'TheHeader',
    components: {
        Github
    }
}
</script>

<style scoped>
.navbar { 
  border-bottom: 1px solid hsl(0, 0%, 15%);
}
</style>
