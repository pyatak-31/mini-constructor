<template>
    <ui-button
        class="add-template"
        :class="{
            'add-template--drag': isDragNewTemplate, 
            'add-template--over': isDragOver,
        }"
        theme="success"
        outline
        title="Добавить"
        @onClick="add"
        @drop.native.prevent="onDropNewTemplate"
        @dragenter.native.prevent
        @dragover.native.prevent="onDragOverNewTemplate"
        @dragleave.native.prevent="onDragLeaveNewTemplate"
    >
        <template #left-icon>
            <ui-icon name="plus" />
        </template>
    </ui-button>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'AddTemplate',

        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        props: {
            index: Number,
        },

        data() {
            return {
                isSelectMode: false,
                isDragOver: false,
            }
        },

        computed: {
            ...mapState('templates', {
                dragNewTemplateOptions: 'dragNewTemplateOptions',
            }),

            ...mapGetters('templates', {
                isDragNewTemplate: 'isDragNewTemplate'
            })
        },

        methods: {
            ...mapMutations('templates', {
                addTemplate: 'addTemplate',
                setNewTemplateIndex: 'setNewTemplateIndex',
            }),

            add() {
                this.isSelectMode = true;
                if (this.isSelectMode) {
                    this.setNewTemplateIndex(this.index);
                } else {
                    this.setNewTemplateIndex(null);
                }
            },

            onDropNewTemplate() {
                if (this.dragNewTemplateOptions !== null) {
                    this.addTemplate({
                        index: this.index,
                        newTemplate: new this.dragNewTemplateOptions.Data
                    });
                    this.isDragOver = false;
                }
            },

            onDragOverNewTemplate() {
                if (!this.isDragOver) {
                    this.isDragOver = true;
                } else {
                    return false;
                }
            },

            onDragLeaveNewTemplate() {
                this.isDragOver = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-template {
        width: 100%;
        height: 100px;
        border: 2px solid transparent;
        transition: background-color .3s,
            border-color .3s;

        &--drag {
            background-color: $primary-20;
            border-color: $info;
        }

        &--over {
            background-color: $success-20;
        }
    }
</style>