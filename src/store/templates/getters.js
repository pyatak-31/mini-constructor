export default ({
    hasTemplates: (state) => Boolean(state.templates.length),
    
    isDragEditingTemplate: (state) => Boolean(state.dragEditingTemplateIndex != null),
    
    isDragNewTemplate: (state) => Boolean(state.dragNewTemplateOptions != null),

    hasNewTemplateIndex: (state) => Boolean(state.newTemplateIndex != null),
});
