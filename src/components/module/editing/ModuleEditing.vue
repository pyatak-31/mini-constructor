<template>
    <div class="editing" >
        Edit block
        <!-- <template v-if="hasTemplates"> -->
            <!-- <transition-group name="list"> -->
        <module-editing-item
            v-for="(template, index) in templates"
            :key="template.id"
            :index="index"
            :id="template.id"
            @onDragStart="onDragStart"
            @onDrop="onDrop"
        >
            <button
                v-if="index === 0"
                @click="add(index)"    
            >+</button>
            
            <component
                :is="template.name"
                :templateData="template"
                @onChangeData="changeTemplateData"
            />

            <button @click="add(index)">+</button>
        </module-editing-item>
    <!-- </transition-group> -->
        <!-- </template> -->
       
        <!-- <button @click="change">change</button> -->
        
    </div>
</template>

<script>
    export default {
        name: 'ModuleEditing',

        components: {
            ModuleEditingItem: () => import('@/components/module/editing/ModuleEditingItem.vue'),
            ModuleText: () => import('@/components/module/text/ModuleText.vue'),
        },

        props: {
            templates: {
                type: Array,
                default: () => []
            }
        },
        
        computed: {
            tmplts() {
                return this.templates;
            }
        },

        methods: {
            changeTemplateData(data) {
                const index = this.templates.findIndex(template => template.id === data.id);
                this.templates.splice(index, 1, data);
            },

            onDragStart(index) {
                this.$emit('onDragStart', index);
            },

            onDrop(index) {
                this.$emit('onDrop', index);
            },

            add(id) {
                console.log(id);
            },
        },
    }
</script>

<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>