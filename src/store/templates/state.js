const mock = [
    {
        id: 'id-' + Math.random() * 300,
        name: 'ModuleText',
        title: 'Title2',
        description: 'Description',
    },
    {
        id: 'id-' + Math.random() * 300,
        name: 'ModuleText',
        title: 'Title1',
        description: 'Description',
    }
]

export default ({
    templates: JSON.parse(localStorage.getItem('templates')) || mock,
    dragEditingTemplateIndex: null,
    dragNewTemplateName: null,
});
