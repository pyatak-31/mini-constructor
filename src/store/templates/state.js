const mock = [
    {
        id: 'id-' + Math.random() * 300,
        name: 'TextTemplate',
        title: 'Title2',
        description: 'Description',
    },
    {
        id: 'id-' + Math.random() * 300,
        name: 'TextTemplate',
        title: 'Title1',
        description: 'Description',
    }
]

export default ({
    templates: JSON.parse(localStorage.getItem('templates')) || [],
    dragEditingTemplateIndex: null,
    dragNewTemplateName: null,
});
