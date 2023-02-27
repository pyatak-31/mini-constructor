<template>
    <div class="editing" >
        Edit block
        
        <editing-list v-if="hasTemplates" />

        <div v-else>
            <span >Empty</span>

            <add-template :index="0" />
        </div>
        
        <add-template-modal></add-template-modal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
            EditingList: () => import('./components/EditingList.vue'),
            AddTemplate: () => import('./components/AddTemplate.vue'),
            AddTemplateModal: () => import('./components/AddTemplateModal.vue'),
        },
        
        computed: {
            ...mapGetters('templates', {
                hasTemplates: 'hasTemplates',
            }),
        },
    }
</script>

<style lang="scss" scoped>
    
</style>