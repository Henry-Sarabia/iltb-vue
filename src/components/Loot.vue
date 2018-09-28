<template>
    <transition name="flip" mode="out-in">
        <LootItem 
            v-if="toggle"
            key="item-a"
            id="item-a"
            v-bind:description="item"
        />
        <LootItem
            v-else
            key="item-b"
            id="item-b"
            v-bind:description="item"
        />
    </transition>
</template>

<script>
import LootItem from "./LootItem.vue"

export default {
    name: "Loot",
    props: {
        item: String,
        value: Number,
        toggle: Boolean
    },
    components: {
        LootItem
    }
}
</script>

<style scoped>
.flip-enter-active {
    animation: flipIn 0.3s;
    backface-visibility: visible !important;
}
.flip-leave-active {
    animation: flipOut 0.3s;
    backface-visibility: visible !important;
}

@keyframes flipIn {
    from {
        transform: perspective(400px) rotateX(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }

    60% {
        transform: perspective(400px) rotateX(20deg);
        opacity: 1;
    }

    to {
        transform: perspective(400px);
        animation-timing-function: ease-in-out;
    }  
}


@keyframes flipOut {
    from {
        transform: perspective(400px);
    }

    50% {
        transform: perspective(400px) rotateX(20deg);
        animation-timing-function: ease-out;
        opacity: 1;
    }

    to {
        transform: perspective(400px) rotateX(-90deg);
        opacity: 0;
    }
}
</style>
