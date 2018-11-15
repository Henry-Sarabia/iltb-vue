<template>
    <div class="cards">
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
                v-bind:class="classObject"  
                v-bind:style="{'animation-delay': index * 0.25 + 0.25 + 's'}"    
            >
            </Card>
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
            if (this.itemWrappers.length > 8) {
                this.itemWrappers.shift();
            }
        }
    },
    computed: {
        classObject: function () {
            return {
                'animate-slide-in': (this.itemWrappers.length <= 5) ? true : false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cards {
    position: relative;
    margin: 260px auto;
    padding: 5rem 1rem;
}

.animate-slide-in {
    animation: slide-in 1s cubic-bezier(.58,1.65,.93,.87);
    animation-iteration-count: 1;
    animation-fill-mode: backwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-15rem);
  }

  35% {
      opacity: 1;
  }
  
  100% {
    opacity: 1;
    transform: none;
  }
}

// .animate {
//     animation: slide-in-right 0.82s cubic-bezier(.36,.07,.19,.97) both;
//     animation-iteration-count: 1;
//     animation-delay: 0.5s;
//     transform: translate3d(0, 0, 0);
//     backface-visibility: hidden;
//     perspective: 1000px;
// }

// .pulled-left {
//     transform: translate3d(-100px, 0, 0);
//     opacity: 0;
// }

// .slide-in {
//     transition: transform 1s, opacity 1s;
//     transform: translate3d(0, 0, 0);
//     opacity: 1;
// }

// @keyframes slide-in-right {
//     0% {
//         transform: translate3d(-100px, 0, 0);
//         opacity: 0;
//     }

//     100% {
//         transform: translate3d(0, 0, 0);
//         opacity: 1;
//     }
// }
</style>