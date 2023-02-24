const mock = [
    {
        id: 'id-' + Math.random() * 300,
        name: 'ModuleText',
        title: 'Title2',
        description: 'Description',
        index: 2,
    },
    {
        id: 'id-' + Math.random() * 300,
        name: 'ModuleText',
        title: 'Title1',
        description: 'Description',
        index: 1
    }
]

export default ({
    templates: JSON.parse(localStorage.getItem('templates')) || mock,

});
