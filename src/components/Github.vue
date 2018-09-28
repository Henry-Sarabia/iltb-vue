<template>
    <a class="button is-dark is-outlined" href="http://www.github.com">
        <font-awesome-icon 
                v-bind:icon="['fab', 'github']"
                size="sm"
                class="icon"
        />
        <span>Explore</span>
    </a>
</template>

<script>

export default {
    name: 'Github'
}
</script>
