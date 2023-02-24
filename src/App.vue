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
        />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'App',
    components: {
        ModuleSidebar: () => import('@/components/module/options/ModuleOptions.vue'),
        ModuleEditing: () => import('@/components/module/editing/ModuleEditing.vue')
    },

    data() {
        return {
            templates: [],
        }
    },

    computed: {
        ...mapGetters('templates', {
            HAS_TEMPLATES_IN_STORAGE: 'hasTemplates',
            TEMPLATES: 'sotredTemplates'
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
