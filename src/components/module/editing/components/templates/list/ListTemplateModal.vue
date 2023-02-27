<template>
    <app-modal
        v-if="isOpenModal"
        @onClose="close"    
    >
        <icons-list @onSelectIcon="selectIcon" />
    </app-modal>
</template>

<script>
    export default {
        name: 'ListTemplateModal',

        components: {
            AppModal: () => import('@/components/app/modal/AppModal.vue'),
            IconsList: () => import('./IconsList.vue'),
        },

        props: {
            isOpenModal: Boolean
        },

        methods: {
            close() {
                this.$emit('onClose')
            },

            selectIcon(iconName) {
                this.$emit('onSelectIcon', iconName);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>