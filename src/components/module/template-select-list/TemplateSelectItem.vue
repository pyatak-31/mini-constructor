<template>
    <li
        class="template-select-list__item"
        draggable="true"
        @dragstart="onDragStart({ name, Data })"
        @dragend="onDragEnd"
        @dragenter.prevent
        @dragover.prevent
        @drop.prevent
        @click="onAdd({ name, Data })" 
    >
        {{ iconName }}
    </li>
</template>

<script>
    export default {
        name: 'TemplateSelectItem',

        props: {
            name: String,
            iconName: String,
            Data: Function,
            draggable: Boolean,
        },

        methods: {
            onDragStart() {
                if (!this.draggable) {
                    return false;
                }
                this.$emit('onDragStart', {
                    name: this.name,
                    Data: this.Data
                });
            },

            onDragEnd() {
                if (!this.draggable) {
                    return false;
                }
                this.$emit('onDragEnd');
            },

            onAdd() {
                if (this.draggable) {
                    return false;
                }
                this.$emit('onAdd', new this.Data);
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>