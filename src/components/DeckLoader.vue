<template>
    <div>
        <VDeck
            v-bind:itemWrappers="itemWrappers"
            v-on:decrement="getItem"
        />
    </div>
</template>

<script>
import {get} from "axios";
import VDeck from "./VDeck.vue";
import VButton from "./VButton.vue";

export default {
    name: "DeckLoader",
    data () {
        return {
            itemWrappers: []
            }
    },
    components: {
        VDeck,
        VButton
    },
    methods: {
        getItem: function () {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.itemWrappers.push(response.data);

            }, (error) => {
                this.itemWrappers.push(error);
            })
        }
    },
    created() {
        for(var i = 0; i < 5; i++) {
            this.getItem();
        }
    }
}
</script>
