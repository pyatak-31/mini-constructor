<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'AppContainer'
    }
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1230px;
        width: 100%;
        margin: 0 auto; 
        padding-right: 15px;
        padding-left: 15px;
    }
</style>