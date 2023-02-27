<template>
    <li class="list-template-item">
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

        <button @click="openModal">add icon+</button>

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
            ListTemplateModal: () => import('./ListTemplateModal.vue')
        },

        props: {
            data: Object
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
        }
    }
</script>

<style lang="scss" scoped>
    .list-template-item {
        border: 2px solid $dark;

        &__icon {
            display: inline-block;
            width: 50px;
            color: $dark;
        }
    }
</style>