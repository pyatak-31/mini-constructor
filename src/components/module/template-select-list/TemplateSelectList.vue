<template>
    <ul class="template-select-list">
        <template-select-item
            v-for="{ name, iconName, Data } in templates"
            :key="`select${ name }`"
            :name="name"
            :iconName="iconName"
            :Data="Data"
            :draggable="draggable"
            @onDragStart="onDragStartNewTemplate"
            @onDragEnd="onDragEndNewTemplate"
            @onAdd="add"
        />
    </ul>
</template>

<script>
    import { mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        name: 'TemplateSelectList',

        components: {
            TemplateSelectItem: () => import('./TemplateSelectItem.vue'),
        },

        props: {
            draggable: Boolean,
        },

        computed: {
            ...mapState('templates', {
                templates: 'templatesForSelection',
                newTemplateIndex: 'newTemplateIndex'
            }),

            ...mapGetters('templates', {
                hasNewTemplateIndex: 'hasNewTemplateIndex'
            }),
        },

        methods: {
            ...mapMutations('templates', {
                setDragNewTemplateOptions: 'setDragNewTemplateOptions',
                addTemplate: 'addTemplate',
            }),

            onDragStartNewTemplate(templateOptions) {
                
                this.setDragNewTemplateOptions(templateOptions);
            },

            onDragEndNewTemplate() {
                
                this.setDragNewTemplateOptions(null);
            },

            add(newTemplate) {
                this.addTemplate({
                    index: this.newTemplateIndex,
                    newTemplate
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .template-select-list {
        display: flex;
        gap: 20px;

        &__item {
            width: 50px;
            height: 50px;
            background-color: $primary;
            border: 2px solid transparent;

            &--choice {
                border-color: $info;
            }
        }
}

</style>