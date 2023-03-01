<template>
    <div class="list-template">
        <ul
            class="list-template__list"
            v-if="hasCards"
        >
            <list-template-item
                class="list-template__item"
                v-for="(item, index) in moduleData.list"
                :key="item.id"
                :data="item"
                :index="index"
                :isEditMode="isEditMode"
                @onChangeData="changeModuleData"
                @onDeleteCard="deleteCard"
            />

            <add-item
                v-if="isEditMode"
                class="list-template__add-btn"
                @onAddItem="add"
            />
        </ul>

        <empty-list
            v-else
            :isEditMode="isEditMode"
            @onAddCard="add"
        />
    </div>
</template>

<script>
    export default {
        name: 'ListTemplate',
        
        components: {
            ListTemplateItem: () => import('./ListTemplateItem.vue'),
            AddItem: () => import('./AddItem.vue'),
            EmptyList: () => import('./EmptyList.vue'),
        },

        props: {
            templateData: {
                type: Object,
            },

            isEditMode: Boolean,
        },

        data() {
            return {
                moduleData: {
                    list: this.templateData.list,
                }
            }
        },

        computed: {
            hasCards() {
                return Boolean(this.moduleData.list.length);
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
            grid-template-columns: repeat(auto-fill, 1fr);
            gap: 20px;

            @media (min-width: $sm) {
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            }
        }

        // &__item {}

        &__add-btn {
            min-height: 100px;
            
            @media (min-width: $sm) {
                min-width: 300px;
            }
        }
    }
</style>