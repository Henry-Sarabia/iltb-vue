<template>
    <div>
        <Cards
            v-bind:items="items"
            v-on:decrement="insertItem"
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
            items: [],
            temp: []
            }
    },
    components: {
        Cards,
        VButton
    },
    methods: {
        getItem: function () {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.temp.push(response.data);

            }, (error) => {
                this.temp.push(error);
            })
        },
        insertItem: function() {
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.items.unshift(response.data);
            }, (error) => {
                this.items.push(error);
            })
        }
    },
    created() {
        for(var i = 0; i < 4; i++) {
            this.getItem();
        }
        this.items = this.temp;
    }
}
</script>
