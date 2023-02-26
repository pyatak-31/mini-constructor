export default ({
    hasTemplates: (state) => Boolean(state.templates.length),
    
    isDragEditingTemplate: (state) => Boolean(state.dragEditingTemplateIndex != null),
    
    isDragNewTemplate: (state) => Boolean(state.dragNewTemplateName != null),

    // templates: (state) => JSON.parse(JSON.stringify(state.templates)),
    
    // sotredTemplates: (state) => state.templates.sort((a, b) => a.index - b.index),
});
