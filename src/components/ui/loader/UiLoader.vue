<template>
    <span
        class="loader"
        :class="{ 'loader--dark': dark }" 
    ></span>
</template>

<script>
    export default {
        component: 'UiLoader',

        props: {
            dark: Boolean,
        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 5px solid $white;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: rotation 1s linear infinite;

        &--dark {
            border-color: $dark;
            border-bottom-color: transparent;
        }
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>