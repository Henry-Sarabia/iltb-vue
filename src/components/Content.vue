<template>
    <div class="container">
        <h2 class="is-size-5">
            You rifle through their pockets and find...
        </h2>
        <LootGenerator />
    </div>
</template>

<script>
import LootGenerator from "./LootGenerator.vue";

export default {
    name: "Content",
    components: {
        LootGenerator
    }
}
</script>

<style scoped>
.pulled-up {
    margin-top: -20rem;
}
</style>
