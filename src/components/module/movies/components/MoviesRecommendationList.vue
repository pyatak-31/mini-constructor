<template>
    <div class="movies-recommendation">
        <div class="movies-recommendation__head">
            <h3 class="movies-recommendation__title">
                Рекомендуем!
            </h3>

            <i
                class="movies-recommendation__loader"
                v-if="isLoading"
            >
                <ui-loader dark />
            </i>
        </div>

        <movies-list
            class="movies-recommendation__list"
            v-if="hasMovies && !isLoading"
            :movies="movies"
        />

        <p
            class="movies-recommendation__empty"
            v-else    
        >
            Сегодня нам нечего порекомендовать :(
        </p>
    </div>
</template>

<script>
    export default {
        name: 'MoviesRecommendationList',

        components: {
            MoviesList: () => import('./MoviesList.vue'),
            UiLoader: () => import('@/components/ui/loader/UiLoader.vue'),
        },

        props: {
            movies: Array,
            hasMovies: Boolean,
            isLoading: Boolean,
        }
    }
</script>

<style lang="scss" scoped>
    .movies-recommendation {
        padding: 15px;
        background-color: #f7f8eb;

        &__head {
            display: flex;
            justify-content: space-between;
        }

        &__title {
            @include font($dark, 25px, 30px, 700);
        }

        &__list {
            margin-top: 30px;
        }

        &__loader {
            display: inline-block;
            width: 50px;
            height: 50px;
        }

        &__empty {
            @include font($dark, 23px, 27px, 400);
        }
    }
</style>