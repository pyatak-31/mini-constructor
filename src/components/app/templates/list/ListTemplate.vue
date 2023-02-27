<template>
    <div class="list-template">
        <ul
            class="list-template__list"
            v-if="moduleData.list.length"
        >
            <list-template-item
                class="list-template__item"
                v-for="(item, index) in moduleData.list"
                :key="item.id"
                :data="item"
                :index="index"
                @onChangeData="changeModuleData"
                @onDeleteCard="deleteCard"
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
            ListTemplateItem: () => import('./ListTemplateItem.vue'),
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
            },

            deleteCard(index) {
                this.moduleData.list.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-template {


        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        &__item {}
    }
</style>