<template>
    <a 
        v-bind="$attrs"
        v-on="$listeners"
        class="button" 
    >
        <slot></slot>
    </a>
</template>

<script>

export default {
    name: 'VButton'
}
</script>
