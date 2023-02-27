<template>
    <div>
        <!-- <transition-group name="list"> -->
        <div
            v-for="(template, index) in templates"
            :key="template.id"
        >
            <add-template
                v-if="index === 0"
                :index="index"
            />
    
            <editing-item
                :index="index"
            >
                <component
                    :is="template.name"
                    :templateData="template"
                    @onChangeData="changeTemplateData"
                />  
            </editing-item>
    
            <add-template
                :index="index + 1"
            />
        </div>
        <!-- </transition-group> -->
    </div>
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
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>