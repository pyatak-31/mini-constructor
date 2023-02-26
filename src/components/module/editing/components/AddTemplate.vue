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

        computed: {
            ...mapState('templates', {
                dragNewTemplateName: 'dragNewTemplateName',
            }),

            ...mapGetters('templates', {
                isDragNewTemplate: 'isDragNewTemplate'
            })
        },

        methods: {
            ...mapMutations('templates', {
                addTemplate: 'addTemplate'
            }),

            add() {
                console.log(this.index);
            },

            onDropNewTemplate() {
                if (this.dragNewTemplateName !== null) {
                    const newTemplate = this.getNewTemplateObject();
                    this.addTemplate({ index: this.index, newTemplate });
                }
            },

            getNewTemplateObject() {
                switch (this.dragNewTemplateName) {
                    case ('TextTemplate'):
                        return {
                            id: `id-${ Math.random() }`,
                            name: this.dragNewTemplateName,
                            title: '',
                            description: '',
                        };
                        break;
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