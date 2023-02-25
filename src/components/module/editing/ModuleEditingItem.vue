<template>
    <div
        draggable="true"
        @dragstart="onDragStart($event)"
        @drop.prevent.stop="onDrop($event)"
        @dragenter.prevent.stop
        @dragover.prevent.stop=onDragOver
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
        },

        data() {
            return {
                dropId: null,
                isChanged: false
            }
        },

        methods: {
            

            onDragStart(event) {
                this.$emit('onDragStart', this.index);
            },

            onDrop(event) {
                this.$emit('onDrop', this.index);
            },

            onDragOver(event) {
                // const id = event.dataTransfer.getData('text/templateId');
                
                // if (id !== this.dropId) {
                //     this.isChanged = true;
                //     this.dropId = id;
                // } else {
                //     this.isChanged = false;
                // }
                // if (this.isChanged) {
                //     console.log(this.dropId);
                //     console.log(this.id);
                // }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>