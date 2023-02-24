<template>
    <section>
        <ui-input
            :id="`title_${ templateData.id }`"
            label="Заголовок"
            v-model="moduleData.title"
        />
        
        <textarea cols="30" rows="10" v-model="moduleData.description"></textarea>
    </section>
</template>

<script>
    export default {
        name: 'ModuleText',
        
        components: { UiInput: () => import('@/components/ui/input/UiInput.vue') },

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