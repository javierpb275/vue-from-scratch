Vue.component('computed-properties', {
    data() {
        return {
            name: 'john',
            surname: 'smith'
        }
    },
    template: `
    <div>
        <h1>Computed Properties</h1>
        <p>{{name}} {{surname}}</p>
    </div>
    `
});