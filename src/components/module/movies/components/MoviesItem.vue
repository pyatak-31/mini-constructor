<template>
    <li class="movies-item">
        <div class="movie-item__poster">
            <img :src="movie.Poster" alt="">
        </div>

        <h3 class="movie__title">
            {{ movie.Title }} ({{ movie.Year }})
        </h3>
    </li>
</template>

<script>
    export default {
        name: 'MoviesItem',

        props: {
            movie: {
                type: Object,
                default: () => ({})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .movies-item {


        &__poster {}
    }
</style>