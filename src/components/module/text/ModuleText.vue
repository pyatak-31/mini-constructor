<template>
    <section>
        <input type="text" v-model="moduleData.title">
        <textarea cols="30" rows="10" v-model="moduleData.description"></textarea>
    </section>
</template>

<script>
    export default {
        name: 'ModuleText',

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