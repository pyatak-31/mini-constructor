<template>
    <aside class="options">
        Sidebar

        <div
            class="template__item"
            draggable="true"
            @dragstart="onDragStartNewTemplate('TextTemplate')"
            @dragend="onDragEndNewTemplate"
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
    import { mapActions, mapMutations } from 'vuex';

    export default {
        name: 'ModuleOptions',
        
        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        methods: {
            ...mapActions('templates', {
                saveTemplates: 'saveTemplates'
            }),

            ...mapMutations('templates', {
                setDragNewTemplateIndex: 'setDragNewTemplateIndex'
            }),

            onDragStartNewTemplate(templateName) {
                this.setDragNewTemplateIndex(templateName);
            },

            onDragEndNewTemplate() {
                this.setDragNewTemplateIndex(null);
            },
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