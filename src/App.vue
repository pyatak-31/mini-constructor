<template>
  <div id="app">
    <div class="constructor">
        <module-sidebar class="constructor__options" />
       
        <module-editing class="constructor__editing" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    
    components: {
        ModuleSidebar: () => import('@/components/module/options/ModuleOptions.vue'),
        ModuleEditing: () => import('@/components/module/editing/ModuleEditing.vue')
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
