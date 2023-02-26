export default ({
    setTemplates(state, templates) {
        state.templates = templates;
    },

    addTemplate(state, { index, newTemplate }) {
        state.templates.splice(index, 0, newTemplate);
    },

    setDragEditingTemplateIndex(state, index) {
        state.dragEditingTemplateIndex = index;
    },

    setDragNewTemplateIndex(state, index) {
        state.dragNewTemplateName = index;
    },
});