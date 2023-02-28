<template>
    <div class="empty-block">
        <p class="empty-block__description">
            Начните добавлять секции
        </p>

        <add-template
            class="empty-block__btn"
            :index="0"
        />
    </div>
</template>

<script>
    export default {
        name: 'EmptyList',

        components: {
            AddTemplate: () => import('./AddTemplate.vue'),
        },
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