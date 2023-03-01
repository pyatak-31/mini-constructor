<template>
    <aside class="options">
        <app-sticky
            class="options__wrapper"
            top="30"
        >
            <h3 class="options__template-title">
                Шаблоны
            </h3>

            <template-select-list
                class="options__template-select-list"
                draggable
            />

            <ui-button
                class="options__save-btn"
                theme="success"
                @onClick="saveTemplates"
            >
                <template #left-icon>
                    <ui-icon name="save" />
                </template>
                Save
            </ui-button>
        </app-sticky>
    </aside>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';

    export default {
        name: 'ModuleOptions',
        
        components: {
            AppSticky: () => import('@/components/app/sticky/AppSticky.vue'),
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
            TemplateSelectList: () => import('@/components/module/template-select-list/TemplateSelectList.vue'),
        },

        methods: {
            ...mapActions('templates', {
                saveTemplates: 'saveTemplates'
            }),

            ...mapMutations('templates', {
                setDragNewTemplateIndex: 'setDragNewTemplateIndex'
            }),

            onDragStartNewTemplate(templateName) {
                this.setDragNewTemplateIndex(templateName);
            },

            onDragEndNewTemplate() {
                this.setDragNewTemplateIndex(null);
            },
        }
    }
</script>

<style lang="scss" scoped>
    $width: 300px;

    .options {
        position: fixed;
        bottom: 0;
        z-index: 5;
        padding: 30px;

        // @media (min-width: $lg) {
        // }
        
        width: 100%;
        height: 100px;
        background-color: $white;
        box-shadow: $shadow-2;
        
        @media (min-width: $lg) {
            position: relative;
            width: $width;
            height: auto;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            
            @media (min-width: $lg) {
                height: calc(100vh - 60px);
                
            }
        }

        &__template-title {
            display: none;
            @include font($dark, 25px, 30px, 700);

            @media (min-width: $lg) {
                display: block;
            }
        }

        &__template-select-list {

            &.template-select-list {
                display: none;
                margin-top: 30px;
    
                @media (min-width: $lg) {
                    display: grid;
                }
                
            }
        }

        &__save-btn {
            margin-top: auto;
        }
    }
</style>