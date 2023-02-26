export default ({
    setTemplates(state, templates) {
        state.templates = templates;
    },

    addTemplate(state, { index, newTemplate }) {
        state.templates.splice(index, 0, newTemplate);
    },

    replaceTemplate(state, index) {
        state.templates[state.dragEditingTemplateIndex] = state.templates.splice(index, 1, state.templates[state.dragEditingTemplateIndex])[0];
    },

    editTemplate(state, data) {
        const index = state.templates.findIndex(template => template.id === data.id);
        state.templates.splice(index, 1, data);
    },

    setDragEditingTemplateIndex(state, index) {
        state.dragEditingTemplateIndex = index;
    },

    setDragNewTemplateIndex(state, index) {
        state.dragNewTemplateName = index;
    },
});