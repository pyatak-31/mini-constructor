export default ({
    saveTemplates({ commit }, templates) {
        commit('setTemplates', templates);
        localStorage.setItem('templates', JSON.stringify(templates));
    }
});
