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
];

class BaseTemplate {
    constructor() {
        this.id = `id-${ Math.random() }`;
    }
}

class TextTemplate extends BaseTemplate {
    constructor() {
        super();
        this.name = 'TextTemplate';
        this.title = '';
        this.description = '';
    }
};

class ListTemplate extends BaseTemplate {
    constructor() {
        super();
        this.name = 'ListTemplate';
        this.list = [];
    }
};

export default ({
    templates: JSON.parse(localStorage.getItem('templates')) || [],
    
    dragEditingTemplateIndex: null,
    
    dragNewTemplateOptions: null,

    templatesForSelection: [
        {
            name: 'TextTemplate',
            iconName: 'T',
            Data: TextTemplate,
        },
        {
            name: 'ListTemplate',
            iconName: 'L',
            Data: ListTemplate
        },
    ]
});

