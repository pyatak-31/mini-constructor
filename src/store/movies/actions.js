import axios from "axios";

const API_KEY = "21d63ebe";

export default ({
    async fetchMovies({ commit }) {
        try {
            const { data } = await axios('http://www.omdbapi.com', {
                method: 'GET',
                params: {
                    apikey: API_KEY,
                    s: 'godfather'
                }
            });
            if (data.Response === 'True') {
                commit('setMovies', data.Search);
                commit('setError', null);
            } else {
                commit('setError', data.Error);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    },
});
