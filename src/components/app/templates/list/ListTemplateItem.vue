<template>
    <li
        class="list-template-item"
        :class="{ 'list-template-item--view-mode' : !isEditMode }"    
    >
        <ui-button
            class="list-template-item__delete-btn"
            theme="danger"
            size="small"
            title="Удалить"
            @onClick="deleteItem" 
        >
            X
        </ui-button>
        
        <div class="list-template-item__body">
            <ui-input
                class="list-template-item__field"
                :id="`title_${ data.id }`"
                label="Заголовок"
                v-model="moduleData.title"
            />

            <h3 class="list-template-item__title">
                {{ moduleData.title }}
            </h3>
            
            <ui-textarea
                class="list-template-item__field"
                rows="5"
                :id="`description_${ data.id }`"
                label="Описание"
                v-model="moduleData.description"
            />

            <p class="list-template-item__description">
                {{ moduleData.description }}
            </p>
    
            <i v-if="moduleData.iconName" class="list-template-item__icon">
                <ui-icon :name="moduleData.iconName" />
            </i>

            <span
                class="list-template-item__icon-empty"
                v-else-if="!moduleData.iconName && isEditMode"
            >
                Добавьте иконку
            </span>
    
            <add-item
                class="list-template-item__add-btn"
                @onAddItem="openModal"
            />

            <p
                class="list-template-item__empty-card"
                v-if="!isEditMode && isEmptyData"    
            >
                Карточка не заполнена
            </p>
        </div>


        <list-template-modal
            :isOpenModal="isOpenModal"
            @onClose="closeModal"
            @onSelectIcon="selectIcon"   
        />
    </li>
</template>

<script>
    export default {
        name: 'ListTemplateItem',

        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue'),
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
            ListTemplateModal: () => import('./ListTemplateModal.vue'),
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
            AddItem: () => import('./AddItem.vue'),
        },

        props: {
            data: Object,
            index: Number,
            isEditMode: Boolean,
        },

        data() {
            return {
                moduleData: {
                    title: this.data.title,
                    description: this.data.description,
                    iconName: this.data.iconName,
                },
                
                newIconName: null,
                isOpenModal: false
            }
        },

        computed: {
            isEmptyData() {
                return !Boolean(this.moduleData.title) &&
                    !Boolean(this.moduleData.description) &&
                    !Boolean(this.moduleData.iconName);
            }
        },

        watch: {
            moduleData: {
                handler: function(newData) {
                    this.$emit('onChangeData', { ...this.data, ...newData });
                },
                deep: true
            }
        },

        methods: {
            openModal() {
                this.isOpenModal = true;
            },

            closeModal() {
                this.isOpenModal = false;
            },

            selectIcon(iconName) {
                this.moduleData.iconName = iconName;
                this.closeModal();
            },

            deleteItem() {
                this.$emit('onDeleteCard', this.index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-template-item {
        display: flex;
        flex-direction: column;
        border: 2px solid $dark;
        border-radius: 5px;
        overflow: hidden;

        &--view-mode {
            .list-template-item__add-btn,
            .list-template-item__delete-btn,
            .list-template-item__field {
                display: none;
            }

            .list-template-item__title,
            .list-template-item__description {
                display: block;
            }
        }

        &__body {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
        }

        &__icon {
            display: inline-block;
            align-self: center;
            width: 100px;
            color: $dark;
        }

        &__icon-empty {
            text-align: center;
            @include font($dark, 12px, 15px, 400);
        }

        &__add-btn {
            margin-top: auto;
        }

        &__delete-btn {
            align-self: flex-end;
            border-radius: 0 0 0 5px;
        }

        &__title {
            display: none;
            text-align: center;
            @include font($dark, 20px, 25px, 700);
        }

        &__description {
            display: none;
            @include font($dark, 16px, 19px, 400);
        }

        &__empty-card {
            @include font($dark, 18px, 20px, 400);
        }
    }
</style>