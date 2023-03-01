<template>
    <div
        class="app-sticky"
        :style="{ 'top': `${ top }px` }"    
    >
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'AppSticky',

        props: {
            top: [Number, String]
        }
    }
</script>

<style lang="scss" scoped>
    .app-sticky {
        position: sticky;
    }
</style>