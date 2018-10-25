<template>
    <div>
        <vue-swing
            @throwoutend="onThrowoutEnd"
            :config="config"
            ref="vueswing"
        >
            <Card
                v-for="wrapper in reordered"
                :key="wrapper.id"
                v-bind:item="wrapper.item"
                v-bind:id="wrapper.id"
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
        itemWrappers: Array
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
            // const itemWrappers = this.$refs.vueswing.itemWrappers
            // itemWrappers[itemWrappers.length].throwIn(100, 100);
            // this.itemWrappers.pop();
            // this.itemWrappers[this.itemWrappers.length - 1].swung = true;
        }
    },
    computed: {
        reordered() {
            return this.itemWrappers.slice().reverse();
        }
    }
}
</script>
