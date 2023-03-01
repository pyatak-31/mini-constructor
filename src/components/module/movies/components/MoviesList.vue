<template>
    <ul class="movies-list">
        <movies-item
            class="movies-list__item"
            v-for="{  Title, Year, Poster, imdbID } in movies"
            :key="imdbID"
            :title="Title"
            :year="Year"
            :poster="Poster"
        />
    </ul>
</template>

<script>
    export default {
        name: 'MoviesList',

        components: {
            MoviesItem: () => import('./MoviesItem.vue'),
        },

        props: {
            movies: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .movies-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }
</style>