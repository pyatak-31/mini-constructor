import axios from "axios";

const API_KEY = "21d63ebe";

export default ({
    async fetchMovies({ commit }) {
        commit('startLoading');
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
                commit('clearError');
            } else {
                commit('addError', data.Error);
            }
        } catch (error) {
            console.log(error);
        } finally {
            commit('completeLoading');
        }
    },

    async searchMovie({ commit }, movie) {
        try {
            const { data } = await axios('http://www.omdbapi.com', {
                method: 'GET',
                params: {
                    apikey: API_KEY,
                    s: movie
                }
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }
});
