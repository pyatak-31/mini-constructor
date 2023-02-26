<template>
    <div class="editing" >
        Edit block
        <!-- <template v-if="hasTemplates"> -->
            <!-- <transition-group name="list"> -->

        <div
            v-for="(template, index) in templates"
            :key="template.id"
        >
            <module-add-template
                v-if="index === 0"
                :index="index"
            />

            <module-editing-item
                :key="template.id"
                :index="index"
                :id="template.id"
            >
                <component
                    :is="template.name"
                    :templateData="template"
                    @onChangeData="changeTemplateData"
                />  
            </module-editing-item>

            <module-add-template
                :index="index + 1"
            />
        </div>
        <!-- </transition-group> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'ModuleEditing',

        components: {
            ModuleEditingItem: () => import('@/components/module/editing/ModuleEditingItem.vue'),
            ModuleText: () => import('@/components/module/text/ModuleText.vue'),
            ModuleAddTemplate: () => import('@/components/module/editing/ModuleAddTemplate.vue'),
        },

        props: {},
        
        computed: {
            ...mapState('templates', {
                templates: 'templates',
            }),
        },

        methods: {
            ...mapMutations('templates', {}),

            changeTemplateData(data) {
                const index = this.templates.findIndex(template => template.id === data.id);
                this.templates.splice(index, 1, data);
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