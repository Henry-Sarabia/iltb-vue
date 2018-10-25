<template>
    <div>
        <Cards
            v-bind:itemWrappers="itemWrappers"
            v-on:decrement="unshiftItem"
        />
    </div>
</template>

<script>
import {get} from "axios";
import Cards from "./Cards.vue";
import VButton from "./VButton.vue";

export default {
    name: "VLoot",
    data () {
        return {
            itemWrappers: []
            }
    },
    components: {
        Cards,
        VButton
    },
    methods: {
        pushItem: function () {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.itemWrappers.push(response.data);

            }, (error) => {
                this.itemWrappers.push(error);
            })
        },
        unshiftItem: function() {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.itemWrappers.push(response.data);
            }, (error) => {
                this.itemWrappers.unshift(error);
            })
        }
    },
    created() {
        for(var i = 0; i < 4; i++) {
            this.pushItem();
        }
        // this.itemWrappers = this.temp;
    }
}
</script>
