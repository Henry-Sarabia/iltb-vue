<template>
    <div class="container pulled-up">
        <h2 class="is-size-5">
            You rifle through their pockets and find...
        </h2>
        <div>
            <Loot 
                v-bind:item="item"
                v-bind:toggle="toggle"
            />
        </div>
        <div class="buttons pushed-down">
            <a class="button is-dark has-text-weight-semibold"
                v-on:click="getitem"
            >
                <span>Reroll</span>
            </a>
            <a class="button is-dark is-outlined "
                v-on:click="copyItem"
            >
                <font-awesome-icon 
                        v-bind:icon="['far', 'clipboard']"
                        size="sm"
                        class="icon is-small"
                />
                <span>Copy</span>
            </a>
        </div>
    </div>
</template>

<script>
import {get} from "axios";
import Loot from "./Loot.vue";

export default {
    name: "Content",
    data () {
        return {
            item: "",
            toggle: true
            }
    },
    components: {
        Loot
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

</style>
