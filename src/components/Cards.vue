<template>
    <div>
        <vue-swing
            @throwoutend="onThrowoutEnd"
            :config="config"
            ref="vueswing"
        >
            <Card
                v-for="(item, index) in reordered"
                :key="item.id"
                v-bind:item="item.item"
                v-bind:id="item.id"
                v-bind:index="index"
                v-bind:length="items.length"
            />
        </vue-swing>
    </div>
</template>

<script>
import VueSwing from "vue-swing";
import Card from "./Card.vue";

export default {
    name: "Cards",
    components: {
        VueSwing,
        Card
    },
    props: {
        items: Array
    },
    data () {
        return {
            config: {
                allowedDirections: [
                    // VueSwing.Direction.UP,
                    // VueSwing.Direction.DOWN,
                    VueSwing.Direction.LEFT,
                    VueSwing.Direction.RIGHT
                ],
                minThrowOutDistance: 350,
                maxThrowOutDistance: 600,
                maxRotation: 30,
            }
        }
    },
    methods: {
        onThrowoutEnd() {
            this.$emit("decrement");
            // const items = this.$refs.vueswing.items
            // items[items.length - 1].throwIn(100, 100);
            // this.items.pop();
            // this.items.shift();
        }
    },
    computed: {
        reordered() {
            return this.items.slice().reverse();
        }
    }
}
</script>
