<template>
    <div>
        <LootDisplay 
            v-bind:item="item"
            v-bind:toggle="toggle"
        />
        <div class="buttons pushed-down">
            <VButton v-on:click="getitem">
                <span class="has-text-weight-semibold">
                    Reroll
                </span>
            </VButton>
            <VButton
                v-on:click="copyItem"
                class="is-outlined"
            >
                <font-awesome-icon 
                    v-bind:icon="['far', 'clipboard']"
                    size="sm"
                    class="icon is-small"
                />
                <span>Copy</span>
            </VButton>
        </div>
    </div>
</template>

<script>
import {get} from "axios";
import LootDisplay from "./LootDisplay.vue";
import VButton from "./VButton.vue";

export default {
    name: "LootGenerator",
    data () {
        return {
            item: {
                description: "",
                value: 0,
            },
            toggle: true
            }
    },
    components: {
        LootDisplay,
        VButton
    },
    methods: {
        getitem: function () {
            this.toggle = !this.toggle;
            get("http://192.168.1.8:8081/api/v1/item")
            .then((response) => {
                this.item.description = response.data.description;
                this.item.value = response.data.value;
            }, (error) => {
                this.item.description = error;
            })
        },
        copyItem: function() {
            const el = document.createElement("textarea");
            el.value = this.item.description;

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
.grad {
background-image: linear-gradient(315deg, rgba(202,225,255,1) 0%, rgba(208,255,226,1) 100%);
}
</style>
