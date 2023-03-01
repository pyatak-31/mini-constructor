<template>
    <div
        class="text-template"
        :class="{ 'text-template--view-mode': !isEditMode }"    
    >
        <ui-input
            class="text-template__field"
            :id="`title_${ templateData.id }`"
            label="Заголовок"
            v-model="moduleData.title"
        />

        <h2 class="text-template__title">
            {{ moduleData.title }}
        </h2>
        
        <ui-textarea
            class="text-template__field"
            rows="5"
            :id="`description_${ templateData.id }`"
            label="Описание"
            v-model="moduleData.description"
        />

        <p class="text-template__description">
            {{ moduleData.description }}
        </p>

        <p
            class="text-template__empty"
            v-if="!isEditMode && isEmptyData"    
        >
            Блок не заполнен
        </p>
    </div>
</template>

<script>
    export default {
        name: 'TextTemplate',
        
        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue')
        },

        props: {
            templateData: {
                type: Object,
            },
            isEditMode: Boolean,
        },

        data() {
            return {
                moduleData: {
                    title: this.templateData.title,
                    description: this.templateData.description
                }
            }
        },

        computed: {
            isEmptyData() {
                return !Boolean(this.moduleData.title) &&
                    !Boolean(this.moduleData.description);
            }
        },

        watch: {
            moduleData: {
                handler: function(newData) {
                    this.$emit('onChangeData', { ...this.templateData, ...newData});
                },
                deep: true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .text-template {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &--view-mode {
            .text-template__field {
                display: none;
            }

            .text-template__title,
            .text-template__description {
                display: block;
            }
        }

        &__title {
            display: none;
            @include font($dark, 30px, 35px, 700);
        }

        &__description {
            display: none;
            @include font($dark, 20px, 23px, 400);
        }

        &__empty {
            @include font($dark, 20px, 23px, 400);
        }
    }
</style>