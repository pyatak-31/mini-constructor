<template>
    <div class="movies">
        <h2 class="movies__title">
            Киноблок
        </h2>
    
        <app-search
            class="movies__search"
            :isLoading="isLoadingSearchResult"
            @onSearching="findMovie"
        />

        <movies-search-result
            class="movies__search-result"
            :searchData="searchData"
            :searchError="searchError"
        />
        
        <movies-recommendation-list
            class="movies__recommendation-list"
            :movies="movies"
            :hasMovies="hasMovies"
            :isLoading="isLoadingRecommendationMovies"
        />
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'ModuleMovies',

        components: {
            AppSearch: () => import('@/components/app/search/AppSearch.vue'),
            MoviesSearchResult: () => import('./components/MoviesSearchResult.vue'),
            MoviesRecommendationList: () => import('./components/MoviesRecommendationList.vue'),
        },

        data() {
            return {
                searchData: [],
                searchError: null,
                isLoadingSearchResult: false,
            }
        },

        computed: {
            ...mapState('movies', {
                error: 'error',
                isLoadingRecommendationMovies: 'isLoading'
            }),

            ...mapGetters('movies', {
                hasMovies: 'hasMovies',
                movies: 'shortcutMoviesList', 
            }),
        },

        methods: {
            ...mapActions('movies', {
                uploadMovies: 'fetchMovies',
                searchMovie: 'searchMovie',
            }),

            async findMovie(movie) {
                if (movie == '') {
                    this.searchData = [];
                    this.searchError = null;
                    return false;
                }

                this.isLoadingSearchResult = true;

                const data = await this.searchMovie(movie);
                if (data.Response === 'True') {
                    this.searchData = data.Search;
                    this.searchError = null;
                } else {
                    this.searchData = [];
                    this.searchError = data.Error;
                }

                this.isLoadingSearchResult = false;
            }
        },

        async mounted() {
            if (!this.hasMovies) {
                await this.uploadMovies();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .movies {

        &__title {
            @include font($dark, 40px, 45px, 700);
        }

        &__search {
            margin-top: 50px;
        }

        &__search-result {
            margin-top: 30px;
        }

        &__recommendation-list {
            margin-top: 50px;
        }
    }
</style>