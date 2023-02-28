export default ({
    setMovies(state, movies) {
        state.movies = movies;
    },

    addError(state, error) {
        state.error = error;
    },

    clearError(state) {
        state.error = null;
    },

    startLoading(state) {
        state.isLoading = true;
    },

    completeLoading(state) {
        state.isLoading = false;
    },
});