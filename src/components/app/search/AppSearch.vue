<template>
    <div class="movies-search">
        <ui-input
            v-model="item"
            @keydown.native.enter="itemSearching"
        />

        <ui-button
            @onClick="itemSearching"
        >Search</ui-button>
    </div>
</template>

<script>
    export default {
        name: 'AppSearch',

        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
        },

        data() {
            return {
                item: ''
            }
        },

        methods: {
            itemSearching() {
                this.$emit('onSearching', this.item);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .movies-search {
        display: flex;
        align-items: center;
        gap: 20px;
    }
</style>