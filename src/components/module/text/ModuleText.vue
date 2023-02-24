<template>
    <section>
        <ui-input
            :id="`title_${ templateData.id }`"
            label="Заголовок"
            v-model="moduleData.title"
        />
        
        <ui-textarea
            rows="5"
            :id="`description_${ templateData.id }`"
            label="Описание"
            v-model="moduleData.description"
        />
    </section>
</template>

<script>
    export default {
        name: 'ModuleText',
        
        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue')
        },

        props: {
            templateData: {
                type: Object,
            }
        },

        data() {
            return {
                moduleData: {
                    title: this.templateData.title,
                    description: this.templateData.description
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
    }
</script>

<style lang="scss" scoped>

</style>