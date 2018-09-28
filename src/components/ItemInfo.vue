<template>
    <h1 class="is-size-2 has-text-grey-darker has-text-weight-semibold">
        {{ description }}
    </h1>
</template>

<script>
export default {
    name: "ItemInfo",
    props: {
        description: String
    }
}
</script>
