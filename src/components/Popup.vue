<template>
    <div class="popup-container" v-if="isOpen" @click.self="close">
        <!-- <div class=" poput-inner" @click.capture="open"> -->
        <div class=" poput-inner">
            <slot></slot>
            <button @click="close">Close</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "PopupComponont",
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        open() {
            this.isOpen = true
        },

        close() {
            this.isOpen = false
        },
    },
    watch: {
        isOpen(value) {
            if (value) {
                document.querySelector("body").classList.add("hidden-scroll")
            }

            if (!value) {
                document.querySelector("body").classList.remove("hidden-scroll")
            }
        }
    }
}
</script>

<style scoped>
.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}

.poput-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    padding: 2rem;
    max-width: 400px;
}
</style>