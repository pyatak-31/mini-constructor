<template>
    <aside class="options">
        Sidebar

        <div
            class="template__item"
            draggable="true"
            @dragstart="onDragStart"
            @dragend="onDragEnd"
        ></div>

        <ui-button
            theme="success"
            @onClick="saveTemplates"
        >
            <template #left-icon>
                <ui-icon name="save" />
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
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        data() {
            return {
                templates: [
                    {
                        id: 1,
                        name: 'ModuleText',
                    }
                ],
            }
        },

        methods: {
            saveTemplates() {
                this.$emit('onSaveTemplate');
            },

            onDragStart() {
                this.$emit('onDragStart', 'ModuleText');
            },

            onDragEnd() {
                this.$emit('onDragEnd');
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

    .template {


        &__item {
            width: 50px;
            height: 50px;
            background-color: $primary;
        }
    }
</style>