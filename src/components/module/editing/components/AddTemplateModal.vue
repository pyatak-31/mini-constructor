<template>
    <app-modal
        class="add-template-modal"
        v-if="isOpenModal"
        title="Добавить шаблон"
        @onClose="closeModal"    
    >
        <h4 class="add-template-modal__title">
            Выберите шаблон
        </h4>

        <template-select-list class="add-template-modal__list" />
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
    .add-template-modal {

        &__title {
            @include font($dark, 18px, 21px, 400);
        }

        &__list {
            margin-top: 30px;
        }
    }
</style>