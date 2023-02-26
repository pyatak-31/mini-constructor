export default ({
    saveTemplates({ state, commit }, templates) {
        // commit('setTemplates', templates);
        localStorage.setItem('templates', JSON.stringify(state.templates));
    },
});
