<template>
    <ul class="icons-list">
        <li
            class="icons-list__item"
            v-for="icon in data"
            :key="icon"   
            @click="select(icon)" 
        >
            <ui-icon :name="icon" />
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'IconsList',

        components: {
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        data() {
            return {
                data: [
                    'save', 'image'
                ]
            }
        },

        methods: {
            select(iconName) {
                this.$emit('onSelectIcon', iconName);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icons-list {


        &__item {
            width: 50px;
        }
    }
</style>