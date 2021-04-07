Vue.component('computed-properties', {
    data() {
        return {
            name: 'john',
            surname: 'smith'
        }
    },
    computed: {
        fullName() {
            return `${this.name} ${this.surname}`;
        }

    },
    template: `
    <div>
        <h1>Computed Properties</h1>
        <p>{{fullName}}</p>
    </div>
    `
});