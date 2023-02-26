<template>
    <li>
        <ui-input
            :id="`title_${ data.id }`"
            label="Заголовок"
            v-model="moduleData.text"
        />
        
        <!-- <ui-textarea
            rows="5"
            :id="`description_${ templateData.id }`"
            label="Описание"
            v-model="moduleData.description"
        /> -->
    </li>
</template>

<script>
    export default {
        name: 'ListTemplateItem',

        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue'),
        },

        props: {
            data: Object
        },

        data() {
            return {
                moduleData: {
                    text: this.data.text,
                }
            }
        },

        watch: {
            moduleData: {
                handler: function(newData) {
                    this.$emit('onChangeData', { ...this.data, ...newData });
                },
                deep: true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>