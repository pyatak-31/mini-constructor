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

            <options-control
                class="options__control"
                :isEditMode="isEditMode"
                @onSwitchMode="switchMode"
                @onSaveTemplates="saveTemplates"    
            />
        </app-sticky>
    </aside>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex';

    export default {
        name: 'ModuleOptions',
        
        components: {
            AppSticky: () => import('@/components/app/sticky/AppSticky.vue'),
            OptionsControl: () => import('./components/OptionsControl.vue'),
            TemplateSelectList: () => import('@/components/module/template-select-list/TemplateSelectList.vue'),
        },

        computed: {
            ...mapState('templates', {
                isEditMode: 'isEditMode'
            })
        },

        methods: {
            ...mapActions('templates', {
                saveTemplates: 'saveTemplates'
            }),

            ...mapMutations('templates', {
                setDragNewTemplateIndex: 'setDragNewTemplateIndex',
                switchMode: 'switchEditMode'
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
    .options {
        position: fixed;
        bottom: 0;
        z-index: 5;
        width: 100%;
        height: $fixed-menu-height;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $white;
        box-shadow: $shadow-2;
        
        @media (min-width: $lg) {
            position: relative;
            display: block;
            width: 300px;
            height: auto;
            padding: 30px;
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

        &__control {
            margin-top: auto;
        }
    }
</style>