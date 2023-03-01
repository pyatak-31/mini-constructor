<template>
    <transition-group
        name="list"
        tag="div"
        class="editing-list"
    >
        <div
            class="editing-list__section"
            v-for="(template, index) in templates"
            :key="template.id"
        >
            <add-template
                v-if="index === 0 && isEditMode"
                :index="index"
            />
    
            <editing-item
                :index="index"
                :length="templates.length"
            >
                <component
                    :is="template.name"
                    :templateData="template"
                    :isEditMode="isEditMode"
                    @onChangeData="changeTemplateData"
                />  
            </editing-item>
    
            <add-template
                v-if="isEditMode"
                :index="index + 1"
            />
        </div>
    </transition-group>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'EditingList',

        components: {
            EditingItem: () => import('@/components/module/editing/components/EditingItem.vue'),
            TextTemplate: () => import('@/components/app/templates/TextTemplate.vue'),
            ListTemplate: () => import('@/components/app/templates/list/ListTemplate.vue'),
            AddTemplate: () => import('@/components/module/editing/components/AddTemplate.vue'),
            ModuleMovies: () => import('@/components/module/movies/ModuleMovies.vue'),
        },
        
        computed: {
            ...mapState('templates', {
                templates: 'templates',
                isEditMode: 'isEditMode',
            }),
        },

        methods: {
            ...mapMutations('templates', {
                editTemplate: 'editTemplate'
            }),

            changeTemplateData(data) {
                this.editTemplate(data);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .editing-list {
        display: flex;
        flex-direction: column;
        gap: 50px;

        &__section {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all .5s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>