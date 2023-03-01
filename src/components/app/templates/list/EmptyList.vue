<template>
    <div class="empty-list-template">
        <p class="empty-list-template__description">
            {{ isEditMode ? 'Начните добавлять карточки' : 'Карточки отсутствуют' }}
        </p>

        <add-item
            v-if="isEditMode"
            class="empty-list-template__add-btn"
            @onAddItem="add"
        />
    </div>
</template>

<script>
    export default {
        name: 'EmptyList',

        components: {
            AddItem: () => import('./AddItem.vue'),
        },

        props: {
            isEditMode: Boolean,
        },

        methods: {
            add() {
                this.$emit('onAddCard');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .empty-list-template {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        &__description {
            @include font($dark, 16px, 20px, 400);
        }
    
        &__add-btn {
            margin-top: 20px;
            max-width: 100px;
        }
    }

</style>