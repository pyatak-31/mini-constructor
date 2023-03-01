<template>
    <app-modal
        class="list-template-modal"
        v-if="isOpenModal"
        title="Добавить иконку"
        @onClose="close"    
    >
        <h4 class="list-template-modal__title">
            Выберите иконку
        </h4>

        <icons-list
            class="list-template-modal__list"
            @onSelectIcon="selectIcon"
        />
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
    .list-template-modal {

        &__title {
            @include font($dark, 18px, 21px, 400);
        }

        &__list {
            margin-top: 30px;
        }
    }

</style>