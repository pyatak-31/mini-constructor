export default ({
    setTemplates(state, templates) {
        state.templates = templates;
    },

    setDragEditingTemplateIndex(state, index) {
        state.dragEditingTemplateIndex = index;
    },

    setDragNewTemplateIndex(state, index) {
        state.dragNewTemplateName = index;
    },
});