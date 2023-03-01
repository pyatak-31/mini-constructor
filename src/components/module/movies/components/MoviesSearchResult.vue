<template>
    <div class="movies-search-result">
        <p
            class="movies-search-result__error"
            v-if="hasSearchError"
        >
            {{ searchError }}
        </p>
        
        <movies-list
            class="movies-search-result__list"
            v-if="searchData.length"
            :movies="searchData"
        />

        <p
            class="movies-search-result__list-empty"
            v-else-if="!searchData.length && !hasSearchError"
        >
            Пока ничего не нашли :(
        </p>
    </div>
</template>

<script>
    export default {
        name: 'MoviesSearchResult',

        components: {
            MoviesList: () => import('./MoviesList.vue'),
        },

        props: {
            searchData: Array,
            searchError: String,
        },

        computed: {
            hasSearchError() {
                return Boolean(this.searchError);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .movies-search-result {
        padding: 15px;
        background-color: #e6f8fa;

        &__error,
        &__list-empty {
            @include font($dark, 25px, 30px, 700);
        }
    }
</style>