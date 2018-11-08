<template>
    <div>
        <vue-swing
            @throwoutend="onThrowoutEnd"
            @dragstart="onDragStart()"
            :config="config"
            ref="vueswing"
        >
            <Card
                v-for="(wrapper, index) in itemWrappers"
                :key="wrapper.id"
                v-bind:item="wrapper.item"
                v-bind:id="wrapper.id"
                v-bind:index="index"
                v-bind:showShadow="shouldShadow(index)"
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
            },
            swungCards: [],
            topCard: 0,
        }
    },
    methods: { 
        onDragStart () {
            this.iterateTopCard(); 
        },
        onThrowoutEnd({target}) {
            if (target.hasSwung) {
                return
            }
            target.hasSwung = true;
            this.swungCards[this.topCard] = true;
            this.$emit("decrement"); 
            if (this.itemWrappers.length > 8) {
                this.itemWrappers.shift();
            }
            // this.iterateTopCard();
        },
        iterateTopCard() {
            if (this.topCard >= 8) {
                return
            }
            this.topCard = this.topCard + 1;
        },
        hasSwung(index) {
            if (this.swungCards[index] === true) {
                return true;
            }
            return false;
        },
        shouldShadow(index) {
            if (index == this.topCard) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>
