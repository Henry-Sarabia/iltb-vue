<template>
    <h1>
        <span class="is-size-2 has-text-black-bis has-text-weight-semibold">
            {{ description }}
        </span>
        <span class="is-size-3 has-text-black-ter">
            ({{ value }}gp)
        </span>
    </h1>
</template>

<script>
export default {
    name: "LootDisplayItem",
    props: {
        name: String,
        description: String,
        quality: String,
        material: String,
        detail: String,
        value: Number,
        weight: Number,
    }
}
</script>
