<template>
  <div id="app">
    <div class="constructor">
        <module-sidebar
            class="constructor__options"
        />
       
        <module-editing
            class="constructor__editing"    
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

    computed: {
        ...mapState('templates', { templates: 'templates' }),
        
        hasTemplates() {
            return Boolean(this.templates.length);
        },
    },
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
