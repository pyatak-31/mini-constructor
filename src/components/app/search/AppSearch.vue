<template>
    <div class="search">
        <ui-input
            class="search__field"
            placeholder="Biutiful"
            v-model="item"
            @keydown.native.enter="itemSearching"
        />

        <ui-button
            theme="info"
            @onClick="itemSearching"
        >
            Поиск
        </ui-button>
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
    .search {
        display: flex;
        align-items: center;
        gap: 20px;

        &__field {
            flex: 0 1 300px;
        }
    }
</style>