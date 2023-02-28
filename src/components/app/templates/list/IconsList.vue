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
                    'save',
                    'image',
                    'circle-alert',
                    'circle-check',
                    'circle-plus',
                    'circle-help',
                    'circle-info',
                    'emoji-sad',
                    'emoji-smile',
                    'cirlce-x'
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
        display: grid;
        grid-template-columns: repeat(auto-fill, 84px);
        gap: 10px;

        &__item {
            border-radius: 5px;
            transition: background-color .3;

            &:hover {
                background-color: $success-20;
            }
        }
    }
</style>