<template>
    <li class="list-template-item">
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
                :id="`title_${ data.id }`"
                label="Заголовок"
                v-model="moduleData.title"
            />
            
            <ui-textarea
                rows="5"
                :id="`description_${ data.id }`"
                label="Описание"
                v-model="moduleData.description"
            />
    
            <i v-if="moduleData.iconName" class="list-template-item__icon">
                <ui-icon :name="moduleData.iconName" />
            </i>

            <span
                class="list-template-item__icon-empty"
                v-else
            >
                Добавьте иконку
            </span>
    
            <add-item
                class="list-template-item__add-btn"
                @onAddItem="openModal"
            />
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
    }
</style>