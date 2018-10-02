<template>
    <h1 class="is-size-2 has-text-grey-darker has-text-weight-semibold">
        {{ description }} ({{ value }}gp)
    </h1>
</template>

<script>
export default {
    name: "LootDisplayItem",
    props: {
        description: String,
        value: Number
    }
}
</script>
