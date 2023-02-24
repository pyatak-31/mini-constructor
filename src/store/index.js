import Vue from 'vue';
import Vuex from 'vuex';
import templates from './templates';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        templates
    }
});
