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
        <ui-button
            class="editing-template__up-btn"
            theme="info"
            size="small"
            :disabled="index === 0"
            title="Поднять"
            @onClick="replaceFrom(index - 1)"
        >
            up
        </ui-button>    

        <div class="editing-template__component">
            <slot />
        </div>

        <ui-button
            class="editing-template__down-btn"
            theme="info"
            size="small"
            :disabled="index === length - 1"
            title="Опустить"
            @onClick="replaceFrom(index + 1)"
        >
            down
        </ui-button>

        <ui-button
            class="editing-template__delete-btn"
            theme="danger"
            size="small"
            title="Удалить"
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
            length: Number,
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

            replaceFrom(targetIndex) {
                this.setDragEditingTemplateIndex(this.index);
                this.replaceTemplate(targetIndex);
                this.setDragEditingTemplateIndex(null);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .editing-template {
        display: grid;
        grid-template-rows: 30px 1fr 30px;
        grid-template-columns: 1fr 30px;
        border: 2px solid $dark;
        border-radius: 5px;
        overflow: hidden;

        &--drag {
            border-color: $success;
        }

        &__component {
            grid-column: 1 / 3;
            padding: 20px;
        }

        &__up-btn {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            border-radius: 0;
        }
        
        &__down-btn {
            grid-row: 3 / 4;
            grid-column: 1 / 3;
            border-radius: 0;
        }

        &__delete-btn {
            grid-row: 1 / 1;
            border-radius: 0;
        }
    }
</style>