<template>
    <div class="options-control">
        <ui-button
            class="options-control__btn"
            theme="info"
            outline
            @onClick="switchMode"
        >
            <template #left-icon>
                <ui-icon :name="isEditMode ? 'eye' : 'pencil'" />
            </template>
            
            <span>
                {{ isEditMode ? 'Просмотр' : 'Редактирование' }}
            </span>
        </ui-button>

        <ui-button
            class="options-control__btn"
            theme="success"
            @onClick="saveTemplates"
        >
            <template #left-icon>
                <ui-icon name="save" />
            </template>

            <span>
                Save
            </span>
        </ui-button>
    </div>
</template>

<script>
    export default {
        name: 'OptionsControl',

        components: {
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        props: {
            isEditMode: Boolean
        },

        methods: {
            switchMode() {
                this.$emit('onSwitchMode');
            },

            saveTemplates() {
                this.$emit('onSaveTemplates');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .options-control {
        display: flex;
        justify-content: center;
        gap: 20px;

        @media (min-width: $lg) {
            flex-direction: column;
        }
        
        &__btn {
            span {
                display: none;
                
                @media (min-width: $sm) {
                    display: inline-block;   
                }
            }    
        }
    }
</style>