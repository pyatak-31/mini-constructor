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
        <!-- <div v-if="index === 0">+</div> -->
        <slot />
        <!-- <button @click="add">+</button> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'ModuleEditingItem',

        props: {
            index: Number,
            id: String,
            // isDragEditingTemplate: Boolean
        },

        computed: {
            ...mapState('templates', {
                templates: 'templates',
                dragEditingTemplateIndex: 'dragEditingTemplateIndex',
            }),

            ...mapGetters('templates', {
                isDragEditingTemplate: 'isDragEditingTemplate',
            }),
        },

        methods: {

            ...mapMutations('templates', {
                setDragEditingTemplateIndex: 'setDragEditingTemplateIndex'
            }),

            onDragStartEditingTemplate() {
                if (this.dragEditingTemplateIndex != this.index) {
                    this.setDragEditingTemplateIndex(this.index);
                }
            },

            onDropEditingTemplate() {
                if (this.dragEditingTemplateIndex !== null) {
                    if (this.dragEditingTemplateIndex != this.index) {
                        this.templates[this.dragEditingTemplateIndex] = this.templates.splice(this.index, 1, this.templates[this.dragEditingTemplateIndex])[0];
                    }
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