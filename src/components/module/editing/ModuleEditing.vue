<template>
    <div class="editing" >
        <div class="container">
            <editing-list v-if="hasTemplates" />
            
            <empty-list v-else />
            
            <add-template-modal></add-template-modal>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
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
    // .editing {}
</style>