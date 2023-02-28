export default ({
    hasMovies: (state) => Boolean(state.movies.length),

    shortcutMoviesList: (state) => state.movies.slice(0, 5),
    
    hasError: (state) => Boolean(state.error),
});
