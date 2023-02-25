<template>
  <div id="app">
    <div class="constructor">
        <module-sidebar
            class="constructor__options"
            @onSaveTemplate="saveTemplates"
        />
       
        <module-editing
            class="constructor__editing"
            :templates="templates"
            @onDragStart="onDragStartEditingTemplate"
            @onDrop="onDrop"
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
            dragEditItemIndex: null,
        }
    },

    computed: {
        ...mapState('templates', {
            TEMPLATES: 'templates'
        }),

        hasTemplates() {
            return Boolean(this.templates.length);
        }
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
            if (this.dragEditItemIndex != index) {
                this.dragEditItemIndex = index;
            }
            console.log(index)
        },

        onDrop(index) {
            if (!this.dragEditItemIndex) return false;
            console.log(index)
            if (this.dragEditItemIndex != index) {
                this.templates[this.dragEditItemIndex] = this.templates.splice(index, 1, this.templates[this.dragEditItemIndex])[0];
            }
            this.dragEditItemIndex = null;
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
