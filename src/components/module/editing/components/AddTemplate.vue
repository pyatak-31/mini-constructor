<template>
    <div
        class="add-template"
        :class="{ 'add-template--drag': isDragNewTemplate }"
        @click="add"
        @drop.prevent="onDropNewTemplate"
        @dragenter.prevent.stop
        @dragover.prevent.stop
    >+</div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'AddTemplate',

        props: {
            index: Number,
        },

        data() {
            return {
                isSelectMode: false,
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
                this.isSelectMode = !this.isSelectMode;
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
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .add-template {
        width: 100%;
        height: 100px;
        border: 2px solid transparent;

        &--drag {
            border-color: $info;
        }
    }
</style>