<template>
    <div class="editing" >
        Edit block
        <!-- <template v-if="hasTemplates"> -->
            <!-- <transition-group name="list"> -->

        <div
            v-for="(template, index) in templates"
            :key="template.id"
        >
            <div
                class="editing__add"
                :class="{ 'editing__add--drag': isDragNewTemplate }"
                v-if="index === 0"
                @click="add(index)"
                @drop.prevent="onDropNewTemplate(index)"
                @dragenter.prevent.stop
                @dragover.prevent.stop
            >+</div>

            <module-editing-item
                :key="template.id"
                :index="index"
                :id="template.id"
                :isDragEditingTemplate="isDragEditingTemplate"
                @onDragStart="onDragStartEditingTemplate"
                @onDrop="onDropEditingTemplate"
                @onDragEnd="onDragEndEditingTemplate"
            >
                <component
                    :is="template.name"
                    :templateData="template"
                    @onChangeData="changeTemplateData"
                />  
            </module-editing-item>
            
            <button
                class="editing__add"
                :class="{ 'editing__add--drag': isDragNewTemplate }"
                @click="add(index + 1)"
                @drop.prevent="onDropNewTemplate(index + 1)"
                @dragenter.prevent.stop
                @dragover.prevent.stop    
            >+</button>
        </div>
        {{ isDragNewTemplate }}
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
            ModuleEditingItem: () => import('@/components/module/editing/ModuleEditingItem.vue'),
            ModuleText: () => import('@/components/module/text/ModuleText.vue'),
        },

        props: {
           
        },
        
        computed: {
            ...mapState('templates', {
                templates: 'templates',
                dragEditingTemplateIndex: 'dragEditingTemplateIndex',
                dragNewTemplateName: 'dragNewTemplateName',

            }),

            ...mapGetters('templates', {
                isDragEditingTemplate: 'isDragEditingTemplate',
                isDragNewTemplate: 'isDragNewTemplate',
            }),
        },

        methods: {
            ...mapMutations('templates', {
                setDragEditingTemplateIndex: 'setDragEditingTemplateIndex'
            }),

            changeTemplateData(data) {
                const index = this.templates.findIndex(template => template.id === data.id);
                this.templates.splice(index, 1, data);
            },

            onDragStartEditingTemplate(index) {
                if (this.dragEditingTemplateIndex != index) {
                    this.setDragEditingTemplateIndex(index);
                    // this.dragEditingTemplateIndex = index;
                }
                console.log(index)
            },

            onDropEditingTemplate(index) {
                if (this.dragEditingTemplateIndex !== null) {
                    if (this.dragEditingTemplateIndex != index) {
                        this.templates[this.dragEditingTemplateIndex] = this.templates.splice(index, 1, this.templates[this.dragEditingTemplateIndex])[0];
                    }
                    
                };
            },

            onDragEndEditingTemplate() {
                this.setDragEditingTemplateIndex(null);
            },

            onDropNewTemplate(index) {
                if (this.dragNewTemplateName !== null) {
                    const newTemplate = {
                        id: `id-${ Math.random() }`,
                        name: this.dragNewTemplateName,
                        title: '',
                        description: '',
                    };
                    this.templates.splice(index, 0, newTemplate);
                }
            },
            
            add(id) {
                console.log(id);
            },
           
        },
    }
</script>

<style lang="scss" scoped>
    .editing {


        &__add {
            width: 100%;
            height: 100px;
            border: 2px solid transparent;

            &--drag {
                border-color: $info;
            }
        }
    }


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