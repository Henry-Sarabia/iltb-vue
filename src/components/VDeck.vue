<template>
    <div class="deck">
        <vue-swing
            @throwoutend="onThrowoutEnd"
            @dragstart="onDragStart()"
            :config="config"
            ref="vueswing"
        >
            <VCard
                v-for="(wrapper, index) in itemWrappers"
                :key="wrapper.id"
                v-bind:item="wrapper.item"
                v-bind:id="wrapper.id"
                v-bind:index="index"
                v-bind:class="classObject"  
                v-bind:style="{'animation-delay': index * 0.25 + 0.25 + 's'}"    
            >
            </VCard>
        </vue-swing>
    </div>
</template>

<script>
import VueSwing from "vue-swing";
import VCard from "./VCard.vue";

export default {
    name: "VDeck",
    components: {
        VueSwing,
        VCard
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
.deck {
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
</style>