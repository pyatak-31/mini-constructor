<template>
    <ul class="template-select-list">
        <li
            class="template-select-list__item"
            v-for="{ name, iconName, Data } in templates"
            :key="`select${ name }`"
            draggable="true"
            @dragstart="onDragStartNewTemplate({ name, Data })"
            @dragend="onDragEndNewTemplate"
            @dragenter.prevent
            @dragover.prevent
            @drop.prevent
            @click="1" 
        >
            {{ iconName }}
        </li>
    </ul>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';

    export default {
        name: 'TemplateSelectList',

        computed: {
            ...mapState('templates', {
                templates: 'templatesForSelection'
            })
        },

        methods: {
            ...mapMutations('templates', {
                setDragNewTemplateOptions: 'setDragNewTemplateOptions'
            }),

            onDragStartNewTemplate(templateOptions) {
                this.setDragNewTemplateOptions(templateOptions);
            },

            onDragEndNewTemplate() {
                this.setDragNewTemplateOptions(null);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .template-select-list {

        &__item {
            width: 50px;
            height: 50px;
            background-color: $primary;
        }
}

</style>