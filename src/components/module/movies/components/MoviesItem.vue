<template>
    <li class="movies-item">
        <div class="movies-item__poster">
            <img v-if="movie.Poster != 'N/A'" :src="movie.Poster" alt="">

            <ui-icon v-else name="image" />
        </div>

        <div class="movies-item__footer">
            <h4 class="movies-item__title">
                {{ movie.Title }} ({{ movie.Year }})
            </h4>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'MoviesItem',

        components: {
            UiIcon: () => import('@/components/ui/icon/UiIcon.vue'),
        },

        props: {
            movie: {
                type: Object,
                default: () => ({})
            },
            // Title: {
            //     type: String,
            //     default: ''
            // },
            
            // Year,

            // Poster: {
            //     type: String,
            //     default: ''
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .movies-item {
        display: flex;
        flex-direction: column;
        border: 2px solid $dark;
        border-radius: 5px;
        box-shadow: $shadow-2;

        &__poster {
            display: flex;
            height: 300px;
            
            img {
                height: 100%;
            }
        }

        &__footer {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            background-color: $primary-20;
            border-top: 2px solid $dark;
        }

        &__title {
            @include font($dark, 15px, 18px, 700);
        }
    }
</style>