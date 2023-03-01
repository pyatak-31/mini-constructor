export default ({
    saveTemplates({ state, commit }, templates) {
        localStorage.setItem('templates', JSON.stringify(state.templates));
    },
});
