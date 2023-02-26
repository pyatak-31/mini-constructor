<template>
    <div class="editing" >
        Edit block
        
        <editing-list v-if="hasTemplates" />

        <div v-else>
            <span >Empty</span>

            <add-template :index="0" />
        </div>
        
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
            EditingList: () => import('@/components/module/editing/components/EditingList.vue'),
            AddTemplate: () => import('@/components/module/editing/components/AddTemplate.vue'),
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