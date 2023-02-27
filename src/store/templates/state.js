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
            iconName: 'T',
            Data: TextTemplate,
        },
        {
            name: 'ListTemplate',
            iconName: 'L',
            Data: ListTemplate
        },
        {
            name: 'ModuleMovies',
            iconName: 'M',
            Data: ModuleMovies
        }
    ]
});

