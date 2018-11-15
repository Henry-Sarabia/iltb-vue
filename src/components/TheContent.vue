<template>
    <div class="container has-text-centered">
        <h2 class="title is-size-2 light">The Endless Deck of Mundane Items</h2>
        <div> 
            <DeckLoader></DeckLoader>
        </div>
        <h3 class="subtitle is-size-3 light">
            Drag <strong>left</strong> or <strong>right</strong>
        </h3>
    </div>
</template>

<script>
import DeckLoader from './DeckLoader.vue';

export default {
    name: "TheContent",
    components: {
        DeckLoader
    }
}
</script>

<style lang="scss" scoped>
$light: #e4f0f7;
$dark: #2b373e;
$stroke: -1px -1px 0 $dark,  1px -1px 0 $dark, -1px 1px 0 $dark, 1px 1px 0 $dark;

.light {
    color: $light;
    text-shadow: $stroke;
    strong {
        color: $light;
    }
}

.dark {
    color: $dark;

    strong {
        color: $dark;
    }
}
</style>
