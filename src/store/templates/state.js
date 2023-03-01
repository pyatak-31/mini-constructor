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

class ModuleMovies extends BaseTemplate {
    constructor() {
        super();
        this.name = 'ModuleMovies';
    }
}

export default ({
    templates: JSON.parse(localStorage.getItem('templates')) || [],
    
    dragEditingTemplateIndex: null,
    
    dragNewTemplateOptions: null,

    newTemplateIndex: null,

    templatesForSelection: [
        {
            name: 'TextTemplate',
            iconName: 'file-text',
            Data: TextTemplate,
        },
        {
            name: 'ListTemplate',
            iconName: 'cards',
            Data: ListTemplate
        },
        {
            name: 'ModuleMovies',
            iconName: 'movie',
            Data: ModuleMovies
        }
    ]
});

