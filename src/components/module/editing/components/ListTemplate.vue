<template>
    <ul>
        <li>
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
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'ListTemplate',

        components: {
            UiInput: () => import('@/components/ui/input/UiInput.vue'),
            UiTextarea: () => import('@/components/ui/textarea/UiTextarea.vue')
        },
    }
</script>

<style lang="scss" scoped>

</style>