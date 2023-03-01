<template>
    <div class="movies">
        <h2 class="movies__title">
            Киноблок
        </h2>
    
        <app-search
            class="movies__search"
            @onSearching="findMovie"
        />

        <div class="movies__search-result">
            <p
                class="movies__search-error"
                v-if="hasSearchError"
            >
                {{ searchError }}
            </p>
            
            <movies-list
                class="movies__search-list"
                v-if="searchData.length"
                :movies="searchData"
            />

            <p
                class="movies__search-list-empty"
                v-else-if="!searchData.length && !hasSearchError"
            >
                Пока ничего не нашли :(
            </p>
        </div>
        
        
        <div class="movies__recommendation">
            <h3 class="movies__recommendation-title">
                Рекомендуем!
            </h3>

            <movies-list
                class="movies__recommendation-list"
                v-if="hasMovies"
                :movies="movies"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'ModuleMovies',

        components: {
            MoviesList: () => import('./components/MoviesList.vue'),
            AppSearch: () => import('@/components/app/search/AppSearch.vue'),
            UiButton: () => import('@/components/ui/button/UiButton.vue'),
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
                if (movie == '') {
                    this.searchData = [];
                    this.searchError = null;
                    return false;
                }
                const data = await this.searchMovie(movie);
                if (data.Response === 'True') {
                    this.searchData = data.Search;
                } else {
                    this.searchError = data.Error;
                }
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
    .movies {

        &__title {
            @include font($dark, 40px, 45px, 700);
        }

        &__search {
            margin-top: 50px;
        }

        &__search-result {
            margin-top: 30px;
            padding: 15px;
            background-color: #e6f8fa;
        }

        &__search-error,
        &__search-list-empty {
            
            @include font($dark, 25px, 30px, 700);
        }

        &__search-list {
            // margin-top: 30px;
        }

        &__recommendation {
            margin-top: 50px;
            padding: 15px;
            background-color: #f7f8eb;
        }

        &__recommendation-title {
            @include font($dark, 25px, 30px, 700);
        }

        &__recommendation-list {
            margin-top: 30px;
            
        }
    }
</style>