<template>
    <div class="movies">
        Movies
        {{ error }}

        <movies-list
            class="movies__list"
            v-if="hasMovies"
            :movies="movies"
        />
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'ModuleMovies',

        components: {
            MoviesList: () => import('./components/MoviesList.vue'),
        },

        computed: {
            ...mapState('movies', {
                error: 'error'
            }),

            ...mapGetters('movies', {
                hasMovies: 'hasMovies',
                movies: 'shortcutMoviesList'
            }),
        },

        methods: {
            ...mapActions('movies', {
                uploadMovies: 'fetchMovies'
            }),
        },

        mounted() {
            if (!this.hasMovies) {
                this.uploadMovies();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>