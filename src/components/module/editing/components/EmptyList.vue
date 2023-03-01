<template>
    <div class="empty-block">
        <p class="empty-block__description">
            {{ isEditMode ? 'Начните добавлять секции' : 'Пустая страница' }}
        </p>

        <add-template
            v-if="isEditMode"
            class="empty-block__btn"
            :index="0"
        />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'EmptyList',

        components: {
            AddTemplate: () => import('./AddTemplate.vue'),
        },

        computed: {
            ...mapState('templates', {
                isEditMode: 'isEditMode'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .empty-block {

        &__description {
            @include font($dark, 20px, 25px, 400);
        }

        &__btn {
            margin-top: 50px;
        }
    }
</style>