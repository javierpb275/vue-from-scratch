Vue.component('props', {
    props: ['name', 'surname'],
    template:`
    <div>
        <h2>Props with Vuejs 2</h2>
        <p>{{name}} {{surname}}</p>
    </div>
    `
});