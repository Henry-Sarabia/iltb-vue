<template>
    <div>
        <vue-swing
            @throwoutend="onThrowoutEnd"
            :config="config"
            ref="vueswing"
        >
            <Card
                v-for="wrapper in itemWrappers"
                :key="wrapper.id"
                v-bind:item="wrapper.item"
                v-bind:id="wrapper.id"
                v-bind:shadow="getShadow"
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
                    VueSwing.Direction.LEFT,
                    VueSwing.Direction.RIGHT
                ],
                minThrowOutDistance: 425,
                maxThrowOutDistance: 650,
                maxRotation: 30,
            }
        }
    },
    methods: { 
        onThrowoutEnd({target}) {
            if (target.hasSwung) {
                return
            }
            target.hasSwung = true;
            this.$emit("decrement"); 
            if (this.itemWrappers.length > 15) {
                this.itemWrappers.shift();
            }
        }
    }
}
</script>
