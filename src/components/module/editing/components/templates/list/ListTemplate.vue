<template>
    <div>
        <ul
            class="list-template__list"
            v-if="moduleData.list.length"
        >
            <list-template-item
                class="list-template__item"
                v-for="item in moduleData.list"
                :key="item.id"
                :data="item"
                @onChangeData="changeModuleData"
            />

            <button @click="add">add</button>
        </ul>

        <div v-else>
            Empty

            <button @click="add">add</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListTemplate',
        
        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue'),
            ListTemplateItem: () => import('@/components/module/editing/components/templates/list/ListTemplateItem.vue'),
        },

        props: {
            templateData: {
                type: Object,
            }
        },

        data() {
            return {
                moduleData: {
                    list: this.templateData.list,
                }
            }
        },

        watch: {
            moduleData: {
                handler: function(newData) {
                    this.$emit('onChangeData', { ...this.templateData, ...newData});
                },
                deep: true
            }
        },

        methods: {
            add() {
                this.moduleData.list.push({
                    id: `listItemId-${ Math.random() }`,
                    title: '',
                    description: '',
                    iconName: ''
                });
            },

            // TODO use function
            changeModuleData(data) {
                const index = this.moduleData.list.findIndex(template => template.id === data.id);
                this.moduleData.list.splice(index, 1, data);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>