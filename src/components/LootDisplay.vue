<template>
    <transition name="flip" mode="out-in">
        <LootDisplayItem 
            v-if="toggle"
            key="item-a"
            v-bind="item"
        />
        <LootDisplayItem
            v-else
            key="item-b"
            v-bind="item"
        />
    </transition>
</template>

<script>
import LootDisplayItem from "./LootDisplayItem.vue"

export default {
    name: "LootDisplay",
    props: {
        item: {
            name: String,
            description: String,
            quality: String,
            material: String,
            detail: String,
            value: Number,
            weight: Number,
        },
        toggle: Boolean
    },
    components: {
        LootDisplayItem
    }
}
</script>

<style scoped>
.flip-enter-active {
    animation: flipIn 0.3s;
    backface-visibility: hidden;
}
.flip-leave-active {
    animation: flipOut 0.3s;
    backface-visibility: hidden;
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
