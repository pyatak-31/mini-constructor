<template>
    <aside class="options">
        Sidebar

        <ui-button
            theme="success"
            @onClick="saveTemplates"
        >
            <template #left-icon>
                a
            </template>
            Save
        </ui-button>
        
    </aside>
</template>

<script>
    export default {
        name: 'ModuleOptions',
        
        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
        },

        methods: {
            saveTemplates() {
                this.$emit('onSaveTemplate');
            }
        }
    }
</script>

<style lang="scss" scoped>
    $width: 300px;

.options {
    width: $width;
    background-color: $white;
    box-shadow: 0 0 15px -15px $dark;
}
</style>