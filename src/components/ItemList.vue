<template>
    <div class="container">
        <h3 class="is-size-5 pulled-left">
            You rifle through their pockets and find...
        </h3>
        <div>
            <a 
                    v-on:click="getItems"
                    class="is-inline has-text-dark"
                >
                    <font-awesome-icon 
                        v-bind:icon="['far', 'plus-square']"
                        size="lg"
                        class="icon"
                    />
                </a>
            <transition-group
                tag="ul"
                name="list"
            >
                <li
                    v-for="(item, index) in items"
                    v-bind:text=item
                    v-bind:key="index"
                    class="is-size-4 has-text-grey-darker has-text-weight-normal"
                >
                    {{ item }}
                    <!-- {{ windowHeight }} -->
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script> 
import { get } from 'axios';

export default {
    name: "ItemList",
    data () {
        return {
            items: [],
            windowHeight: 0
        }
    },
    computed: {
        capacity: function () {
            if(this.windowHeight < 500) {
                return 5
            }
            else if(this.windowHeight < 1000) {
                return 10
            } else if(this.windowHeight >= 1000) {
                return 20
            }
        }
    },
    methods: {
        getItems: function () {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                // this.items.splice(0, 0, response.data.item);
                this.items.unshift(response.data.item)
                if (this.items.length > this.capacity) {
                    this.items.pop();
                }
            }, (error) => {
                this.items.push(error);
            })
        },
        handleResize: function () {
            this.windowHeight = window.innerHeight;
        }
    },
    created() {
        this.getItems();
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style scoped>

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.list-move {
    transition: transform 1s;
}

.icon {
    margin-left: -2rem;
    padding-right: 0;

}

.pulled-left {
    margin-left: -2rem;
}


li:first-of-type {
    display: inline-flex;
    padding-bottom: 1rem;
}


/* li:nth-of-type(0), li:nth-of-type(1), li:nth-of-type(2), li:nth-of-type(3), li:nth-of-type(4) {
    opacity: 1.0;
}

li:nth-of-type(5) {
    opacity: 0.7;
}

li:nth-of-type(6) {
    opacity: 0.5;
}

li:nth-of-type(7) {
    opacity: 0.3;
}

li:nth-of-type(8) {
    opacity: 0.1;
}

li:nth-of-type(9) {
    opacity: 0.03;
} */

/* li:nth-last-child(5) {
    opacity: 0.8;
}

li:nth-last-child(4) {
    opacity: 0.6;
}

li:nth-last-child(3) {
    opacity: 0.4;
}

li:nth-last-child(2) {
    opacity: 0.2;
}
li:nth-last-child(1) {
    opacity: 0.1;
} */

</style>
