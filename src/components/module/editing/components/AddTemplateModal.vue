<template>
    <app-modal
        v-if="isOpenModal"
        @onClose="closeModal"    
    >
        <template-select-list />
    </app-modal>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'AddTemplateModal',

        components: {
            AppModal: () => import('@/components/app/modal/AppModal.vue'),
            TemplateSelectList: () => import('@/components/module/template-select-list/TemplateSelectList.vue'),
        },

        computed: {
            ...mapGetters('templates', {
                isOpenModal: 'hasNewTemplateIndex',
            }),
        },

        methods: {
            ...mapMutations('templates', {
                setNewTemplateIndex: 'setNewTemplateIndex'
            }),

            closeModal() {
                this.setNewTemplateIndex(null);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>