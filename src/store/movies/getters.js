export default ({
    hasMovies: (state) => Boolean(state.movies.length),
    
    hasError: (state) => Boolean(state.error),
});
