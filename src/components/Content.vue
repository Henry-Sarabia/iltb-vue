<template>
    <div class="container pulled-right">
        <h2 class="is-size-5 selectable">
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
.selectable {
    user-select:text;
}
.pulled-up {
    margin-top: -20rem;
}
.pulled-right {
    padding-left: 7%;
}
</style>
