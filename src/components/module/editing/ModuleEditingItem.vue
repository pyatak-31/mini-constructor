<template>
    <div
        class="editing-template"
        :class="{ 'editing-template--drag': isDragEditingTemplate }"
        draggable="true"
        @dragstart="onDragStart($event)"
        @drop.prevent="onDrop($event)"
        @dragend="onDragEnd"
        @dragenter.prevent.stop
        @dragover.prevent.stop
    >
        <!-- <div v-if="index === 0">+</div> -->
        <slot />
        <!-- <button @click="add">+</button> -->
    </div>
</template>

<script>
    export default {
        name: 'ModuleEditingItem',

        props: {
            index: Number,
            id: String,
            isDragEditingTemplate: Boolean
        },

        data() {
            return {
                dropId: null,
                isChanged: false
            }
        },

        methods: {
            

            onDragStart() {
                this.$emit('onDragStart', this.index);
            },

            onDrop() {
                this.$emit('onDrop', this.index);
            },

            onDragEnd() {
                this.$emit('onDragEnd');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .editing-template {
        border: 2px solid transparent;

        &--drag {
            border-color: $success;
        }
    }
</style>