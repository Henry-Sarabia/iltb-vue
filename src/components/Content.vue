<template>
    <div class="container pulled-up">
        <h2 class="is-size-5">
            You rifle through their pockets and find...
        </h2>
        <Generator />
    </div>
</template>

<script>
import Generator from "./Generator.vue";

export default {
    name: "Content",
    components: {
        Generator
    }
}
</script>

<style scoped>
.pulled-up {
    margin-top: -20rem;
}
</style>
