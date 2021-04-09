Vue.component('loops', {
    data() {
        return {
            frameworks: [
                {id: 1, name: 'Vuejs 2'},
                {id: 2, name: 'Reactjs'},
                {id: 3, name: 'Ember'},
                {id: 4, name: 'Adonisjs'},
                {id: 5, name: 'Angular'},
                {id: 6, name: 'Laravel'},
            ]
        }
    },
    template:`
    <div>
        <h1>Loops with v-for</h1>
        <ul v-if="frameworks.length">
            <li v-for="(framework, index) in frameworks" :key="framework.id">
                ({{index}}) | {{ framework.name }}
            </li>
        </ul>
    </div>
    `
});