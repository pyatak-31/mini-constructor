<template>
    <ui-button
        class="add-item"
        theme="success"
        outline
        title="Добавить"
        @onClick="addItem"
    >
        <template #left-icon>
            <ui-icon name="circle-plus" />
        </template>
    </ui-button>
</template>

<script>
    export default {
        name: 'AddItem',

        components: {
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
        },

        methods: {
            addItem() {
                this.$emit('onAddItem');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-item {
        width: 100%;
        height: 100%;
    }
</style>