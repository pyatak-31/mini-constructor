export default ({
    hasTemplates: (state) => Boolean(state.templates.length),

    sotredTemplates: (state) => state.templates.sort((a, b) => a.index - b.index),
});
