<template>
    <div>
        Movies
        {{ error }}
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'ModuleMovies',

        computed: {
            ...mapState('movies', {
                error: 'error'
            }),

            ...mapGetters('movies', {
                hasMovies: 'hasMovies'
            })
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