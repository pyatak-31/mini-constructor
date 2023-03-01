<template>
    <div class="editing" >
        <app-container>
            <editing-list v-if="hasTemplates" />
            
            <empty-list v-else />
            
            <add-template-modal></add-template-modal>
        </app-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
            AppContainer: () => import('@/components/app/container/AppContainer.vue'),
            EditingList: () => import('./components/EditingList.vue'),
            AddTemplateModal: () => import('./components/AddTemplateModal.vue'),
            EmptyList: () => import('./components/EmptyList.vue'),
        },
        
        computed: {
            ...mapGetters('templates', {
                hasTemplates: 'hasTemplates',
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .editing {
        padding: 10px;
        background-color: $main-bg;

        @media (min-width: $sm) {
            padding: 30px;
        }
    }
</style>