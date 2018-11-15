<template>
    <footer class="border">
        <div class="container has-text-light has-text-left">
            <p>Made by Henry Sarabia</p>
        </div>
    </footer>
</template>

<script>
export default {
    name:'TheFooter'
}
</script>

<style lang="scss" scoped>
$light: #e4f0f7;
$dark: #2b373e;

p {
    color: $light;
}

.border {
    /* border-top: 1px solid hsl(0, 0%, 70%); */
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: $dark!important;
    /* background-color: #5d707f !important; */
    /* background-color: #faf3dd !important; */
}
</style>
