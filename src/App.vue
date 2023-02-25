<template>
  <div id="app">
    <div class="constructor">
        <module-sidebar
            class="constructor__options"
            @onSaveTemplate="saveTemplates"
            @onDragStart="onDragStartNewTemplate"
            @onDragEnd="onDragEndNewTemplate"
        />
       
        <module-editing
            class="constructor__editing"
            :templates="templates"
            :isDragEditingTemplate="isDragEditingTemplate"
            :isDragNewTemplate="isDragNewTemplate"
            @onDragStart="onDragStartEditingTemplate"
            @onDrop="onDrop"
            @onDropNewTemplate="onDropNewTemplate"
            @onDragEndEditingTemplate="onDragEndEditingTemplate"
        />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
    name: 'App',
    components: {
        ModuleSidebar: () => import('@/components/module/options/ModuleOptions.vue'),
        ModuleEditing: () => import('@/components/module/editing/ModuleEditing.vue')
    },

    data() {
        return {
            templates: [],
            dragEditingTemplateIndex: null,
            dragNewTemplateName: null,
        }
    },

    computed: {
        ...mapState('templates', {
            TEMPLATES: 'templates'
        }),

        hasTemplates() {
            return Boolean(this.templates.length);
        },

        isDragEditingTemplate() {
            return Boolean(this.dragEditingTemplateIndex != null);
        },

        isDragNewTemplate() {
            return Boolean(this.dragNewTemplateName != null);
        },
    },

    methods: {
        ...mapActions('templates', {
            SAVE_TEMPLATES: 'saveTemplates'
        }),

        syncWithStorage() {
            this.templates = JSON.parse(JSON.stringify(this.TEMPLATES));
        },

        saveTemplates() {
            this.SAVE_TEMPLATES(this.templates);
        },

        onDragStartEditingTemplate(index) {
            if (this.dragEditingTemplateIndex != index) {
                this.dragEditingTemplateIndex = index;
            }
            console.log(index)
        },

        onDragStartNewTemplate(templateName) {
            this.dragNewTemplateName = templateName;
        },

        onDrop(index) {
            if (this.dragEditingTemplateIndex !== null) {
                if (this.dragEditingTemplateIndex != index) {
                    this.templates[this.dragEditingTemplateIndex] = this.templates.splice(index, 1, this.templates[this.dragEditingTemplateIndex])[0];
                }
                
            };
        },

        onDropNewTemplate(index) {
            if (this.dragNewTemplateName !== null) {
                console.log(this.dragNewTemplateName, index);
                const newTemplate = {
                    id: `id-${ Math.random() }`,
                    name: this.dragNewTemplateName,
                    title: '',
                    description: '',
                };
                this.templates.splice(index, 0, newTemplate);
            }
        },

        onDragEndEditingTemplate() {
            this.dragEditingTemplateIndex = null;
        },

        onDragEndNewTemplate() {
            this.dragNewTemplateName = null;
        }
    },

    mounted() {
        this.syncWithStorage();
    }
}
</script>

<style lang="scss">
    $block-padding: 30px;

    .constructor {
        position: relative;
        display: flex;
        min-height: 100vh;
        
        &__options {
            position: relative;
            padding: $block-padding;
        }
        
        &__editing {
            flex: 1;
            padding: $block-padding;
            background-color: $main-bg;
            overflow-x: auto;
        }
    }
</style>
