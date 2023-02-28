<template>
    <ul class="movies-list">
        <movies-item
            class="movies-list__item"
            v-for="movie in movies"
            :key="movie.imdbID"
            :movie="movie"
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
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
</style>