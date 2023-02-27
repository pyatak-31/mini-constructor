<template>
    <div
        class="editing-template"
        :class="{ 'editing-template--drag': isDragEditingTemplate }"
        draggable="true"
        @dragstart="onDragStartEditingTemplate"
        @drop.prevent="onDropEditingTemplate"
        @dragend="onDragEndEditingTemplate"
        @dragenter.prevent
        @dragover.prevent
    >
        <slot />

        <ui-button
            class="editing-template__delete-btn"
            theme="danger"
            size="small"
            @onClick="deleteItem" 
        >
            X
        </ui-button>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'EditingItem',

        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
        },

        props: {
            index: Number,
        },

        computed: {
            ...mapState('templates', {
                dragEditingTemplateIndex: 'dragEditingTemplateIndex',
            }),

            ...mapGetters('templates', {
                isDragEditingTemplate: 'isDragEditingTemplate',
            }),
        },

        methods: {
            ...mapMutations('templates', {
                setDragEditingTemplateIndex: 'setDragEditingTemplateIndex',
                replaceTemplate: 'replaceTemplate',
                deleteTemplate: 'deleteTemplate'
            }),

            onDragStartEditingTemplate() {
                if (this.dragEditingTemplateIndex != this.index) {
                    this.setDragEditingTemplateIndex(this.index);
                }
            },

            onDropEditingTemplate() {
                if (this.dragEditingTemplateIndex !== null && this.dragEditingTemplateIndex != this.index) {
                    this.replaceTemplate(this.index);
                };
            },

            onDragEndEditingTemplate() {
                this.setDragEditingTemplateIndex(null);
            },

            deleteItem() {
                this.deleteTemplate(this.index);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .editing-template {
        position: relative;
        padding-top: 50px;
        border: 2px solid transparent;

        &--drag {
            border-color: $success;
        }

        &__delete-btn {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>