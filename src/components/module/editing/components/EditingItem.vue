<template>
    <div
        class="editing-template"
        :class="{ 'editing-template--drag': isDragEditingTemplate }"
        draggable="true"
        @dragstart="onDragStartEditingTemplate"
        @drop.prevent="onDropEditingTemplate"
        @dragend="onDragEndEditingTemplate"
        @dragenter.prevent.stop
        @dragover.prevent.stop
    >
        <slot />
    </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'EditingItem',

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
                replaceTemplate: 'replaceTemplate'
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
        }
    }
</script>

<style lang="scss" scoped>
    .editing-template {
        border: 2px solid transparent;

        &--drag {
            border-color: $success;
        }
    }
</style>