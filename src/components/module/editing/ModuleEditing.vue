<template>
    <div class="editing">
        Edit block
        <!-- <template v-if="hasTemplates"> -->
            <component
                v-for="template in templates"
                :key="template.id"
                :is="template.name"
                :templateData="template"
                @onChangeData="changeTemplateData"
            />
        <!-- </template> -->
       
        <!-- <button @click="change">change</button> -->
        
    </div>
</template>

<script>
    export default {
        name: 'ModuleEditing',

        components: {
            ModuleText: () => import('@/components/module/text/ModuleText.vue')
        },

        props: {
            templates: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            changeTemplateData(data) {
                const index = this.templates.findIndex(template => template.id === data.id);
                this.templates.splice(index, 1, data);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>