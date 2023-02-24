export default ({
    setTemplates(state, template) {
        state.templates.push(template);
        localStorage.setItem('templates', JSON.stringify(state.templates));
    },

    removeFromCart(state, templateId) {
        state.templates = state.templates.filter((template) => template.id !== templateId);
        localStorage.setItem('templates', JSON.stringify(state.templates));
    },
});