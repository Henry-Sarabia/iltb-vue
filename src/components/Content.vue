<template>
    <div class="container pulled-up">
        <h2 class="is-size-5">
            You rifle through their pockets and find...
        </h2>
        <div>
            <transition name="flip" mode="out-in">
                <ItemInfo 
                    v-if="toggle"
                    key="item-a"
                    id="item-a"
                    v-bind:description="item"
                />
                <ItemInfo
                    v-else
                    key="item-b"
                    id="item-b"
                    v-bind:description="item"
                />
            </transition>
        </div>
        <div class="buttons pushed-down">
            <a class="button is-dark has-text-weight-semibold"
                v-on:click="getitem"
            >
                <span>Reroll</span>
            </a>
            <a class="button is-dark is-outlined"
                v-on:click="copyItem"
            >
                <font-awesome-icon 
                        v-bind:icon="['far', 'clipboard']"
                        size="xs"
                        class="icon is-small"
                />
                <span>Copy</span>
            </a>
        </div>
    </div>
</template>

<script>
import {get} from 'axios';
import ItemInfo from "./ItemInfo.vue";

export default {
    name: "Content",
    data () {
        return {
            item: "",
            toggle: true
            }
    },
    components: {
        ItemInfo
    },
    methods: {
        getitem: function () {
            this.toggle = !this.toggle;
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.item = response.data.item;
            }, (error) => {
                this.item = error;
            })
        },
        copyItem: function() {
            const el = document.createElement("textarea");
            el.value = this.item;

            el.setAttribute("readonly", "");
            el.style.position = "absolute";
            el.style.left = "-9999px";

            document.body.appendChild(el);
            el.select()

            document.execCommand("copy");
            document.body.removeChild(el);
        }
    },
    created() {
        this.getitem();
    }
}
</script>

<style scoped>
.pushed-down {
    padding-top: 1rem;
}

.pulled-up {
    margin-top: -20rem;
}

.flip-enter-active {
    animation: flipIn 0.3s;
    backface-visibility: visible !important;
}
.flip-leave-active {
    animation: flipOut 0.3s;
    backface-visibility: visible !important;
}

@keyframes flipIn {
  from {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  60% {
    transform: perspective(400px) rotateX(20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in-out;
  }
  
}


@keyframes flipOut {
  from {
    transform: perspective(400px);
  }

  50% {
    transform: perspective(400px) rotateX(20deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotateX(-90deg);
    opacity: 0;
  }
}
</style>
