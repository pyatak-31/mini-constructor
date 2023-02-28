<template>
    <div class="movies">
        Movies
        
        <app-search
            @onSearching="findMovie"
        />

        <div>
            <p v-if="hasSearchError">
                {{ searchError }}
            </p>
            
            <movies-list
                class="movies__list"
                v-if="searchData.length"
                :movies="searchData"
            />
        </div>
        
        
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
            AppSearch: () => import('@/components/app/search/AppSearch.vue'),
        },

        data() {
            return {
                searchData: [],
                searchError: null,
            }
        },

        computed: {
            ...mapState('movies', {
                error: 'error'
            }),

            ...mapGetters('movies', {
                hasMovies: 'hasMovies',
                movies: 'shortcutMoviesList'
            }),

            hasSearchError() {
                return Boolean(this.searchError);
            },
        },

        methods: {
            ...mapActions('movies', {
                uploadMovies: 'fetchMovies',
                searchMovie: 'searchMovie',
            }),

            async findMovie(movie) {
                const data = await this.searchMovie(movie);
                if (data.Response === 'True') {
                    this.searchData = data.Search;
                } else {
                    this.searchError = data.Error;
                }
                console.log(data);
            }
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